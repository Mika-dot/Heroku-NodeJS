const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const supabase = require('./configs/db.config')
const helpers = require('./Filter');
const multer = require('multer');
var path = require('path');
const ModelStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/public/Models/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now().toString());
    }
});
var fs = require('fs');
const jsonParser = express.json();
const urlencodedParser = express.urlencoded({ extended: false });
router.route('/:id')
    .post(jsonParser, (req, res) => {
        if (req.params.id == 'new') {
            let upload = multer({ storage: ModelStorage, fileFilter: helpers.modelsFilter }).single('files');
            upload(req, res, function (err) {
                if (req.fileValidationError) {
                    return res.send(`{"status":"1"}`);
                }
                else if (err instanceof multer.MulterError) {
                    return res.send(`{"status":"2"}`);
                }
                else if (err) {
                    return res.send(`{"status":"3","data":"` + err + `"}`);
                }
                if (req.body.UUID == undefined | req.body.UUID == 0) res.send("{\"status\": \"4\"}");
                else {
                    //добавляем новую
                    console.log("Добавление новой карты: " + JSON.stringify(req.body));
                    let r = GetUserByUUID(req.body.UUID);
                    r.then(result => {
                        if (result.Status == 0) {
                            console.log(JSON.stringify(upload));
                            let rr = AddCard(req.body.Name, req.body.Text, req.body.TextS, result.ID, req.file.filename, path.extname(req.file.originalname));
                            rr.then(resss => {
                                if (resss.status == 0) fs.rename('/public/Models/new', '/public/Models/' + resss.id, err => {});
                                res.send("{\"status\": \"" + resss.status + "\"}");
                            });
                        }
                        else {
                            res.send("{\"status\": \"" + result.Status + "\"}");
                        }
                    }
                    );
                }
            });

        }
        if (req.params.id == 'add') {
            //добавляем в отложенное
            console.log("Добавление новой карты: " + JSON.stringify(req.body));
            if (req.body.UUID == undefined | req.body.UUID == 0) res.send("{\"status\": \"3\"}");
            else {
                let r = GetUserByUUID(req.body.UUID);
                r.then(result => {
                    if (result.Status == 0) {
                        let rr = LikesCard(result.ID, req.body.ID);
                        rr.then(resss => {
                            res.send("{\"status\": \"0\"}");
                        });
                    }
                    else {
                        res.send("{\"status\": \"" + result.Status + "\"}");
                    }
                }
                );
            }
        }
    })
    .get(urlencodedParser, (req, res) => {
        if (req.params.id == 'all') {
            if (req.query.author == undefined && req.query.likedby == undefined) {
                let rr = GetCards();
                rr.then(ressss => res.send(`{"status":"0", "data":` + JSON.stringify(ressss) + `}`));
            }
            else {
                if (req.query.likedby == undefined) {
                    let rr = GetCardsByAuthor(req.query.author);
                    rr.then(ressss => res.send(`{"status":"0", "data":` + JSON.stringify(ressss) + `}`));
                }
                else {
                    let rr = GetLikedCards(req.query.likedby);
                    rr.then(ressss => res.send(`{"status":"0", "data":` + JSON.stringify(ressss) + `}`));
                }
            }
        }
        else {
            let rr = GetCard(req.params.id);
            rr.then(ressss => res.send(`{"data":` + JSON.stringify(ressss) + `}`));
        }
    })
    .put(jsonParser, (req, res) => {
        console.log("Карточка изменится так: "+ req.body);//JSON.stringify(req.body));
        let r = UpdateCard(req.body.Name, req.body.TextS, req.body.Text, req.params.id);
        r
            .then(
                result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
                error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
            );
    })
    .delete(jsonParser, (req, res) => {
        //удаляется карточка, а также любая инфа о ней из таблицы лайков. ТРЕБУЕТСЯ ПРОВЕРКА НА UUID.
        let r = DeleteCard(req.params.id);
        r.then(result => {
            console.log(JSON.stringify(result));
            res.send(`{"status":"0"}`)
            fs.unlink('./public/ModelsLogo/' + req.params.id, function (err) {
                if (err) return console.log(err);
            });
            fs.unlink('./public/Models/' + result[0].FileName, function (err) {
                if (err) return console.log(err);
            });
        });
    });

router.use('/:id/edit', function (req, res) {
    //НУЖНА ПРОВЕРКА СЕССИИ - ДЛЯ БЕЗОПАСНОСТИ
    console.log('Request Type:', req.method);
    console.log('id/edit: ' + req.params.id);
    let r = GetCard(req.params.id);//Это дополнительный запрос - если юзера не оказалось в базе данных, то вместо страницы просмотра показывается ошибка.
    r
        .then(
            result => result.length == 1 ? res.sendFile(__dirname + '\\card_edit.html') : res.sendFile(__dirname + '\\error.html'),
            error => res.sendFile(__dirname + '\\error.html')
        );
});

router.use('/:id/view', function (req, res) {
    console.log('Просмотр карточки', req.params.id);
    let r = GetCard(req.params.id);//Это дополнительный запрос - если юзера не оказалось в базе данных, то вместо страницы просмотра показывается ошибка.
    r
        .then(
            result => result.length == 1 ? res.sendFile(__dirname + '\\card.html') : res.sendFile(__dirname + '\\error.html'),
            error => res.sendFile(__dirname + '\\error.html')
        );
});

AddCard = async function (name, text, texts, id, filename, ext) {
    const resp = await supabase
        .from('Card')
        .insert([{ Name: name, FullText: text, SmallText: texts, FileName: filename, Ext: ext, AuthorID: id }]);
    if (resp.error == null) {
        console.log("Юзер успешно добавлен");
        return {status: 0, id: resp.data.ID };
    }
    return {status: 4, id: 0 };
};

GetCards = async function () {
    let { data: Card, error } = await supabase
        .from('Card')
        .select('*');
    console.log(Card);
    return Card;
}

GetCard = async function (id) {
    let { data: Card, error } = await supabase
        .from('Card')
        .select('*')
        .eq('ID', id);
    console.log(Card);
    return Card;
}

GetCardsByAuthor = async function (id) {
    let { data: Card, error } = await supabase
        .from('Card')
        .select('*')
        .eq('AuthorID', id);
    console.log(Card);
    return Card;
}

LikesCard = async function (user, card) {
    const resp = await supabase
        .from('UserLikedCards')
        .insert([{ UserID: user, CardID: card }]);
    if (resp.error == null) {
        console.log("Юзер успешно добавлен КАРТУ в отложенное");
        return 0;
    }
    return 4;
}

GetLikedCards = async function (id) {
    let resp = await supabase.from('UserLikedCards').select('CardID').eq('UserID', id);
    if (resp.data.length > 0) {
        let filtered = resp.data.map(x => x.CardID);
        console.log(filtered);
        let resp2 = await supabase.from('Card').select('*').in('ID', filtered);
        console.log(resp2);
        return resp2.data;
    }
    return [];
}

DeleteCard = async function (id) {
    await supabase.from('Card').delete().eq('ID', id);
    await supabase.from('UserLikedCards').delete().eq('CardID', id);
}

UpdateCard = async function (name, texts, text, id) {
    const resp = await supabase
        .from('Card')
        .update({ Name: name, SmallText: texts, FullText: text })
        .eq('ID', id);
    if (resp.error == null) {
        console.log("Юзер успешно изменен");
        return 0;
    }
    else {
        console.log("Юзер не изменен (хз поч).");
        return 1;
    }
}

module.exports = router;
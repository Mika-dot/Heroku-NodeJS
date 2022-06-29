const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const supabase = require('./configs/db.config')
const multer = require('multer');

const jsonParser = express.json();

const helpers = require('./Filter');

const ImageStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + '/public/UsersLogo/');
  },
  filename: function (req, file, callback) {
    callback(null, req.params.id);
  }
});

router.route('/:id')
  .post(jsonParser, (req, res) => {
    if (req.params.id == 'new') {
      console.log('Добавление юзера. Request Type:', req.method);
      let r = AddUser(req.body.Name, req.body.Pass, req.body.Mail, req.body.Mail2, req.body.Achiv, req.body.Info);
      r
        .then(
          result => res.send("{\"status\": \"" + result + "\"}"),
          error => res.send("{\"status\": \"255\"}")
        );
    }
    if (req.params.id == 'login') {
      console.log("Запрос на логин");
      if (req.body.UUID != undefined && req.body.Mail != undefined && req.body.Pass != undefined) {
        console.log(req.body.Mail + "; " + req.body.Pass + "; " + req.body.UUID);
        let r = LoginUser(req.body.Mail, req.body.Pass, req.body.UUID);
        r.then(result => res.send("{\"status\": \"" + result.Status + "\", \"uuid\": \"" + result.UUID + "\"}"));
      }
      else res.send("{\"status\": \"255\", \"uuid\": \"0\"}");
    }
    if (req.params.id == 'check1') {
      let r = GetUserByUUID(req.body.UUID);
      r.then(result => {
        if (result.Status == 0) {
          let r2 = GetUserForHeader(result.ID);
          r2.then(RES => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(RES) + "}"));
        } else
          res.send("{\"status\": \"1\", \"data\": \"null\"}");
      }
      );
    }
    if (req.params.id == 'check2') {
      console.log("check2, UUID = " + req.body.UUID);
      let r = GetUserByUUID(req.body.UUID);
      r.then(result => {
        if (result.Status == 0 && result.ID == req.body.ID)
          res.send("{\"status\": \"0\"}");
        else
          res.send("{\"status\": \"1\"}");
      }
      );
    }
    if (req.params.id == 'logout') {
      console.log("Запрос на логоут");
      if (req.body.UUID != undefined) {
        console.log(req.body.UUID);
        let r = LogoutUser(req.body.UUID);
        r.then(result => res.send("{\"status\": \"0\"}"));
      }
    }
  })
  .get((req, res) => {
    console.log('Request Type:', req.method);
    console.log('Запрос на получение юзера: ' + req.params.id);
    if (req.params.id == 'all') {
      console.log("(запрос на все)");
      let r = GetUsers();
      r
        .then(
          result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
          error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
        );
    }
    else {
      let r = GetUserFull(req.params.id);
      r
        .then(
          result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
          error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
        );
    }
  })
  .put((req, res) => {//upload.single('files'), 
    let upload = multer({ storage: ImageStorage, fileFilter: helpers.imageFilter }).single('files');
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
      console.log(req.body);
      let r = UpdateUser(req.body.Name, req.body.Pass, req.params.id, req.body.Mail2, req.body.Achiv, req.body.Info);
      r
        .then(
          result => res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}"),
          error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
        );
    });
  })
  .delete(jsonParser, (req, res) => {
    console.log('Request Type:', req.method);
    console.log('Запрос на удаление юзера: ' + req.params.id);
    let r = DeleteUser(req.params.id);
    r
      .then(
        result => {
          res.send("{\"status\": \"0\", \"data\": " + JSON.stringify(result) + "}")
          fs.unlink('./public/UsersLogo/' + req.params.id, function (err) {
            if (err) return console.log(err);
            console.log('file deleted successfully');
          });
        },
        error => res.send("{\"status\": \"1\", \"data\": \"null\"}")
      );
  });

router.use('/:id/edit', function (req, res) {
  //НУЖНА ПРОВЕРКА СЕССИИ - ДЛЯ БЕЗОПАСНОСТИ
  console.log('Request Type:', req.method);
  console.log('id/edit: ' + req.params.id);
  let r = GetUserForHeader(req.params.id);//Это дополнительный запрос - если юзера не оказалось в базе данных, то вместо страницы просмотра показывается ошибка.
  r
    .then(
      result => result.length == 1 ? res.sendFile(__dirname + '\\edit.html') : res.sendFile(__dirname + '\\error.html'),
      error => res.sendFile(__dirname + '\\error.html')
    );
});

router.use('/:id/view', function (req, res) {
  console.log('Просмотр юзера', req.params.id);
  let r = GetUserForHeader(req.params.id);//Это дополнительный запрос - если юзера не оказалось в базе данных, то вместо страницы просмотра показывается ошибка.
  r
    .then(
      result => result.length == 1 ? res.sendFile(__dirname + '\\view.html') : res.sendFile(__dirname + '\\error.html'),
      error => res.sendFile(__dirname + '\\error.html')
    );
});

LoginUser = async function (mail, pass, uuid) {
  const resp = await supabase
    .from('User')
    .select('ID')
    .match({ Email: mail, Pass: pass });
  if (resp.error == null) {//Ошибок нет - такой юзер найден
    if (resp.data.length == 1) {
      //сначала надо найти в сессии это значение. мб он был в сети, и сессия ещё активна. В таком случае она продлевается (ставится текущее время).
      const resp22 = await supabase.from('Sessions').select('ID').eq('UUID', uuid);
      if (resp22.error == undefined && resp22.data.length > 0) await supabase.from('Sessions').update({ Time: new Date().getTime() }).eq('UUID', uuid);
      else {
        //такой сессии даже не было. создаем новую
        const resp2 = await supabase
          .from('Sessions')
          .insert([{ UserID: resp.data[0].ID, Time: new Date().getTime() }]);
        console.log("Ответ от сессионс: " + JSON.stringify(resp2));
        if (resp2.error != null) {
          console.log("Юзер не залогинен: " + resp.data[0].ID + " - видимо он уже залогинен.");
          return { Status: 3, UUID: 0 };
        }
        console.log("Юзер успешно залогинен: " + resp.data[0].ID);
        return { Status: 0, UUID: resp2.data[0].UUID };
      }
    }
    else {
      console.log("Юзер не найден в бд.");
      return { Status: 2, UUID: 0 };
    }
  }
  else {
    console.log("Юзер не залогинен (хз поч).");
    return { Status: 1, UUID: 0 };
  }
}
LogoutUser = async function (uuid) {
  const resp = await supabase.from('Sessions').delete().eq('UUID', uuid);
  if (resp.error == null) {
    return { Status: 0, ID: resp.data[0].UserID };
  }
  else {
    console.log("Что-то с бд (хз поч).");
    return { Status: 1, ID: 0 };
  }
}

GetUserByUUID = async function (uuid) {
  const resp = await supabase
    .from('Sessions')
    .select('UserID')
    .eq('UUID', uuid);
  if (resp.error == null) {
    if (resp.data.length == 1) {
      await supabase.from('Sessions').update({ Time: new Date().getTime() }).eq('UUID', uuid);//обновляем время для сессии
      console.log("Сессия найдена, вот ID: " + resp.data[0].UserID);//сессию обновляем (время ставим текущее), потому что юзер только что зашел
      return { Status: 0, ID: resp.data[0].UserID };
    }
    else {
      console.log("Сессия не найдена в бд.");
      return { Status: 2, ID: 0 };
    }
  }
  else {
    console.log("Что-то с бд (хз поч).");
    return { Status: 1, ID: 0 };
  }
}

UpdateUser = async function (name, pass, id, email2, achiv, info) {
  const resp = await supabase
    .from('User')
    .update({ Name: name, Pass: pass, EmailSec: email2, Achievements: achiv, Info: info })
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

DeleteUser = async function (id) {
  const resp = await supabase
    .from('User')
    .delete()
    .eq('ID', id);
  if (resp.error == null) {
    console.log("Юзер успешно удален");
    await supabase.from('Sessions').delete().eq('UserID', id);
    await supabase.from('UserLikedCards').delete().eq('UserID', id);
    await supabase.from('Card').delete().eq('AuthorID', id);
    return 0;
  }
  else {
    console.log("Юзер не удален (хз поч).");
    return 1;
  }
}

AddUser = async function (name, pass, email, email2, achiv, info) {
  const resp = await supabase
    .from('User')
    .insert([{ Name: name, Pass: pass, Email: email, EmailSec: email2, Achievements: achiv, Info: info }]);
  if (resp.error == null) {
    console.log("Юзер успешно добавлен");
    return 0;
  }
  else {
    if (resp.error.code == '23505') {
      console.log("Юзер не добавлен: уже есть такая почта.");
      return 2;
    }
    return 1;
  }
};

GetUserForHeader = async function (id) {
  let { data: User, error } = await supabase
    .from('User')
    .select('ID, Name')
    .eq('ID', id);
  return User;
}
GetUserFull = async function (id) {
  let { data: User, error } = await supabase
    .from('User')
    .select('*')
    .eq('ID', id);
  console.log(User);
  return User;
}
GetUserWithoutPass = async function (id) {
  let { data: User, error } = await supabase
    .from('User')
    .select('ID, Name, Email, EmailSec, Info, Achievements')
    .eq('ID', id);
  console.log(User);
  return User;
}

GetUsers = async function () {
  let { data: User, error } = await supabase
    .from('User')
    .select('ID, Name, Email');
  console.log(User);
  return User;
}

async function SessionsGC() {
  const resp = await supabase
    .from('Sessions')
    .delete()
    .lt('Time', new Date().getTime() - 3600000);
  console.log("Удалено сессий: " + JSON.stringify(resp.data));
}
setInterval(SessionsGC, 3600000);

module.exports = router;
const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) => {

    let options = request.url.split(/first_namber=|&last_namber=/);

    console.log("------------------------------------------");
    console.log(options[1]);
    console.log(options[2]);
    console.log("------------------------------------------");

    if (options[0] == '/?') {

        console.log(Number(options[1]) + Number(options[2]));

        response.writeHead(200, {'Content-Type': 'application/json'});

        let json = {
            name: 'Akim',
            number1: options[1],
            number2: options[2],
            sum: Number(options[1]) + Number(options[2]),
            minus: Number(options[1]) - Number(options[2]),
            multiply: Number(options[1]) * Number(options[2]),
            div: Number(options[1]) / Number(options[2])
        };

        response.end(JSON.stringify(json));

    }
    else {
        fs.readFile("index.html", (error, data) => response.end(data));
    }

}).listen(3000, () => console.log("Сервер запущен по адресу http://localhost:3000"));
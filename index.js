const mongoose = require('mongoose')
const app = require('./app/app')

const database = require('./config/db');
const config = require('./config');

async function startup() {
    try{
		await database.connect()
        app.listen(config.APPLICATION.PORT);
        console.log("Сервер ожидает подключения...");
    }
    catch(err) {
        return console.log(err);
    }
}

process.on("SIGINT", async() => {
    await mongoose.disconnect();
    console.log("Приложение завершило работу");
    process.exit();
});

startup()

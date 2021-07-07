const container = require("./src/startup/container");
const server = container.resolve('app');
const db = container.resolve('db');
(async ()=> {
    try {
        await db.sequelize.sync();
        server.start()
    } catch (error) {
        console.log('error en la conección a la bdd: '+error.message)
    }
})()


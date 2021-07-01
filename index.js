const container = require("./src/startup/container");
const server = container.resolve('app');
const db = container.resolve('db');

// const db = require('./bdd.coneccion');
// db.connect()
//     .then(function(obj) {
//         obj.done(); 
//         server.start()
//   })
//   .catch(function(error) {
//       console.log("ERROR en la coneccion a la base de datos:", error);
//   });

(async ()=> {
    try {
        await db.sequelize.sync();
        server.start()
    } catch (error) {
        console.log(error.message)
    }
})()


const container = require("./src/startup/container");
const server = container.resolve('app');
const db = require('./bdd.coneccion');
db.connect()
    .then(function(obj) {
        obj.done(); 
        server.start()
  })
  .catch(function(error) {
      console.log("ERROR en la coneccion a la base de datos:", error);
  });

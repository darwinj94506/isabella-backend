
var promise = require('bluebird');
var options = {
  promiseLib: promise,
  error: function (error, e) {
    if (e.cn) {
        // A connection-related error;
        console.log("CN:", e.cn);
        console.log("EVENT:", error.message);
        console.log(error)
    }
  }
};

const connectionString = "postgres://postgres:root@localhost:5432/isabella";
var pgp = require('pg-promise')(options);
var db = pgp(connectionString);

module.exports = db








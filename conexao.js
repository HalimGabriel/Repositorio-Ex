var mysql = require('mysql');

var con = mysql.createConnection({
  host: "seuhost",
  user: "seuuser",
  password: "seupass"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

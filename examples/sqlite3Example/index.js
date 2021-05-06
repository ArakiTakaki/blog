const fs = require('fs');
const initSqlJs = require('sql.js');
const filebuffer = fs.readFileSync('./examples/sqlite3Example/ex1');

let db = null;
initSqlJs().then(function(SQL){
  // Load the db
  db = new SQL.Database(filebuffer);
  const stmt = db.prepare("select * from tbl1");

  while (stmt.step()) {
    const data = stmt.getAsObject();
    console.log(data);
  }
});

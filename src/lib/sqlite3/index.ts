import sqlJs from 'sql.js';

const main = async () => {
  console.log('generate');
  const data = await sqlJs({
    locateFile: (filename) => {
      return `/${filename}`;
    }
  });
  const dataStore = await fetch("/db/data.sqlite").then(res => res.arrayBuffer());
  const db = new data.Database(new Uint8Array(dataStore))
  const stmt = db.prepare("select * from articles");
  while (stmt.step()) {
    const data = stmt.getAsObject();
    console.log(data);
  }
  return db;
};
const SQLite = main();
export default SQLite;

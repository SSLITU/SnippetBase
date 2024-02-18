import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost:3306",
  user: "root",
  password: "N3t3mari3",
  database: "snippets_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

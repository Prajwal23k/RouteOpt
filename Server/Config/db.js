import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "routeopt",
  password: "Prajwal@23",
  port: 5432,
});

export default pool;

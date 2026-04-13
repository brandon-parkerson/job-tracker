const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/job-tracker`
});

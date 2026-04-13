const pool = require("./pool");

async function insertUser(user) {
    await pool.query(`INSERT INTO USERS (user) VALUES ($1),($2)`, [username, password]);
}

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

module.exports = { insertUser, getAllUsers }
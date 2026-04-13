const pool = require("./pool");

async function insertUser(username, password) {
    await pool.query("INSERT INTO USERS (username, password) VALUES ($1, $2)", [username, password]);
    console.log("Added user")
}

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}



module.exports = { insertUser, getAllUsers }
const db = require("../db/queries");

async function getAllUsers() {
    const users = await db.getAllUsers();
    return users;
}



module.exports = { getAllUsers }
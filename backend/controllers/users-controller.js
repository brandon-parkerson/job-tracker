const db = require("../db/queries");

async function getAllUsers() {
    const users = await db.getAllUsers();
    return users;
}

async function addUser(username, password) {
    db.insertUser(username, password);
    console.log("controller called to add user");
}



module.exports = { getAllUsers, addUser }
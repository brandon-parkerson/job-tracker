const express = require("express")
const router = express.Router()
const usersController = require("../controllers/users-controller")

router.get("/", (req, res) => {
    res.json({
        message: "Got json message from backend"
    });
})

router.get("/register", (req, res) => {
    res.send("get req to /register");
})
router.post("/register", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    await usersController.addUser(username, password);

    res.json({
        username: username,
        password: password,
    })
})

router.get("/dashboard", (req, res) => {
    res.json({
        message: "Got dashboard message"
    })
})

router.get("/analytics", (req, res) => {
    res.json({
        message: "Got the analytics message"
    })
})

router.get("/users", async (req, res) => {
    const users = await usersController.getAllUsers()
    res.json({
        users
    })
})


module.exports = router
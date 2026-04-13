const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message: "Got json message from backend"
    });
})

router.get("/register", (req, res) => {
    res.send("get req to /register");
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
module.exports = router
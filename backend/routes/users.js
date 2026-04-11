const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("get req to index");
})

router.get("/register", (req, res) => {
    res.send("get req to /register");
})

module.exports = router
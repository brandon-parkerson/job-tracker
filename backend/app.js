const express = require('express');
const app = express()
const router = express.Router()
const usersRouter = require("./routes/users")

app.use("/", usersRouter);
app.use("/register", usersRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000...");
})
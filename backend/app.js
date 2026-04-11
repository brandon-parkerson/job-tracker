const express = require('express');
const cors = require("cors")
const app = express()
const router = express.Router()
const usersRouter = require("./routes/users")

// cors to allow frontend to send reqs to backend
app.use(cors())

app.use("/", usersRouter);
app.use("/register", usersRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000...");
})
require("dotenv").config()
const express = require('express');
const cors = require("cors")
const app = express()
const router = express.Router()
const usersRouter = require("./routes/users")


// cors to allow frontend to send reqs to backend
app.use(cors())
// parses req json bodies
app.use(express.json());
// parse url-encoded form data
app.use(express.urlencoded({ extended: true }))

// Job tracker features: job entries, application status, dates (applied, follow-up, interview), notes
// Analytics: Application to interview rate, interview to offer rate, time to response, which platforms work best

// TODO: add user query post request, authentication, frontend form 

app.use("/api/", usersRouter);
app.use("/api/register", usersRouter);
app.use("/api/dashboard", usersRouter);
app.use("/api/analytics", usersRouter);
app.use("/api/users", usersRouter);


app.listen(3000, () => {
    console.log("Server running on port 3000...");
})
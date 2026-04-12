const express = require('express');
const cors = require("cors")
const app = express()
const router = express.Router()
const usersRouter = require("./routes/users")

// cors to allow frontend to send reqs to backend
app.use(cors())

// Job tracker features: job entries, application status, dates (applied, follow-up, interview), notes
// Analytics: Application to interview rate, interview to offer rate, time to response, which platforms work best

// TODO: routes -- dashboard, open specific job to look at notes

app.use("/api/", usersRouter);
app.use("/api/register", usersRouter);
app.use("/api/dashboard", usersRouter)


app.listen(3000, () => {
    console.log("Server running on port 3000...");
})
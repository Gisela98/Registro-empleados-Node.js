const express = require("express");
const app = express();
const { register } = require("./routes/register.routes");

app.use(express.json()); 
app.use("/api/v1/register", register);

module.exports = { app };
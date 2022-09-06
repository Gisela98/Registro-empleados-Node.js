const express = require("express");
const register = express.Router();
const {
getRegister,
createRegister,
getIdRegister,
updateRegister,
deleteRegister,
} = require("../controller/register.controller");

module.exports = { register };
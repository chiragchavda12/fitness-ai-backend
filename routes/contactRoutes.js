const express = require("express");
const router = express.Router();

const { sendMessage, getMessages } = require("../controllers/contactController");


// SEND CONTACT MESSAGE

router.post("/contact", sendMessage);


// GET ALL MESSAGES

router.get("/contact", getMessages);


module.exports = router;
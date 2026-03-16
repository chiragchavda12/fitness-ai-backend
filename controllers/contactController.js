const Contact = require("../models/Contact");


// ================= SEND MESSAGE =================

exports.sendMessage = async (req,res)=>{

try{

const {name,email,message} = req.body;

const newMessage = new Contact({

name,
email,
message

});

await newMessage.save();

res.json({
message:"Message sent successfully"
});

}

catch(error){

console.log(error);

res.status(500).json({
message:"Server error"
});

}

};


// ================= GET ALL MESSAGES =================

exports.getMessages = async (req,res)=>{

try{

const messages = await Contact.find().sort({createdAt:-1});

res.json(messages);

}

catch(error){

console.log(error);

res.status(500).json({
message:"Server error"
});

}

};
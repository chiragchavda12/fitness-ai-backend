const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
},

/* ================= PROFILE DATA ================= */

age:{
type:Number,
default:0
},

height:{
type:Number,
default:0
},

weight:{
type:Number,
default:0
},

goal:{
type:String,
default:""
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("User", userSchema);
const dotenv = require("dotenv");

/* LOAD ENV FILE */
dotenv.config();

/* EXPORT VARIABLES */

module.exports = {

PORT: process.env.PORT || 5000,

MONGO_URI: process.env.MONGO_URI || "mongodb+srv://chiragchavda1737_db_user:chirag123@cluster0.gbq28io.mongodb.net/fitness-ai?retryWrites=true&w=majority",

JWT_SECRET: process.env.JWT_SECRET || "fitness_secret"

};
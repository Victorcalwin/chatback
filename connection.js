const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@chatapp.qs85fw6.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log("DB connected")
})

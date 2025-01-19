const mongoose = require("mongoose");
const {Schema, model} = mongoose;



const BookSchema = new mongoose.Schema({
    id: {
        type: String,
        autoCreate: false
    },
    title: {type: String},
    author: {type: String},
    publisher: {type: String}, 
    isbn: {type: String}, 
    avail: {type: Boolean},
    who: {type: String},
    due: {type: String}

});

module.exports = model('Book', BookSchema);



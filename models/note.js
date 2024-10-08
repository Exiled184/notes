const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    user: 
    {type: mongoose.Schema.Types.ObjectId, 
        require: true, 
        ref: "User"},
    title: {type: String, required: true},
    content: {type: String, required: true}
})

module.exports = mongoose.model("Note", noteSchema) 
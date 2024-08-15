const mongoose = required("mongoose")
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, require: true, ref: "User"},
    body: String
})

module.eports = mongoose.model("Note", noteSchema)
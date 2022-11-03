const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Shortcuts = new Schema({
    name: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Shortcuts", Shortcuts);
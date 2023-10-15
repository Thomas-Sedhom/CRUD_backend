const mongoose = require("mongoose");

let Data = mongoose.model("info", new mongoose.Schema({

    name: String,
    age: Number
}))

module.exports = Data;
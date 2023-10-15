const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blog = require("./routes/blog");
const edit = require("./routes/edit");
const details = require("./routes/details");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
        .then(() => console.log("connected"))
        .catch(() => console.log("error"))

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/blog", blog)
app.use("/edit", edit)
app.use("/details", details)

app.listen(process.env.PORT);

const express = require("express");
const Data = require("../models/database");

module.exports = {

    get_data : async (req, res) => {

        let info = await Data.find().sort({ name: 1 });
        res.render("index", { info });
    },

    post_data : async (req, res) => {

        const blog = await new Data(req.body);
    
        blog.save()
            .then(() => res.redirect("/blog"))
            .catch(() => console.log("error when save data"))
    },

    delete_data : async (req, res) => {

        let ID = req.params.id
    
        await Data.deleteOne({_id: ID})
            .then(()=> res.json({}))
            .catch(err => console.log(err))
    }
}
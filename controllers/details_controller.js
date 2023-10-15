const express = require("express");
const Data = require("../models/database");

module.exports = {

    get_data : async (req, res) => {

        let ID =  req.params.id;
    
        ID = ID.trim()
    
        let info = await Data.findOne({_id: ID});
    
        res.render("details", {info});
    }
}
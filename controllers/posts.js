const Post = require("../models/post") 

module.exports = {
    create,
}

function create(req,res) {
    console.log('request body', req.body)
}
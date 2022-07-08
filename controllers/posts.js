// post model connects us to MongoDB

const Post = require("../models/post")

module.exports = {
    create,
    index
}

function index(req,res) {
    console.log('index all posts in controller hit')
    Post.find({}).then((allPosts) => {
        res.status(200).json(allPosts)
    })
}

function create(req,res) {
    console.log('request body from controller create funciton', req.body)
    // const postData = req.body
    // mongoose.create 
    Post.create(req.body).then((newlyCreatedPost) => {
        // console.log('controller create post successfully created a post', newlyCreatedPost)
        res.status(200).json(newlyCreatedPost)
    })
}
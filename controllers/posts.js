// post model connects us to MongoDB
const Post = require("../models/post")
const User = require("../models/user")

module.exports = {
    create,
    index,
    update,
    deleteOne
}

function index(req,res) {
    console.log('index all posts in controller hit')
    Post.find({}).then((allPosts) => {
        res.status(200).json(allPosts)
    })
}

function create(req,res) {
    console.log('request body from controller create funciton', req.body)
    const postData = req.body
    const userId = req.params.id

    Post.create(postData).then((newlyCreatedPost) => {
        // console.log('controller create post successfully created a post', newlyCreatedPost)
        // once the post is created
        // find the user who it belongs to
        User.findById(userId).then((foundUser) => {
            foundUser.posts.push(newlyCreatedPost._id)
            foundUser.save()
        })
        // and update the users posts array 
        res.status(200).json(newlyCreatedPost)
    })
}

function update(req,res) {
    console.log("update post controller id",req.params.id)
    console.log("update post controller body",req.body)

    Post.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((updatedPost) => {
        res.status(200).json(updatedPost)
    })
}

function deleteOne(req,res) {
    console.log("delete post controller",req.params.id)
    Post.findOneAndDelete(req.params.id).then((deletedPost) => {
        res.status(200).json(deletedPost)
    })
}
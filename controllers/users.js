const User = require("../models/user.js")

module.exports = {
  index
}

function index(req, res) {
  User.find({})
  .populate("posts")
  .then(users => res.json(users))
}

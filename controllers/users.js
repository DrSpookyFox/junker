const User = require("../models/user.js")

module.exports = {
  index
}

function index(req, res) {
  User.find({})
  .then(users => res.json(users))
}

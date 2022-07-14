const User = require("../models/user.js")
const jwt = require('jsonwebtoken')


module.exports = {
  signup,
  login
}

function signup(req, res) {
  console.log('hitting signup user controller')
  User.create(req.body).then((user) => {
    const token = createJWT(user)
    res.status(200).json({ token })
  })
}

function createJWT(user) {
  return jwt.sign(
    { user }, 
    process.env.SECRET,
    { expiresIn: '24h' }
  )
}

async function login(req, res) {
  console.log('login server hit')
  User.findOne({email: req.body.email})
  .populate("posts")
  .then((user) => {
    if (!user) return res.status(401).json({ err: 'User not found'})
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user)
        console.log('its a match!')
        res.status(200).json({ token })
      } else {
        console.log('incorrect password')
        return res.status(401).json({ err: 'Incorrect password' })
      }
    })
  })
}



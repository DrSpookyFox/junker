let mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const SALT_ROUNDS = 6

let userSchema = new Schema(
  {
    email: String,
    username: String, 
    password: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
  },
  {
    timestamps: true,
  }
);

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password
    return ret
  },
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, SALT_ROUNDS)
  .then(hash => {
    user.password = hash
    next()
  })
  .catch(err => {
    next(err)
  })
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

module.exports = mongoose.model('User', userSchema)






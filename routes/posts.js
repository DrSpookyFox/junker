const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.get('/', checkAuth, usersCtrl.index);
router.get("/", postsCtrl.index);
router.post("/", postsCtrl.create);


/*---------- Auth Checker ----------*/
// function checkAuth(req, res, next) {
//   if (req.user.permissions === 0) return next()
//   return res.status(401).json({ msg: "Not Authorized" })
// }

module.exports = router;

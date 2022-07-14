const express = require("express");
const router = express.Router();
const postsCtrl = require("../controllers/posts");

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
// router.get('/', checkAuth, usersCtrl.index);
router.get("/", postsCtrl.index);
router.post("/:id", postsCtrl.create);

// update post
router.put("/:id", postsCtrl.update);

// delete a post
router.delete("/:id", postsCtrl.deleteOne);



/*---------- Auth Checker ----------*/
// function checkAuth(req, res, next) {
//   if (req.user.permissions === 0) return next()
//   return res.status(401).json({ msg: "Not Authorized" })
// }

module.exports = router;

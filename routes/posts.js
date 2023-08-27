const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

router.put("/portrait/:id", postsController.portrait);

router.put("/bw/:id", postsController.bw);

router.put("/color/:id", postsController.color);

router.put("/light/:id", postsController.light);

router.put("/abstract/:id", postsController.abstract);

router.put("/perspective/:id", postsController.perspective);

router.put("/landscape/:id", postsController.landscape);

router.put("/movement/:id", postsController.movement);

router.put("/street/:id", postsController.street);

router.put("/funny/:id", postsController.funny);

router.delete("/deletePost/:id", postsController.deletePost);




module.exports = router;

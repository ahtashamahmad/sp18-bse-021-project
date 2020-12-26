var express = require("express");
var router = express.Router();
var checkSessionAuth = require("../middlewares/checkSessionAuth");
var {Blog,validate} = require("../models/blogpost");

/* GET users listing. */
router.get("/", async function (req, res, next) {
	let blogs = await Blog.find();
	res.render("blog/list", { title: "Some Blogs to read", blogs });
});
router.get("/", function (req, res, next) {
	res.render("blog/list");
});
//add
router.get("/add", checkSessionAuth, async function (req, res, next) {
	res.render("blog/add");
});

router.post("/add", async function (req, res, next) {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	let blog = new Blog(req.body);
	await blog.save();
	res.redirect("/blog");
});
//delete
router.get("/delete/:id", checkSessionAuth, async function (req, res, next) {
	let blog = await Blog.findByIdAndDelete(req.params.id);
	res.redirect("/blog");
});
module.exports = router;

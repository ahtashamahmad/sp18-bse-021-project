var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var BlogSchema = mongoose.Schema({
	topic: String,
	post: String,
});
const Blog = mongoose.model("Blog", BlogSchema);

function validateRead(data) {
	const schema = Joi.object({
        topic: Joi.string().min(3).max(20).required(),
        post: Joi.string().required()
	});
	return schema.validate(data, { abortEarly: true });
  }
  module.exports.Blog = Blog;
  module.exports.validate = validateRead;


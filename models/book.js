var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var BookSchema = mongoose.Schema({
	book: String,
	author_name: String,
	price: String,
});

const Book = mongoose.model("Book", BookSchema);

function validateBook(data) {
	const schema = Joi.object({
	  book: Joi.string().min(3).max(20).required(),
	  price: Joi.number().min(0).required(),
	  author_name: Joi.string().required()
	});
	return schema.validate(data, { abortEarly: true });
  }
  module.exports.Book = Book;
  module.exports.validate = validateBook;


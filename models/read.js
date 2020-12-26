var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var ReadSchema = mongoose.Schema({
	Serial_No: String,
	book: String,
});
const Read = mongoose.model("Read", ReadSchema);

function validateRead(data) {
	const schema = Joi.object({
	  book: Joi.string().min(3).max(20).required(),
	  Serial_No: Joi.string().required()
	});
	return schema.validate(data, { abortEarly: true });
  }
  module.exports.Read = Read;
  module.exports.validate = validateRead;


const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

const validateUser = (data) => {
    return userSchema.validate(data);
};

module.exports = {validateUser};
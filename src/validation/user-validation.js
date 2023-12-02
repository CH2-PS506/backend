import Joi from "joi";
const registerUserValidation = Joi.object({
    email: Joi.string().max(100).required(),
    first_name: Joi.string().max(100).required(),
    last_name: Joi.string().max(100).required(),
})
import Joi from "joi";

const signupSchema = Joi.object(
    {
        name: Joi.string().required(),
        email: Joi.string().email({ tlds: { allow: ["com"] } }).required(),
        phone: Joi.string().required(),
        role: Joi.string().required(),
        password: Joi.string().required(),
    });

export default signupSchema
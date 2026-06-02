import Joi from "joi";

const signinSchema=Joi.object(
    {
      email:Joi.string().email({tlds:{allow:["com"]}}),
      password:Joi.string().required(),
    });
    export default signinSchema;
import Joi from "joi";

const uploadMediaSchema = Joi.object(
    {
        propertyImg: Joi.array().required(),
        propertyVideo: Joi.array().required(),
    });
export default uploadMediaSchema;
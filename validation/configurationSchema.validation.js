import Joi from "joi";

const configurationSchema = Joi.object(
    {
        configurationName: Joi.string().required(),
        area: Joi.string().required(),
        totalUnits: Joi.number().required(),
        availableUnits: Joi.number().required(),
        price: Joi.string().required(),
        floorPlanUpload: Joi.array().required(),

    });
export default configurationSchema;
import Joi from "joi";

const PropertyDetailsSchema = Joi.object(
    {
        totalArea: Joi.string().required(),
        totalUnit:Joi.number().required(),
        numberOfTower:Joi.number().required(),
        numberOfFloor:Joi.number().required(),
        startingPrice:Joi.string().required(),
        buildYear:Joi.number().required(),
        builderName:Joi.string().required(),
        description:Joi.string().required(),
        amenities:Joi.string().required(),
    });

export default PropertyDetailsSchema;
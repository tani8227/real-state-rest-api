import Joi from "joi";

const BasicDetailsSchema=Joi.object(
    {
      propertyName:Joi.string().required(),
      propertyType:Joi.string().required(),
      listtingPurpose:Joi.string().required(),
      listtingCategory:Joi.string().required(),
      propertyStatus:Joi.string().required(),
      city:Joi.string().required(),
      state:Joi.string().required(),
      country:Joi.string().required(),
      area:Joi.string().required(),
      pinCode:Joi.string().required(),
      address:Joi.string().required(),
    });
    export default BasicDetailsSchema;
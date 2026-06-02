import Joi from "joi";

const DocumentSchema = Joi.object(
    {
        certificate: Joi.array().required(),
        floorPlan:Joi.array().required(),
        legalNoc:Joi.array().required(),
        ownership:Joi.array().required(), 
    });

export default DocumentSchema;
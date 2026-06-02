import express from "express";
import * as agentController from "../controllers/agent/agent.controller.js";
import checkAuthentication from "../middleWares/auth/checkAuthentication.js";
import multerUpload from "../middleWares/multer/multer.js";
import validate from "../middleWares/validate/validate.js";
import BasicDetailsSchema from "../validation/basicDetailsSchema.validation.js";
import PropertyDetailsSchema from "../validation/propertyDetailsSchema.validation.js";
import ConfigurationSchema from "../validation/configurationSchema.validation.js"
import UploadMediaSchema from "../validation/uploadMediaSchema.validation.js";
import DocumentSchema from "../validation/documentSchema.validation.js"

const agentRouter = express.Router();

// for create the proprty
agentRouter.post("/add-basic-deatils", checkAuthentication, validate(BasicDetailsSchema), agentController.addBasicDeatils);
agentRouter.post("/add-property-details", checkAuthentication, validate(PropertyDetailsSchema), agentController.addPropertyDetails);
agentRouter.post("/add-configuration-details", checkAuthentication,  multerUpload.fields([{ "name": "floorPlanUpload", maxCount: 5 }]), validate(ConfigurationSchema), agentController.addConfiguration);
agentRouter.post("/add-uploadMedia-details", checkAuthentication, multerUpload.fields([{ "name": "propertyImg", maxCount: 5 }, { "name": "propertyVideo", maxCount: 2 }]), validate(UploadMediaSchema), agentController.addUploadMedia);
agentRouter.post("/add-document-details", checkAuthentication, multerUpload.fields([{ "name": "certificate", maxCount: 2 }, { "name": "floorPlan", maxCount: 2 }, { "name": "legalNoc", maxCount: 2 }, { "name": "ownership", maxCount: 2 }]), validate(DocumentSchema), agentController.addDocument);


// for get the property 
agentRouter.get("/get-basic-deatils", checkAuthentication, agentController.getBasicDetails);
agentRouter.get("/get-property-details", checkAuthentication, agentController.getPropertyDetails);
agentRouter.get("/get-configuration-details", checkAuthentication, agentController.getConfigurationDetails);
agentRouter.get("/get-uploadMedia-details", checkAuthentication, agentController.getUploadMediaDetails);
agentRouter.get("/get-document-details", checkAuthentication, agentController.getDocumentDetails);


// for update the proerty 
agentRouter.patch("/update-basic-deatils", checkAuthentication, agentController.updateBasicDetails);
agentRouter.patch("/update-property-details", checkAuthentication, agentController.updatePropertyDetails);
agentRouter.patch("/update-configuration-details", checkAuthentication, multerUpload.fields([{ "name": "floorPlanUpload", maxCount: 5 }]), agentController.updateConfiguration);
agentRouter.patch("/update-uploadMedia-details", checkAuthentication, multerUpload.fields([{ "name": "propertyImg", maxCount: 5 }, { "name": "propertyVideo", maxCount: 2 }]), agentController.updateUploadMedia);
agentRouter.patch("/update-document-details", checkAuthentication,  multerUpload.fields([{ "name": "certificate", maxCount: 2 }, { "name": "floorPlan", maxCount: 2 }, { "name": "legalNoc", maxCount: 2 }, { "name": "ownership", maxCount: 2 }]), agentController.updateDocument);


export default agentRouter;





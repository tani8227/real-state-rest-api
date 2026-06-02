import asyncHandler from "../../utils/asyncHandler.service.js";
import createBasicDetailsService from "../../service/createBasicDetails.service.js";
import createPropertyDetailsService from "../../service/createPropertyDetails.service.js";
import createConfigurationService from "../../service/createConfiguration.service.js";
import createUploadMediaService from "../../service/createUploadMedia.service.js";
import createDocumentService from "../../service/createDocument.service.js";
import asyncUploadToCloudinary from "../../features/asyncUploadToCloudinary.js";
import asyncDeleteFromCloudinary from "../../features/asyncDeleteFromCloudinary.js";
import fetchBasicDetailsService from "../../service/fetchBasicDetails.service.js";
import updatedBasicDetailsService from "../../service/updateBasicDetails.service.js";
import fetchPropertyDetailsService from "../../service/fetchPropertyDetails.service.js";
import updatePropertyDetailsService from "../../service/updatePropertyDetails.service.js";
import fetchConfigurationService from "../../service/fetchConfiguration.service.js";
import updateConfigurationService from "../../service/updateConfiguration.service.js"
import fetchUploadMediaService from "../../service/fetchUploadMedia.service.js";
import updateUploadMediaService from "../../service/updateUploadMedia.service.js";
import fetchDocumentService from "../../service/fetchDocument.service.js";
import updateDocumentService from "../../service/updateDocument.service.js";

// creation controller functions
export const addBasicDeatils = asyncHandler(async (req, res, next) => {

    const basicDetails = await createBasicDetailsService({ ...req.body, userId: req.user?.id });
    return res.status(200).json(
        {
            message: "basic deatils created successfully",
            basicDetails: basicDetails,
        })
});

export const addPropertyDetails = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    console.log(req.body, pid);
    const propertyDetails = await createPropertyDetailsService({ ...req.body, userId: req.user?.id, propertyId: pid });
    return res.status(200).json(
        {
            message: "property deatils created successfully",
            propertyDetails: propertyDetails,
        })
});

export const addConfiguration = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const { floorPlanUpload } = req.files;
    const floorPlan = await asyncUploadToCloudinary(floorPlanUpload, "image");
    console.log(floorPlan, floorPlanUpload);
    const configuration = await createConfigurationService({ ...req.body, floorPlanUpload: floorPlan, userId: req.user?.id, propertyId: pid });
    return res.status(200).json(
        {
            message: "configuration created successfully",
            configuration: configuration,
        });
});

export const addUploadMedia = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const { propertyImg, propertyVideo } = req.files;
    const images = await asyncUploadToCloudinary(propertyImg, "image");
    const videos = await asyncUploadToCloudinary(propertyVideo, "video");
    const uploadMedia = await createUploadMediaService({ propertyImg: images, propertyVideo: videos, userId: req.user?.id, propertyId: pid });
    return res.status(200).json(
        {
            message: "uploadMedia created successfully",
            uploadMedia: uploadMedia,
        });
});

export const addDocument = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const { certificate, floorPlan, legalNoc, ownership } = req.files;
    const newCertificate = await asyncUploadToCloudinary(certificate, "raw")
    const newFloorPlan = await asyncUploadToCloudinary(floorPlan, "raw")
    const newLegalNoc = await asyncUploadToCloudinary(legalNoc, "raw")
    const newOwnership = await asyncUploadToCloudinary(ownership, "raw")
    const document = await createDocumentService({ certificate: newCertificate, floorPlan: newFloorPlan, legalNoc: newLegalNoc, ownership: newOwnership, userId: req.user?.id, propertyId: pid });
    return res.status(200).json(
        {
            message: "document created successfully",
            document: document,
        });
});


// updation controller functions
export const updateBasicDetails = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const newBasicDetails = await updatedBasicDetailsService(req.body, pid);
    const basicDetails = await fetchBasicDetailsService(pid);
    return res.status(201).json(
        {
            message: "basic details updated successfully",
            basicDetails: basicDetails
        });
});

export const updatePropertyDetails = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const newPropertyDetails = await updatePropertyDetailsService(req.body, pid);
    const propertyDetails = await fetchPropertyDetailsService(pid);
    return res.status(201).json(
        {
            message: "basic details updated successfully",
            propertyDetails: propertyDetails
        });
});

export const updateConfiguration = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const { floorPlanUpload } = req.files;
    console.log("aya hai", req.body, pid, floorPlanUpload);
    const oldConfiguration = await fetchConfigurationService(pid);
    const removeFloorPlan = await asyncDeleteFromCloudinary(oldConfiguration?.floorPlanUpload, "image");
    const newFloorPlan = await asyncUploadToCloudinary(floorPlanUpload, "image");
    const updateConfiguration = await updateConfigurationService({ ...req.body, floorPlanUpload: newFloorPlan }, pid);

    return res.status(201).json(
        {
            message: "configuration updated successfully",
        })
})

export const updateUploadMedia = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const { propertyImg, propertyVideo } = req.files;
      console.log("aya hai", pid, propertyImg, propertyVideo);
    const oldUploadMedia = await fetchUploadMediaService(pid);
    const removepropertyImg = await asyncDeleteFromCloudinary(oldUploadMedia?.propertyImg, "image");
    const removepropertyVideo = await asyncDeleteFromCloudinary(oldUploadMedia?.propertyVideo, "video");
    const newPropertyImg = await asyncUploadToCloudinary(propertyImg, "image");
    const newPropertyVideo = await asyncUploadToCloudinary(propertyVideo, "video");
    const updateConfiguration = await updateConfigurationService({ propertyImg: newPropertyImg }, { propertyVideo: newPropertyVideo }, pid);

    return res.status(201).json(
        {
            message: "uploadMedia updated successfully",
        })
})


export const updateDocument = asyncHandler(async (req, res, next) => {
    const { pid } = req.query;
    const { certificate, floorPlan, legalNoc, ownership } = req.files;
    const oldDocument = await fetchDocumentService(pid);
    const removeCertificate = await asyncDeleteFromCloudinary(oldDocument?.certificate,"raw");
    const removeFloorPlan = await asyncDeleteFromCloudinary(oldDocument?.floorPlan, "raw");
    const removeLegalNoc = await asyncDeleteFromCloudinary(oldDocument?.legalNoc, "raw");
    const removeOwnership = await asyncDeleteFromCloudinary(oldDocument?.ownership,"raw");
    const newCertificate = await asyncUploadToCloudinary(certificate, "raw");
    const newFloorPlan = await asyncUploadToCloudinary(floorPlan, "raw");
    const newLegalNoc = await asyncUploadToCloudinary(legalNoc, "raw");
    const newOwnership = await asyncUploadToCloudinary(ownership, "raw");
    const updateConfiguration = await updateConfigurationService({ certificate: newCertificate }, { floorPlan: newFloorPlan }, { legalNoc: newLegalNoc }, { ownership: newOwnership }, pid);
    return res.status(201).json(
        {
            message: "uploadMedia updated successfully",
        });
})

// fetch controller function

export const getBasicDetails=asyncHandler(async(req, res, next)=>
    {
        const {pid}=req.query;
        const basicDetails=await fetchBasicDetailsService(pid);
        return res.status(200).json(
            {
                message:"get the basic details successfully",
                basicDetails:basicDetails,
            }) 
    })

export const getPropertyDetails=asyncHandler(async(req, res, next)=>
    {
        const {pid}=req.query;
        const propertyDetails=await fetchPropertyDetailsService(pid);
        return res.status(200).json(
            {
                message:"get the property details successfully",
                propertyDetails:propertyDetails,
            }) 
    })

export const getConfigurationDetails=asyncHandler(async(req, res, next)=>
    {
        const {pid}=req.query;
        const configuration=await fetchConfigurationService(pid);
        return res.status(200).json(
            {
                message:"get the basic details successfully",
                configuration:configuration,
            }) 
    })

export const getUploadMediaDetails=asyncHandler(async(req, res, next)=>
    {
        const {pid}=req.query;
        const uploadMedia=await fetchUploadMediaService(pid);
        return res.status(200).json(
            {
                message:"get the basic details successfully",
                uploadMedia:uploadMedia,
            }) 
    })

export const getDocumentDetails=asyncHandler(async(req, res, next)=>
    {
        const {pid}=req.query;
        const document=await fetchDocumentService(pid);
        return res.status(200).json(
            {
                message:"get the document details successfully",
                document:document,
            }) 
    })





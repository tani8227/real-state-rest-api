import cloudinary from "../config/cloudinary.js";

const uploadToCloudinaryService = async (path, type) => {
    try {
        const result = await cloudinary.uploader.upload(path,
            {
                folder: "real-state-rest-apis",
                resource_type:type,
            });
        return {
            url: result.url,
            id: result.public_id,
            type: result.resource_type,
        }
    } catch (error) {
        console.log("error in deleting from cloudinary", error);
    }
}

export default uploadToCloudinaryService;
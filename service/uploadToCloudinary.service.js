import cloudinary from "../config/cloudinary.js";

const uploadToCloudinaryService = async (path, type) => {
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
}

export default uploadToCloudinaryService;
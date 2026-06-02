import cloudinary from "../config/cloudinary.js";

const deleteFromCloudinaryService = async(id, type) => {
    try {
        const res = await cloudinary.uploader.destroy(id,
            {
                resource_type: type,
            });
        return res;
    } catch (error) {
        console.log("error in deleting from cloudinary", error);
    }
}

export default deleteFromCloudinaryService;
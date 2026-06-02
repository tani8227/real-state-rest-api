import cloudinary from "../config/cloudinary.js";

const deleteFromCloudinaryService = async(id, type) => {

        const res = await cloudinary.uploader.destroy(id,
            {
                resource_type: type,
            });
            console.log(id,res);
        return res;
}

export default deleteFromCloudinaryService;
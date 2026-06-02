import db from "../model/index.js";
const UploadMedia = db.UploadMedia;

const createUploadMediaService = async (data) => {
    const uploadMedia = await UploadMedia.create(data);
    return uploadMedia;
}
export default createUploadMediaService;
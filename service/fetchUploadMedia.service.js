import db from "../model/index.js";

const UploadMedia = db.UploadMedia;

const fetchUploadMediaService = async (pid) => {
    const uploadMedia = await UploadMedia.findOne({
        where:
        {
            propertyId: pid
        }
    });
    return uploadMedia;
}

export default fetchUploadMediaService;
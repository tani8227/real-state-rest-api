import db from "../model/index.js";
const UploadMedia = db.UploadMedia;

const updateUploadMediaService = async (data, pid) => {
    const uploadMedia = await UploadMedia.update(data,
        {
            where:
            {
                porpertyId:pid
            }
        });
    return uploadMedia;
}
export default updateUploadMediaService;
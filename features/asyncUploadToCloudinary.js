import uploadToCloudinaryService from "../service/uploadToCloudinary.service.js";

const asyncUploadToCloudinary = (arr, type) => {
    console.log(arr);
    const res = Promise.all(arr?.map(async(ele) => await uploadToCloudinaryService(ele.path, type)))
    return res;
}
export default asyncUploadToCloudinary;
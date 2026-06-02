import deleteFromCloudinaryService from "../service/deleteFromCloudinary.service.js";

const asyncDeleteFromCloudinary = (arr, type) => {
    const res = Promise.all(arr?.map(async (ele) => await deleteFromCloudinaryService(ele.id, type)));
    return res;
}
export default asyncDeleteFromCloudinary;
import deleteFromCloudinaryService from "../service/deleteFromCloudinary.service.js";

const asyncDeleteFromCloudinary = (arr) => {
    const res = Promise.all(arr?.map(async (ele) => await deleteFromCloudinaryService(ele.id, ele.type)));
    return res;
}
export default asyncDeleteFromCloudinary;
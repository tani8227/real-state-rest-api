import db from "../model/index.js";
const BasicDetails = db.BasicDetails;

const createBasicDetailsService = async (data) => {
    const basicDetails = await BasicDetails.create(data);
    return basicDetails;
}
export default createBasicDetailsService;
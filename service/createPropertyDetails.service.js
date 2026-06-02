import db from "../model/index.js";
const PropertyDetails = db.PropertyDetails;

const createPropertyDetailsService = async (data) => {
    const propertyDetails = await PropertyDetails.create(data);
    return PropertyDetails;
}
export default createPropertyDetailsService;
import db from "../model/index.js";
const PropertyDetails = db.PropertyDetails;

const updatePropertyDetailsService = async (data, pid) => {
    const updatePropertyDetails= await PropertyDetails.update(data, {
            where:{
                propertyId:pid
            }
        });
    return updatePropertyDetails;
}
export default updatePropertyDetailsService;
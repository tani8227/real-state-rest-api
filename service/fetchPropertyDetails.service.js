import db from "../model/index.js";

const PropertyDetails = db.PropertyDetails;

const fetchPropertyDetailsService = async (pid) => {
    const propertyDetails = await PropertyDetails.findOne(
        {
            where:
            {
                propertyId: pid
            }
        });
    return propertyDetails;
}
export default fetchPropertyDetailsService;
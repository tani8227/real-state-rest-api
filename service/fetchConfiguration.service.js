import db from "../model/index.js";

const Configuration = db.Configuration;

const fetchConfigurationService = async(pid) => {
    const configuration = await Configuration.findOne({
        where:
        {
            propertyId: pid
        }
    });
    return configuration;
}

export default fetchConfigurationService
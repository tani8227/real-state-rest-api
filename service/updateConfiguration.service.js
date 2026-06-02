import db from "../model/index.js";

const Configuration = db.Configuration;


const updateConfigurationService = async (data, pid) => {
    const newConfiguration = await Configuration.update(data,
        {
            where:
            {
                propertyId: pid
            }
        });
    return newConfiguration;
}

export default updateConfigurationService;
import db from "../model/index.js";
const Configuration = db.Configuration;

const createConfigurationService = async (data) => {
    const configuration = await Configuration.create(data);
    return configuration;
}
export default createConfigurationService;
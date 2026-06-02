import { sequelize } from "../config/db.js";
import User from "./user.model.js";
import BasicDetails from "./basicDetails.model.js";
import PropertyDetails from "./propertyDetails.model.js";
import Configuration from "./configuration.model.js";
import UploadMedia from "./uploadMedia.model.js";
import Document from "./document.model.js";


const db = {}
db.sequelize = sequelize;
db.User = User;
db.BasicDetails = BasicDetails;
db.PropertyDetails = PropertyDetails;
db.Configuration = Configuration;
db.UploadMedia = UploadMedia;
db.Document = Document


db.User.hasMany(db.BasicDetails, { foreignKey: "userId" });

db.BasicDetails.hasOne(db.PropertyDetails, { foreignKey: "propertyId" });
db.BasicDetails.hasOne(db.Configuration, { foreignKey: "propertyId" });
db.BasicDetails.hasOne(db.UploadMedia, { foreignKey: "propertyId" });
db.BasicDetails.hasOne(db.Document, { foreignKey: "propertyId" });

db.sequelize.sync().then(() => {
    console.log("re-sync");
});


export default db;    
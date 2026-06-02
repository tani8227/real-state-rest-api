import db from "../model/index.js";
const Document = db.Document;

const updateDocumentService = async (data, pid) => {
    const document = await Document.create(data,
        {
            where:
            {
                propertyId: pid
            }
        });
    return document;
}
export default updateDocumentService;
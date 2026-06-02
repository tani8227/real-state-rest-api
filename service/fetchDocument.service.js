import db from "../model/index.js";

const Document = db.Document;

const fetchDocumentService = async (pid) => {
    const document = await Document.findOne({
        where:
        {
            propertyId: pid
        }
    });
    return document;
}

export default fetchDocumentService;
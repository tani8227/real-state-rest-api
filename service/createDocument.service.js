import db from "../model/index.js";
const Document = db.Document;

const createDocumentService = async (data) => {
    const document = await Document.create(data);
    return document;
}
export default createDocumentService;
import db from "../model/index.js";

const BasicDetails = db.BasicDetails;

const fetchBasicDetailsService= async(id)=>
    {
         const basicDetails= await BasicDetails.findOne({
            where:{
                id:id
            }
         });
         return basicDetails; 
    }

    export default fetchBasicDetailsService;
import db from "../model/index.js";
const BasicDetails = db.BasicDetails;

const updatedBasicDetailsService=async(data, pid)=>
    {
        console.log(data, pid);
        const updatedBasicDetails= await BasicDetails.update(data, {
            where:{
                id:pid
            }
        });
        return updatedBasicDetails;
    }
    export default updatedBasicDetailsService;
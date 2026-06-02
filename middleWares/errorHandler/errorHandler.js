const errorHandler=(err, req, res, bext)=>
    {
        return res.status(401).json(
            {
             error:err,
            });
    }
    export default errorHandler;
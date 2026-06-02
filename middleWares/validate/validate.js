const validate = (schema) => (req, res, next) => {
    const data = {
        ...req.body,
        ...req.files
    }

    const { error } = schema.validate(data,
        {
            abortEarly: false,
        });
        console.log(error, typeof error);
    if (error) {
        const fieldErrors = {}
        for (let err of error) {
            errors[`${err.path}`] = err.message
        }
        return res.status(401).json(
            {
                errors: fieldErrors
            });
    }
    next();
}


export default validate;
module.exports = (err, req, res, next) =>{
    const httpStatus = err.statusCode || 500;
    console.log(JSON.stringify(err));
    console.log(err.name)
    console.log(err.message)
    return res.status(httpStatus).json({
        info: {
            statusCode: httpStatus,
            message: err.message || "internal server error",
            success: false
        }
    })
}
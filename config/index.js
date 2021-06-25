if(process.env.NODE_ENV !== "production"){
    require ('custom-env').env('dev')
}
else {
    require ('custom-env').env()
} 

module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
}
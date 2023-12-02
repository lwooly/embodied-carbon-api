module.exports = function (app) {
    API_ENDPOINT='api'
    API_VERSION='v1'

    //api endpoints
    app.use(`/${API_ENDPOINT}/${API_VERSION}/product-env-metrics`, require('./productRoutes'))

    //other endpoints - error
    app.all("*", (req, res) => {
        res.sendStatus(404)
    });
}





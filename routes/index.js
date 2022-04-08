const router = require('express').Router();
const getRoutes = require("./get_routes");
router.use("/", getRoutes)
module.exports = router;
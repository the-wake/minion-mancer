const router = require('express').Router();
const testAPI = require('./testAPI.js');

router.use('/test', testAPI);

module.exports = router;

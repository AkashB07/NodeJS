const express = require('express');

const successController = require('../controllers/success')

const router = express.Router();


// /admin/success=> POST
router.use('/success', successController.getSuccess);

module.exports = router;

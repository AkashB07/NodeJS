const express = require('express');

const contactController = require('../controllers/contactus')

const router = express.Router();

// /admin/contactus => GET
router.get('/contactus', contactController.getContactUs);

// /admin/contactus => POST
router.post('/contactus', contactController.postContactUs);


module.exports = router;

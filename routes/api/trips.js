const express = require('express')
const router = express.Router()
const tripsCtrl = require('../../controllers/api/trips')

// GET /api/trips
router.get('/', tripsCtrl.index)
// POST /api/trips
router.post('/', tripsCtrl.create)

module.exports = router
const express = require('express')
const router = express.Router()
const tripsCtrl = require('../../controllers/api/trips')

// GET /api/v1/trips
router.get('/', tripsCtrl.index)
// GET /api/v1/trips/:id
router.get('/:id', tripsCtrl.show)
// POST /api/v1/trips
router.post('/', tripsCtrl.create)
// PUT /api/v1/trips/:id
router.put('/:id', tripsCtrl.update)
// DELETR /api/v1/trips/:id
router.delete('/:id', tripsCtrl.remove)

module.exports = router
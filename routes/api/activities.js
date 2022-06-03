const express = require('express')
const router = express.Router()
const activitiesCtrl = require('../../controllers/api/activities')

// GET /api/v1/activities
router.get('/', activitiesCtrl.index)
// GET /api/v1/activities/:id
router.get('/:id', activitiesCtrl.show)
// POST /api/v1/activities
router.post('/', activitiesCtrl.create)
// PUT /api/v1/activities/:id
router.put('/:id', activitiesCtrl.update)
// DELETE /api/v1/activities/:id
router.delete('/:id', activitiesCtrl.remove)

module.exports = router
const express = require('express')
const router = express.Router()
const tagsCtrl = require('../../controllers/api/tags')

// GET /api/v1/tags
router.get('/', tagsCtrl.index)
// POST /api/v1/tags
router.post('/', tagsCtrl.create)
// PUT /api/v1/tags/:id
router.put('/:id', tagsCtrl.update)
// DELETE /api/v1/tags/:id
router.delete('/:id', tagsCtrl.remove)

module.exports = router
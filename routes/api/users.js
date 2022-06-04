const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn.js')

// POST /api/v1/users
router.post('/', usersCtrl.create)
// POST /api/v1/users/login
router.post('/login', usersCtrl.login)
// GET /api/v1/users/:id
router.post('/:id', ensureLoggedIn, usersCtrl.show)
// PUT /api/v1/users/:id
router.put('/:id', ensureLoggedIn, usersCtrl.update)
// DELETE /api/v1/users/:id
router.post('/:id', ensureLoggedIn, usersCtrl.remove)

module.exports = router
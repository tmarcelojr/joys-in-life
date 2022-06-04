
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())

// Check if token and create req.user
app.use(require('./config/checkToken'))

// ===== ROUTES =====
// Users
app.use('/api/v1/users', require('./routes/api/users.js'))
// Protect API routers below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn')
// Trips
app.use('/api/v1/trips', ensureLoggedIn, require('./routes/api/trips.js'))
// Tags
app.use('/api/v1/tags', ensureLoggedIn, require('./routes/api/tags.js'))
// Activity
app.use('/api/v1/activities', ensureLoggedIn, require('./routes/api/activities.js'))

// ===== PORT =====
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))
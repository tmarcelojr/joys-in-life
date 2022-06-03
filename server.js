require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()

// ===== MIDDLEWARES =====
app.use(express.json())

// ===== ROUTES =====
// Trips
app.use('/api/v1/trips', require('./routes/api/trips.js'))
// Tags
app.use('/api/v1/tags', require('./routes/api/tags.js'))
// Activity
app.use('/api/v1/activities', require('./routes/api/activities.js'))

// ===== PORT =====
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))
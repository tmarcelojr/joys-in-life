require('dotenv').config()
require('./config/database')

const express = require('express')
const app = express()

// Middlewares
app.use(express.json())

// Routes
app.use('/api/trips', require('./routes/api/trips.js'))

// Port
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))
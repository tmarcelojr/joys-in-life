const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../../models/User')

module.exports = {
    create,
    show,
    update,
    remove,
    login
}

// Finds a user
async function show(req, res) {
    try {
        const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Adds new user
async function create(req, res) {
    try {
        const user = await User.create(req.body)
        // Create token string we can serialize
        const token = createJWT(user)
        res.status(200).json(token)
    } catch(e) {
        // Common: user already in system
        res.status(400).json({msg: e.message})
    }
}

// Login
async function login(req, res) {
    try {
        // Find user by email
        const user = await User.findOne({
            email: req.body.email
        })

        if(!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match) throw new Error()
        res.status(200).json(createJWT(user))
    } catch(e) {
        res.status(400).json({
            msg: e.message,
            reason: 'Bad Credentials'
        })
    }
}

// Update a user
async function update(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Deletes a user
async function remove(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Helper Function
// If getting process is not defined error: Pass the secret prior instead of calling inside this function or turn this into a function expression. 
const createJWT = (user) => {
    return jwt.sign(
        // data payload
        {user},
        process.env.SECRET,
        {expiresIn: '48h'}
    )
}


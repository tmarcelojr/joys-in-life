require('dotenv').config()
require('./database')

// Important: deleteMany() will erase everything and replace it with seed data.

// Import models
const User = require('../models/User')
const Trip = require('../models/Trip')
const Activity = require('../models/Activity')
const Tag = require('../models/Tag')

const seed = async () => {

    // Returns array of Ids
    const getTripIds = () => trips.map(trip => trip._id.toString())
    const getActivityIds = () => activities.map(activity => activity._id.toString())
    const getTagIds = () => tags.map(tag => tag._id.toString())

    // Tags
    await Tag.deleteMany({})
    const tags = await Tag.create([
        {
            name: 'placesToEat',
            slug: 'places to eat',
            activities: []
        },
        {
            name: 'museum',
            slug: 'museum',
            activities: []
        },
        {
            name: 'restaurant',
            slug: 'restaurant',
            activities: []
        },
        {
            name: 'instaWorthySpot',
            slug: 'insta worthy spot',
            activities: []
        },
        {
            name: 'mustSee',
            slug: 'must see',
            activities: []
        },
    ])

    // Activities
    await Activity.deleteMany({})
    const activities = await Activity.create([
        {
            type: 'link',
            notes: 'This is an article to Palawan go-to spots in the Philippines.',
            tags: getTagIds()
        },
        {
            type: 'notes',
            notes: 'This is a note about things we can do in Shibuya, Tokyo',
            tags: []
        }
    ])

    // Trips
    await Trip.deleteMany({})
    const trips = await Trip.create([
        {
            destination: 'Philippines',
            name: '2023 Philippines Trip',
            startDate: '12/01/2023',
            endDate: '12/15/2023',
            activities: getActivityIds()
        },
        {
            destination: 'Tokyo',
            name: '2023 Tokyo Trip',
            startDate: '12/15/2023',
            endDate: '12/31/2023',
            activities: []
        }
    ])

    // Users
    await User.deleteMany({})
    const users = await User.create([
        {
            firstName: 'Teo',
            lastName: 'Marcelo',
            email: 'teomarcelo@test.com',
            password: process.env.SEED_PASSWORD,
            trips: getTripIds()
        },
        {
            firstName: 'Tommy',
            lastName: 'Nguyen',
            email: 'tommynguyen@test.com',
            password: process.env.SEED_PASSWORD,
            trips: []
        }
    ])

    // console.log(users[0]._id)
    // console.log(users[0]._id.toString())


    // users.forEach(user => {
    //     User.findByIdAndUpdate(
    //         user._id.toString(),
    //         {
    //             trips: []
    //         }
    //     )
    // })

    // console.log(getTripIds())

    process.exit()

}

seed()

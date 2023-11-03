const express = require('express')
const { PORT,CLIENT_URL } = require('./constants')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const passport = require('passport')


//import pasport middleware
require('./middlewares/passport-middleware')

// initialize middleware
app.use(express.json())
app.use(cookieParser())
// app.use(cors({origin: CLIENT_URL, credentials: true }))
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}));
app.use(passport.initialize())

//import routes
const authRoutes = require('./routes/auth')

//initalize routes
app.use('/api', authRoutes) 

//app start
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The app is running at ${PORT}`)
        })
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

appStart()
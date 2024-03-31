const express = require('express')
const mongoose = require('mongoose')
const flash = require('connect-flash');
const cors = require('cors');

const app = express()

const database = require('../config/key').MongoURI;

mongoose.connect(database, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())
const commentRoutes = require('../routes/comment')
app.use('/comment', commentRoutes)

app.listen(5000, () => console.log('Server Started'))
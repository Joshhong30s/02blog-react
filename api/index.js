const express = require('express')
const app = express()
const mongoose = require('mongoose')
// Set strictQuery option to false for all models
mongoose.set('strictQuery', false)
const dotenv = require('dotenv')
const { MongoClient, ServerApiVersion } = require('mongodb')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoriesRoute = require('./routes/categories')
const multer = require('multer')

dotenv.config()
app.use(express.json())

const credentials = 'C:/Users/Josh/Desktop/02blog-react/certificate.pem'
mongoose
  .connect(process.env.MongoURL, {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1,
  })
  .then(console.log('connected to MongoDB'))
  .catch((err) => console.log(err))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, 'me2.jpg')
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoriesRoute)

app.listen('5000', () => {
  console.log('Backend is Running')
})

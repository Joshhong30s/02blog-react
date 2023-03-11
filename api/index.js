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
const path = require('path')
const fs = require('fs')

dotenv.config()
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '/images')))

// mongoose
//   .connect(process.env.MongoURL, {
//     sslKey: fs.readFileSync('./certificate.pem'),
//     sslCert: fs.readFileSync('./certificate.pem'),
//     serverApi: ServerApiVersion.v1,
//   })
//   .then(console.log('connected to MongoDB'))
//   .catch((err) => console.log(err))

const credentials = './certificate.pem'
const client = new MongoClient('process.env.MongoURL', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1,
})

async function run() {
  try {
    await client.connect()
    const database = client.db('testDB')
    const collection = database.collection('testCol')
    const docCount = await collection.countDocuments({})
    console.log(docCount)
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
run().catch(console.dir)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
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

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend is Running')
})

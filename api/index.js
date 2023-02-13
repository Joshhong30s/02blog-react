const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { MongoClient, ServerApiVersion } = require('mongodb')

dotenv.config()

const credentials = 'C:/Users/Josh/Desktop/02blog-react/certificate.pem'

mongoose
  .connect(process.env.MongoURL, {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1,
  })
  .then(console.log('connected to MongoDB'))
  .catch((err) => console.log(err))

app.listen('5000', () => {
  console.log('Backend is Running')
})

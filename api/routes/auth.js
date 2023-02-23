//const router = require('express').Router() imports the Router class from the Express library, and creates a new instance of the router that we can use to define our API routes.
const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

//Register request from user to server
router.post('/register', userRegister)

//register function
async function userRegister(req, res) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    })
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
}

//Login request from user to server
router.post('/login', userLogin)

async function userLogin(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res.status(400).json('username does not exist')
    }

    const validated = await bcrypt.compare(req.body.password, user.password)
    if (!validated) {
      return res.status(400).json('password is not correct')
    }

    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
}

//export route
module.exports = router

const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')
const bcrypt = require('bcrypt')

//update users
router.put('/:id', userUpdate)

//update function
async function userUpdate(req, res) {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10)
      req.body.password = await bcrypt.hash(req.body.password, salt)
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      return res.status(200).json(updatedUser)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    return res.status(401).json('You can only update your account')
  }
}

//get users
router.get('/:id', userGet)

//get function
async function userGet(req, res) {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err)
  }
}

//delete users
router.delete('/:id', userDelete)

//delete function
async function userDelete(req, res) {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      try {
        await Post.deleteMany({ username: user.username })
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
      } catch (err) {
        res.status(500).json(err)
      }
    } catch (err) {
      res.status(404).json('User not found!')
    }
  } else {
    res.status(401).json('You can only delete your account')
  }
}

//export module
module.exports = router

const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

//create a new post
router.post('/', newPost)

//newPost function
async function newPost(req, res) {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(500).json(err)
  }
}

//update a post
router.put('/:id', postUpdate)

//postUpdate function
async function postUpdate(req, res) {
  const post = await Post.findById(req.params.id)
  try {
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findOneAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        )
        res.status(200).json(updatedPost)
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json('You can only update your post')
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

//delete a post
router.delete('/:id', postDelete)

//postDelete function
async function postDelete(req, res) {
  const post = await Post.findById(req.params.id)
  if (post.username === req.body.username) {
    try {
      await post.delete()
      res.status(200).json('post has been deleted')
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(401).json('You can only delete your post')
  }
}

//get a post
router.get('/:id', postGet)

//postGet function
async function postGet(req, res) {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
}

//get all posts
router.get('/', postGetAll)

//postGetAll function
async function postGetAll(req, res) {
  const username = req.query.user
  const catName = req.query.cat
  try {
    let posts
    if (username) {
      posts = await Post.find({ username: username })
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      })
    } else {
      posts = await Post.find()
    }
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json(err)
  }
}

//export module
module.exports = router

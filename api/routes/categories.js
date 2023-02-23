const router = require('express').Router()
const Category = require('../models/Category')

//create a new categories
router.post('/', fetchAllCats)

//newCat function
async function fetchAllCats(req, res) {
  const newCat = new Category(req.body)
  try {
    const savedCat = await newCat.save()
    res.status(200).json(savedCat)
  } catch (err) {
    res.status(500).json(err)
  }
}

//fetch all categories
router.get('/', fetchAllCats)

//fetch all categories
async function fetchAllCats(req, res) {
  try {
    const cats = await Category.find()
    res.status(200).json(cats)
  } catch (err) {
    res.status(500).json(err)
  }
}

//export module
module.exports = router

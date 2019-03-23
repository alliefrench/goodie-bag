const router = require('express').Router();
const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  try {
    let candies = await Candy.findAll();
    res.send(candies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

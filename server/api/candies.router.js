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

router.get('/:id', async (req, res, next) => {
  try {
    let candy = await Candy.findById(+req.params.id);
    if (!candy) return res.sendStatus(404);
    res.json(candy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

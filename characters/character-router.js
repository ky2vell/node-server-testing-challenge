const express = require('express');
const Chars = require('./character-model');

const router = express.Router();

// @desc    Get all characters
// @route   GET /api/characters
router.get('/', async (req, res, next) => {
  try {
    const characters = await Chars.find();

    res.json({ count: characters.length, data: characters });
  } catch (err) {
    next(err);
  }
});

// @desc    Get single character
// @route   GET /api/characters/:id
router.get('/:id', async (req, res, next) => {
  try {
    const character = await Chars.findById(req.params.id);

    if (!character) {
      return res.status(404).json({
        message: 'Character not found!'
      });
    }

    res.json({ data: character });
  } catch (err) {
    next(err);
  }
});

// @desc    Create character
// @route   POST /api/characters
router.post('/', async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const character = await Chars.findChar({ name });

    if (character) {
      return res.status(409).json({
        message: 'Character already exists!'
      });
    }

    const newChar = await Chars.add({
      name,
      description
    });

    res.status(201).json({ data: newChar });
  } catch (err) {
    next(err);
  }
});

// @desc    Delete character
// @route   DELETE /api/characters/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const count = await Chars.remove(req.params.id);

    res.status(200).json({ message: `${count} record(s) has been deleted` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

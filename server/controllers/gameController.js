const Game = require('../models/Game');

exports.getGames = async (req, res) => {
  try {
    const scratch = await Game.find({ type: { $in: ['scratch', 'puzzle'] } });
    const kahoot = await Game.find({ type: 'kahoot' });
    res.json({ scratch, kahoot });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addGame = async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
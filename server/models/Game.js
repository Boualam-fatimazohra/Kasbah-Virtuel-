const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nameFr: String,
  description: String,
  descriptionFr: String,
  type: { type: String, enum: ['scratch', 'kahoot', 'puzzle'], required: true },
  embedUrl: String,
  bgImage: String,
  status: { type: String, default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', gameSchema);
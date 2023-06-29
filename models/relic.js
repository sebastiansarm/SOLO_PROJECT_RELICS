const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relicSchema = new Schema({
  name: String,
  description: String,
  image: String,
  status: {
    type: String,
    enum: ['available', 'not available'],
    default: 'available'
  },
  price: Number,
  secretCode: {
    type: String,
    default: null
  }
});

const Relic = mongoose.model('Relic', relicSchema);

module.exports = Relic;
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const hangmanSchema = new Schema({
  name: String,
  timeLeft: { type: Date, default: Date.now },
  word: String,
  lettersUsed: [String],
  isWin: Boolean,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Hangman', hangmanSchema);

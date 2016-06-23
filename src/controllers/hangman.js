/* eslint-disable new-cap */

import express from 'express';
import Hangman from '../models/hangman';
const router = module.exports = express.Router();

function getNewWord() {
  return 'bunny';
}


router.get('/', (req, res) => {
  res.render('home/game');
});

router.post('/new', (req, res) => {
  const game = new Hangman(req.body);
  game.word = getNewWord();
  game.save(() => {
    res.send(game);
  });
});

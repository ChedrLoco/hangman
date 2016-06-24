/* eslint-disable new-cap */

import express from 'express';
import Hangman from '../models/hangman';
import Words from '../models/words';
const router = module.exports = express.Router();
function checkGuess(lettrUsed, letterGuess) {
  return lettrUsed === letterGuess;
}

router.get('/', (req, res) => {
  res.render('home/game');
});

router.post('/new', (req, res) => {
  const game = new Hangman(req.body);
  game.word = Words.getNewWord();
  game.save(() => {
    res.send(game);
  });
});

router.put('/:id/guess', (req, res) => {
  const gl = req.body.guessLetter;
  console.log('guessLetter', gl);
  console.log('gameid', req.params.id);
  Hangman.findById(req.params.id, (err, hangman) => {
    console.log('hangmanDB', hangman);
    const o = {};
    const aryletters = hangman.lettersUsed;
    if (!aryletters.find(checkGuess(gl))) {
      aryletters.push(gl);
      o.lettersUsed = aryletters;
      hangman.update(o, () => {
        hangman.findById(req.params.id, (e, hangman1) => {
          res.send(hangman1);
        });
      });
    } else {
      res.send(hangman);
    }
  });
});

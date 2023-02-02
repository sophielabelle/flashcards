const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const deck = this.makeDeck();
    this.round = new Round(deck);
    this.printMessage(deck, this.round);
    this.printQuestion(this.round);
  }

  makeDeck() {
    const cards = prototypeQuestions.map((card) => {
      const newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    });
    const deck = new Deck(cards);
    return deck;
  }

}

module.exports = Game;
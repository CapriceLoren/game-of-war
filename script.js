class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
    this.shuffle()
  }

  createDeck() {
    let suit = ["hearts", "spades", "clubs", "diamonds"]
    let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(suit[i], rank[j], j + 2)) //score
      }
    }
  }

  shuffle() {
    let currentIndex = this.cards.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }

    return this.cards;
  }
}

class GameOfWar {
  constructor() {
    this.playerOne = []
    this.playerTwo = []
    this.pile = []
    this.gameSetup()
  }

  gameSetup() {
    const { cards } = new Deck()
    this.playerOne.push(...cards.slice(0, cards.length / 2))
    this.playerTwo.push(...cards.slice(cards.length / 2))

  }

  war(c1, c2) {
    this.pile.push(c1, c2)

    if (this.playerOne.length >= 4 && this.playerTwo.length >= 4) {
      this.pile.push(...this.playerOne.splice(this.playerOne.length - 3, 3))
      this.pile.push(...this.playerTwo.splice(this.playerTwo.length - 3, 3))
    }
    else {
      if (this.playerTwo.length < 3) {
        this.playerOne.unshift(...this.pile)
        this.pile.length = 0

      } else if (this.playerOne.length < 3) {
        this.playerTwo.unshift(...this.pile)
        this.pile.length = 0
      }
    }
  }

  compareChoices() {
    while (this.playerOne.length > 0 && this.playerTwo.length > 0) {
      let pOneCard = this.playerOne.pop()
      let pTwoCard = this.playerTwo.pop()

      // console.log(pOneCard)
      // console.log(pTwoCard)

      if (pOneCard.score > pTwoCard.score) {

        this.playerOne.unshift(pOneCard, pTwoCard, ...this.pile)
        this.pile.length = 0

        console.log(`Player One played the ${pOneCard.rank} of ${pOneCard.suit}, beating the ${pTwoCard.rank} of ${pTwoCard.suit} played by Player Two!`)
        console.log(`Player one has ${this.playerOne.length} cards, while player two has ${this.playerTwo.length}`)


      } else if (pOneCard.score < pTwoCard.score) {
        
        this.playerTwo.unshift(pOneCard, pTwoCard, ...this.pile)
        this.pile.length = 0
        
        console.log(`Player Two played the ${pTwoCard.rank} of ${pTwoCard.suit}, beating the ${pOneCard.rank} of ${pOneCard.suit} played by Player One!`)
        console.log(`Player one has ${this.playerOne.length} cards, while player two has ${this.playerTwo.length}`)

      } else if (pOneCard.score === pTwoCard.score) {
        console.log("WAR!")
        this.war(pOneCard, pTwoCard)

      }

    }

    if (this.playerOne.length === 0) {
      console.log("Player Two Wins!")
    } else if (this.playerTwo.length === 0) {
      console.log("Player One Wins!")

    }
  }
}

let game = new GameOfWar()
// console.log(game.playerOne.length)
// console.log(game.playerTwo.length)
// game.war()
// console.log(game.playerOne.length)
// console.log(game.playerTwo.length)

game.compareChoices()


console.log(game.playerOne.length)
console.log(game.playerTwo.length)
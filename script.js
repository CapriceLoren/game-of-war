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
    // let cards = deck.cards

    //split deck for each player
    this.playerOne.push(...cards.slice(0, cards.length / 2))
    this.playerTwo.push(...cards.slice(cards.length / 2))
  
  }

  war(c1, c2) {
    //deal 3 cards each
      this.pile.push(c1, c2)

      if (this.playerOne.length >= 4 && this.playerTwo.length >= 4) {
        this.pile.push(...this.playerOne.splice(this.playerOne.length - 3, 3))
        this.pile.push(...this.playerTwo.splice(this.playerTwo.length - 3, 3))
      }
      else {
        if (this.playerTwo.length < 4) {
          this.playerOne.unshift(this.pOneCard, this.pTwoCard, ...this.pile)
          this.pile.length = 0
          console.log("Player 1 Wins!")
        } else if (this.playerOne.length < 4) {
          this.playerTwo.unshift(this.pOneCard, this.pTwoCard, ...this.pile)
          this.pile.length = 0
          console.log("Player 2 Wins!")
        }
      }

    //if one player doesnt't have 4 cards, they lose
    //if or while?
  }

  compareChoices() {
    while (this.playerOne.length > 0 && this.playerTwo.length > 0) {
    let pOneCard = this.playerOne.pop()
    let pTwoCard = this.playerTwo.pop()

    console.log(pOneCard)
    console.log(pTwoCard)

    if (pOneCard.score > pTwoCard.score) {
      console.log(`Player One played ${pOneCard.rank}, beating ${pTwoCard.rank} played by Player Two!`)

      this.playerOne.unshift(pOneCard, pTwoCard, ...this.pile)
      this.pile.length = 0


    } else if (pOneCard.score < pTwoCard.score) {
      console.log(`Player Two played ${pTwoCard.rank}, beating ${pOneCard.rank} played by Player One!`)


      this.playerTwo.unshift(pOneCard, pTwoCard, ...this.pile)
      this.pile.length = 0

    } else if (pOneCard.score === pTwoCard.score) {
      console.log("WAR!")

      this.war(pOneCard, pTwoCard)

      } //else?
      
      if (this.playerOne.length === 0) {
        console.log ("Player Two Wins!")
      } else if (this.playerTwo.length === 0) {
        console.log ("Player One Wins!")
      }
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

console.log(game)

console.log(game.playerOne.length)
console.log(game.playerTwo.length)
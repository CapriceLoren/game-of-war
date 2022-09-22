// /* war:
//   array of 52 cards split in half, 4 of each kind
//   each player plays a random card
//   if player 1 has a higher card, they win
//   else if player 2 wins
//     winner accumulates card value
//       function to save scores
//   else if tie (war)
//     play a new card, highest card wins
//     (loop)

// How do i save scores?
// */


// let playerOne = {
//   choice: ''
// }

// let playerTwo = {
//   choice: ''
// }

// function cardChoices() {
//   let randomIndex = Math.floor(Math.random() * deck.length - 1);
// }


// function compareChoices() {
//   cardChoices()
//   if (playerOne === playerTwo) {
//     console.log("WAR!")
//       //call compare choices again? 
//   } else if (playerOne > playerTwo){
//     console.log(`Player One played ${playerOne}, beating ${playerTwo} played by Player Two!`)
//   } else if (playerOne < playerTwo) {
//     console.log(`Player Two played ${playerTwo}, beating ${playerOne} played by Player One!`)
//   } //else?
// }

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
    // this.draw()
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
    let currentIndex = this.cards.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  
    return this.cards;
  }

  // draw(){
  //   return this.cards.pop()
  // }
}

class GameOfWar {
  constructor() {
    this.playerOne = []
    this.playerTwo = []
    this.pile = [] 
    this.gameSetup()
    // this.draw()
    this.compareChoices()
  }
  gameSetup(){
    const deck = new Deck()
    let cards = deck.cards
  
    //split deck for each player
    this.playerOne.push(...cards.slice(0, cards.length / 2))
    this.playerTwo.push(...cards.slice(0, cards.length / 2))
  }

  // draw(){
  //   return this.cards.pop()
  // }
  //.pop is undefined

  //should this be a new class?
  compareChoices() { //should this be a loop?
    for (let i = 0; i < 1; i++) {
      console.log(this.playerOne.pop())
      console.log(this.playerTwo.pop())
    }
     // draw for player one and player two
    //cardValue to save score
    //how to access value of card drawn?
      //if playerOne > playerTwo, save score
    //playerOne and playerTwo arent actually holding any value. how do i only compare rank?
    
    if (this.playerOne.rank === this.playerTwo.rank) {
      console.log("WAR!")
        //call compare choices again? 
    } else if (playerOne.rank > playerTwo.rank){
      console.log(`Player One played ${playerOne}, beating ${playerTwo} played by Player Two!`)
    } else if (playerOne.rank < playerTwo.rank) {
      console.log(`Player Two played ${playerTwo}, beating ${playerOne} played by Player One!`)
    } //else?
  }
}

let game = new GameOfWar()
console.log(game)
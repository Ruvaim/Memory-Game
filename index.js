const cards = document.querySelectorAll(".card");
let playerLivesCounts=document.querySelector(".span");
let playerLives = 6;

playerLivesCounts.innerHTML=playerLives;
// console.log(cards);

// variable

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

// var flip = () => {
//   this.classList.add("flip");

//   if (!isFlipped) {
//     isFlipped = true;
//     firstCard = this;
//   }else{
//     secondCard = this;
//     console.log(firstCard);
//     console.log(secondCard);

//     checkIt();
//   }
// }

function flip(){
  // console.log("card flipped");
  // console.log(this);
  // let flipCards = document.querySelectorAll(".flip");
  this.classList.add("flip");

  // if(flipCards.length === 2){
  //   console.log("check",flipCards);
  // }

  // if(flipcards.classList ===flip ){
  //   flipcards.style.pointerEvents ="none";
  // }
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  }else{
    secondCard = this;
    if(firstCard===secondCard){
      // console.log("same");
      secondCard=null;
    }
    // console.log(secondCard);
    // console.log(firstCard);
    // console.log(secondCard);

    checkIt();
  }
}

var checkIt = () => {
  firstCard.dataset.image === secondCard.dataset.image ? success():fail()
}

let flipped=0;
var success = () => {
  if(firstCard.classList== "card flip" && secondCard.classList == "card flip"){
    flipped=flipped+2;
    console.log(flipped);
  }
  if(flipped===20){
    restart("You WON");
  }
  // console.log(flipped);
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

var fail = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
  playerLives--;
  // console.log(playerLives);
  playerLivesCounts.innerHTML=playerLives;
  if(playerLives===0){
    restart("You Lose,Try again");
  }

}
var restart=(text) => {

  cards.forEach((c) => {
    c.classList.remove("flip");
    c.addEventListener("click", flip);
  })
  isFlipped = false;
  firstCard = null;
  secondCard = null;
  secondCard = null;
  // console.log(cards);
  shuffle();
  shuffle();
  playerLives=6;
  playerLivesCounts.innerHTML=playerLives;
  setTimeout(() => window.alert(text),100);
}

var reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
  secondCard = null;
}

// shuffle

var shuffle = () => {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 20);
    // console.log(index);
    card.style.order = index;
    // console.log("card",card.style.order);
  });
}

window.addEventListener("load", shuffle())

// var score = document.querySelector(".score");
const cards = document.querySelectorAll('.card');
// let playerLivesCounts=document.querySelector(".span");
let counter = document.querySelector('.span');
// let playerLives = 6;
let totalTime = 60;

// variable

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener('click', flip));

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

function flip() {
  this.classList.add('flip');

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    if (firstCard === secondCard) {
      secondCard = null;
    }
    checkIt();
  }
}

var checkIt = () => {
  firstCard.dataset.image === secondCard.dataset.image ? success() : fail();
};

let flipped = 0;
var success = () => {
  if (
    firstCard.classList == 'card flip' &&
    secondCard.classList == 'card flip'
  ) {
    flipped = flipped + 2;
    // console.log(flipped);
  }
  if (flipped === 20) {
    restart('You WON');
  }
  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);
  reset();
};

var fail = () => {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
  }, 500);
  // playerLives--;
  // console.log(playerLives);
  // playerLivesCounts.innerHTML = playerLives;
  if (count === 0) {
    restart('Time up, Try Again');
  }
};
var restart = (text) => {
  cards.forEach((c) => {
    c.classList.remove('flip');
    c.addEventListener('click', flip);
  });
  isFlipped = false;
  firstCard = null;
  secondCard = null;
  secondCard = null;
  shuffle1(numbers);
  shuffle();
  count = 50;
  setTimeout(() => window.alert(text), 100);
};

var reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
  secondCard = null;
};

// shuffle
var numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

function shuffle1(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

var random1 = shuffle1(numbers);

var shuffle = () => {
  let i = 0;
  cards.forEach((card) => {
    // var index = Math.floor(Math.random() * 20);
    // var index = random1;
    card.style.order = random1[i];
    if (i < 19) {
      i++;
    }
  });
};
count = 50;

setInterval(() => {
  if (count > 0) {
    count--;
    if (count < 10) {
      counter.style.color = 'red';
    }
    counter.innerHTML = count;
  }
  if (count === 0) {
    counter.style.color = 'white';

    fail();
  }
}, 1000);

window.addEventListener('load', shuffle());

// var score = document.querySelector(".score");

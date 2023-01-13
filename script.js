"use strict";
//=============================================================================
//SECTION GENERAL--------------------------------------------------------
//SECTION PLAYERS Selectors-----------------------------------------------
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const avatar1 = document.querySelector("#avatar--0");
const avatar2 = document.querySelector("#avatar--1");
const btnSwitch = document.querySelector(".btn-switch");

//INITIAL VALUES------------------------------------------------------------
let currentLife;
let activePlayer = 0;
let activeAvatar = 0;
//ITITIAL LIFE POINTS ----------------------------------------------------------
const initiaLife = document.querySelector(".input__initial-lp");
const btnInitialLP = document.querySelector(".btn__itinial-lp");
const life = document.querySelectorAll(".life-points");

const initialLifeFun = function (e) {
  e.preventDefault();
  life.forEach((playerLife) => (playerLife.textContent = initiaLife.value));
  initiaLife.value = "";
};

btnInitialLP.addEventListener("click", initialLifeFun);

//SECTION PLAYERS - SWITCH PLAYER-----------------------------------------------
const switchPlayer = function () {
  document.getElementById(`player--${activePlayer}`);
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");

  document.getElementById(`avatar--${activePlayer}`);
  activeAvatar = activeAvatar === 0 ? 1 : 0;
  avatar1.classList.toggle("avatar--active");
  avatar2.classList.toggle("avatar--active");
};

//SWITCH PLAYER Event listener----------------------------------------------------------
btnSwitch.addEventListener("click", switchPlayer);
//=============================================================================

//=============================================================================
//CALCULATOR POINTS Selectors-----------------------------------------------
const inputPoints = document.querySelector(".input__points");
const btnDamage = document.querySelector(".btn-damage");
const btnRecovery = document.querySelector(".btn-recovery");
//SECTION CALCULATOR POINTS-----------------------------------------------
const recovery = function (e) {
  e.preventDefault();
  currentLife = document.getElementById(`life--${activePlayer}`);
  currentLife.textContent =
    Number(currentLife.textContent) + Number(inputPoints.value);
  cleanInputs();
  gameOver();
};
const damage = function (e) {
  e.preventDefault();
  currentLife = document.getElementById(`life--${activePlayer}`);
  currentLife.textContent -= Number(inputPoints.value);
  cleanInputs();
  gameOver();
};
//SECTION CALCULATOR POINTS Event listener------------------------------------
btnRecovery.addEventListener("click", recovery);
btnDamage.addEventListener("click", damage);
//=============================================================================

//=============================================================================
//SECTION CALCULATOR TURN Selector--------------------------------------
const inputValueMax = document.querySelector(".points--max");
const inputValueMin = document.querySelector(".points--min");
const btnSubtract = document.querySelector(".btn__subtract");
const textSubtract = document.querySelector(".text__turn");

//SECTION CALCULATOR TURN-----------------------------------------------
const subtractPoints = function (e) {
  e.preventDefault();
  textSubtract.textContent = inputValueMax.value - inputValueMin.value;
  inputValueMax.value = "";
  inputValueMin.value = "";
};

btnSubtract.addEventListener("click", subtractPoints);
//=============================================================================

//=============================================================================
//SECTION SLIDER Selectors----------------------------------------------------
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const slides = document.querySelectorAll(".slides");
//SECTION SLIDER--------------------------------------------------------------
let currSlide = 0;
const maxSlide = slides.length;
//Go to slide------------------------
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
    i === slide
      ? s.classList.remove("visibility")
      : s.classList.add("visibility");
  });
};
//Next slide----------------------
const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
};
//Prev slide-----------------------
const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};
goToSlide(currSlide);
//SECTION SLIDER Eventn listener----------------------------------------------
btnLeft.addEventListener("click", prevSlide);
btnRight.addEventListener("click", nextSlide);
//=============================================================================

//=============================================================================
//DIV SLIDE - RANDOM NUMBER----------------------------------------------------
const randomNumEl = document.querySelector(".element-number");
const btnRandom = document.querySelector(".btn__slide--random");

const randomNum = function () {
  randomNumEl.textContent = Math.trunc(Math.random() * 6) + 1;
};

btnRandom.addEventListener("click", randomNum);
//=============================================================================

//=============================================================================
//DIV SLIDE - FLIP COIN--------------------------------------------------------
const btnFlip = document.querySelector(".btn__slide--flip");
const ojamaBlue = document.querySelector(".element__coin--blue");
const ojamaRed = document.querySelector(".element__coin--red");

const flipCoin = function () {
  let coin = Math.trunc(Math.random() * 2) + 1;
  console.log(coin);
  coin === 1
    ? (ojamaBlue.style.opacity = "1")
    : (ojamaBlue.style.opacity = "0");
  coin === 2 ? (ojamaRed.style.opacity = "1") : (ojamaRed.style.opacity = "0");
};

btnFlip.addEventListener("click", flipCoin);
//=============================================================================

//=============================================================================
//DIV SLIDE - COUNTER--------------------------------------
const counterEl = document.querySelector(".element-counter");
const btnCounter = document.querySelector(".btn__slide--counter");
const btnSub = document.querySelector(".btn__slide--subtract");
const btnResetCount = document.querySelector(".btn__slide--reset");

btnCounter.addEventListener("click", function () {
  counterEl.textContent++;
});
btnSub.addEventListener("click", function () {
  counterEl.textContent--;
});
btnResetCount.addEventListener("click", function () {
  counterEl.textContent = 0;
});
//=============================================================================

//=============================================================================
//SECTION TIME Selectors------------------------------------------------
const timeEl = document.querySelector(".time__number");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const btnResetTime = document.querySelector("#reset");
//SECTION TIME-----------------------------------------------------------------
let sec = 0;
let min = 0;
let time;

const seconds = function () {
  sec++;
  if (sec === 60) {
    min++;
    sec = 0;
  }
  timeEl.textContent = `${String(min).padStart(2, 0)}:${String(sec).padStart(
    2,
    0
  )}`;
};

const gameTimeStart = function () {
  time = setInterval(seconds, 1000);
};

const gameTimeStop = function () {
  clearInterval(time);
};

const gameTimeReset = function () {
  clearInterval(time);
  sec = 0;
  min = 0;
  timeEl.textContent = `${String(min).padStart(2, 0)}:${String(sec).padStart(
    2,
    0
  )}`;
};
//SECTION TIME Event listener -----------------------------------------------
btnStart.addEventListener("click", gameTimeStart);
btnStop.addEventListener("click", gameTimeStop);
btnResetTime.addEventListener("click", gameTimeReset);
//=============================================================================

//=============================================================================
//GENERAL BUTTONS Selectors PLAYERS, DUELS, HISTORY,WINNER----------------------
const btnContainer = document.querySelector(".buttons");
const allCards = document.querySelectorAll(".card");

//BTN CLICKED -----------------------------------------------------

const btnGeneral = function (e) {
  const clicked = e.target.closest(".btn");
  if (!clicked) return;
  allCards.forEach((card) => {
    card.classList.remove("card--active");
  });
  if (clicked.dataset.btn === "1") {
    newDuel();
  } else {
    document
      .querySelector(`.card--${clicked.dataset.btn}`)
      .classList.add("card--active");
    winnerCard.classList.remove("winner-visibility");
  }
};
//GENERAL BUTTONS Event listener ------------------------------------------
btnContainer.addEventListener("click", btnGeneral);
//=============================================================================

//=============================================================================
//BTN - NEW DUEL ------------------------------------------
const modalLP = document.querySelector(".modal");
const btnModal = document.querySelector(".close-modal");
const newDuel = function () {
  gameOverRun = false;
  currentLife = document.querySelectorAll(".life-points");
  currentLife.forEach((life) => (life.textContent = "5000"));
  activePlayer = 0;
  activeAvatar = 0;
  modalLP.classList.remove("hidden-modal");
  winnerCard.classList.remove("winner-visibility");
  document.querySelector(".card--2").classList.add("card--active");
  player1.classList.add("player--active");
  avatar1.classList.add("avatar--active");
  avatar2.classList.remove("avatar--active");

  counterEl.textContent = 0;
  btnSwitch.disabled = false;
  btnDamage.disabled = false;
  btnRecovery.disabled = false;
  inputPoints.disabled = false;
  btnSubtract.disabled = false;
  inputValueMax.disabled = false;
  inputValueMin.disabled = false;
  cleanInputs();
  gameTimeReset();
};

btnModal.addEventListener("click", function () {
  modalLP.classList.add("hidden-modal");
});
//=============================================================================

//=============================================================================
//BTN - DUELS COUNTER -------------------------------------------------------
let currentCounter;
const duelsWon = function () {
  currentCounter = document.querySelector(`.counter--${winner}`);
  currentCounter.textContent++;
};
//=============================================================================

//=============================================================================
//BTN - HISTORY TABLE -------------------------------------------------------
const table = document.querySelector(".history__table");

const historyTable = function () {
  const lp = document.getElementById(`life--${winner}`).textContent;
  table.insertAdjacentHTML(
    "beforeend",
    `<tr>
        <td class="history__winner"> Player ${winner === 0 ? 1 : 2}</td>
        <td class="history__final-lp">${lp}</td>
        <td class="history__time">${String(min).padStart(2, 0)}:${String(
      sec
    ).padStart(2, 0)}</td>
    </tr>`
  );
};
//=============================================================================

//=============================================================================
//GAME OVER - WINNER  -----------------------------------------------------------------
const winnerCard = document.querySelector(".winner");
const winnerAvatar = document.querySelector(".winner__avatar");
const winnerPlayer = document.querySelector(".winner__text");
const winnerTime = document.querySelector(".winner__time");
const winnerLP = document.querySelector(".winner__lp");

let gameOverRun = false;
let winner;
let loser;

const gameOver = function () {
  if (Number(currentLife.textContent) <= 0) {
    gameOverRun = true;
    loser = activePlayer;
    loser === 0 ? (winner = 1) : (winner = 0);
    winnerPlayer.textContent = `Player ${winner + 1} Wins!`;
    winnerAvatar.src = `${
      winner === 0 ? "./img/carbunco-rubi.png" : "./img/kuriboh-alado.png"
    }`;
    duelsWon();
    historyTable();
    const lp = document.getElementById(`life--${winner}`).textContent;
    winnerLP.textContent = `Winner's final LP: ${lp}`;
    winnerTime.textContent = `Game time:${String(min).padStart(2, 0)}:${String(
      sec
    ).padStart(2, 0)}`;

    gameTimeStop();
    winnerCard.classList.add("winner-visibility");
    document.querySelector(".card--2").classList.remove("card--active");
    btnSwitch.disabled = true;
    btnDamage.disabled = true;
    btnRecovery.disabled = true;
    inputPoints.disabled = true;
    btnSubtract.disabled = true;
    inputValueMax.disabled = true;
    inputValueMin.disabled = true;
  }
};
//=============================================================================

//=============================================================================
//CLEAN INPUT  --------------------------------------------------------------
const cleanInputs = function () {
  inputPoints.value = "";
  textSubtract.textContent = "0000";
  inputValueMax.value = "";
  inputValueMin.value = "";
};
//=============================================================================

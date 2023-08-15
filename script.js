const buttonOne = document.querySelector('.box1');
const buttonTwo = document.querySelector('.box2');
const buttonThree = document.querySelector('.box3');
const buttonFour = document.querySelector('.box4');
const buttonFive = document.querySelector('.box5');
const sumbitButton = document.getElementById('submit')
const rateAgainButton = document.querySelector('.rate-again')
const rating = document.getElementById('rate')
const firstDisplay = document.getElementById('first-page')
const secondDisplay = document.getElementById('second-page')

let rateDisplay = 0;

buttonOne.addEventListener('click', () => {
  rateDisplay = 1;
  rating.innerText = rateDisplay;
})

buttonTwo.addEventListener('click', () => {
  rateDisplay = 2,
  rating.innerText = rateDisplay;
})

buttonThree.addEventListener('click', () => {
  rateDisplay = 3,
  rating.innerText = rateDisplay;
})








sumbitButton.addEventListener('click', () => {
  secondDisplay.style.display = "block";
  firstDisplay.style.display = "none";
})

rateAgainButton.addEventListener('click', () => {
  firstDisplay.style.display = "block";
  secondDisplay.style.display = "none";
})

buttonFour.addEventListener('click', () => {
  rateDisplay = 4,
  rating.innerText = rateDisplay;
})

buttonFive.addEventListener('click', () => {
  rateDisplay = 5,
  rating.innerText = rateDisplay;
})




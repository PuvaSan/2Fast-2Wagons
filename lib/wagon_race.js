// TODO: write your code here
// grab element array all
// convert nodelist to array
// interate with event listener
// inside eventlistener, remove classlist(current index), add increment active index

const playerOneNodeList = document.querySelectorAll('#player1-race > td');
const playerOneTrack = Array.from(playerOneNodeList);
const playerTwoNodeList = document.querySelectorAll('#player2-race > td');
const playerTwoTrack = Array.from(playerTwoNodeList);

let activeIndexOne = playerOneTrack.findIndex(td => td.classList.contains("active"));
let activeIndexTwo = playerTwoTrack.findIndex(td => td.classList.contains("active"));
const activeIndexOneFL = playerOneTrack.findIndex(td => td.classList.contains("finish"));
const activeIndexTwoFL = playerTwoTrack.findIndex(td => td.classList.contains("finish"));

const winner = (index, finishlineIndex) => {
  if (index === finishlineIndex) {
    return true;
  }
  return false;
};

const moveCar = (playerTrack, activeIndex) => {
  playerTrack[activeIndex].classList.remove('active');
  activeIndex += 1;
  playerTrack[activeIndex].classList.add('active');
  return activeIndex;
};

const resetGame = (playerTrack, activeIndex) => {
  playerTrack[activeIndex].classList.remove('active');
  activeIndex = 0;
  playerTrack[activeIndex].classList.add('active');
  return activeIndex;
};

document.addEventListener("keyup", (event) => {
  if (event.key === 'a') {
    const carAudioOne = document.getElementById('player1car-sound');
    carAudioOne.play();
    activeIndexOne = moveCar(playerOneTrack, activeIndexOne);
  }

  if (event.key === 'l') {
    activeIndexTwo = moveCar(playerTwoTrack, activeIndexTwo);
    const carAudioTwo = document.getElementById('player2car-sound');
    carAudioTwo.play();
  }

  if (winner(activeIndexOne, activeIndexOneFL)) {
    alert("Player 1 Wins!");
  }
  if (winner(activeIndexTwo, activeIndexTwoFL)) {
    alert("Player 2 Wins!");
  }

  if (activeIndexOne === activeIndexTwo) {
    const audio = document.getElementById('car-pass');
    audio.play();
  }
});

const reset = document.querySelector('#reset');
reset.addEventListener("click", (event) => {
  activeIndexOne = resetGame(playerOneTrack, activeIndexOne);
  activeIndexTwo = resetGame(playerTwoTrack, activeIndexTwo);
});

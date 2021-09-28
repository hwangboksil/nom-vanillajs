const generateNumber = document.querySelector("#gener-num input");
const guessNumber = document.querySelector("#guess-num input");
const playBtn = document.querySelector("#guess-num #play-btn");
const matchNumber = document.querySelector("#match");
const resultNumber = document.querySelector("#result");

function handleClickBtn() {
    const guessNum = Number(guessNumber.value);
    const MATCH_NUM = Math.round(Math.random() * generateNumber.value);
    console.log(generateNumber.value, guessNum, MATCH_NUM);
    // console.log(typeof generateNumber.value, typeof guessNum, typeof MATCH_NUM);

    if (guessNum === MATCH_NUM) {
        resultNumber.innerHTML = "You won!!";
    } else {
        resultNumber.innerHTML = "You lost!!";
    }

    matchNumber.innerText = `You chose: ${guessNum} the machine chose: ${MATCH_NUM}`;
}

playBtn.addEventListener("click", handleClickBtn);
const generateNumber = document.querySelector("#gener-num input");
const guessNumber = document.querySelector("#guess-num input");
const playBtn = document.querySelector("#guess-num #play-btn");
const matchNumber = document.querySelector("#match");
const resultNumber = document.querySelector("#result");

function handleClickBtn() {
    const guessNum = guessNumber.value;
    const MATCH_NUM = Math.round(Math.random() * generateNumber.value);
    console.log(generateNumber.value, guessNum);

    if (guessNum === MATCH_NUM) {
        resultNumber.innerText = "You won!!";
    } else {
        resultNumber.innerText = "You lost!!";
    }

    matchNumber.innerText = `You chose: ${guessNum} the machine chose: ${MATCH_NUM}`;
}

playBtn.addEventListener("click", handleClickBtn);
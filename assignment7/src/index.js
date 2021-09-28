const generateNumber = document.querySelector("#gener-num input");
const guessNumber = document.querySelector("#geuss-num input:first-child");
const playBtn = document.querySelector("#geuss-num #play-btn");
const matchNumber = document.querySelector("#match");
const resultNumber = document.querySelector("#result");

const generNum = generateNumber.value;
const guessNum = guessNumber.value;

function handleInputNumber() {
    console.log(generateNumber.value);
}

function handleClickBtn() {
    matchNumber.innerTEXT = `You chose: ${generNum}, the machine chose: ${guessNum}`;
    if (generNum !== guessNum) {
        resultNumber.innerTEXT = "You lost!!";
    } else {
        resultNumber.innerTEXT = "You won!!";
    }
}

generateNumber.addEventListener("input", handleInputNumber);
playBtn.addEventListener("click", handleClickBtn);
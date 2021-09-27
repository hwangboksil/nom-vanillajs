const generateNumber = document.querySelector("#gener-num input");

function handleInputNumber() {
    console.log(generateNumber.value);
}

generateNumber.addEventListener("input", handleInputNumber);
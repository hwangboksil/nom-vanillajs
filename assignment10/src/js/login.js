const input = document.querySelector("#login-form");
const inputName = input.querySelector("#login-form input:first-child");
const loadName = document.querySelector("#greeting");
const nameDelete = document.querySelector("#name-del");

const userName = localStorage.getItem("username");

const HIDDEN_INPUT = 'hidden';

function saveName(userName) {
    localStorage.setItem("username", userName);
}

function handleSubmitName() {
    const userInputName = inputName.value;
    saveName(userInputName);
}

if (userName !== null) {
    input.className = HIDDEN_INPUT;
    loadName.innerText = `Hi, ${userName} :D`;
} else {
    input.classList.remove(HIDDEN_INPUT);
    nameDelete.className = HIDDEN_INPUT;
}

function handleClickNameDel() {
    localStorage.removeItem("username");
    location.reload();
}

input.addEventListener("submit", handleSubmitName);
nameDelete.addEventListener("click", handleClickNameDel);
const h1 = document.querySelector("div:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
    console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);

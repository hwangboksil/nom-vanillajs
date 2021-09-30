const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const changeBtn = document.querySelector("button");

function handleClickBtn(e) {
    e.preventDefault()
    const choseColor1 = colors[Math.floor(Math.random() * colors.length)];
    const choseColor2 = colors[Math.floor(Math.random() * colors.length-2)];
    const deg = Math.floor(Math.random() * 360);
    document.body.style.background = `linear-gradient(${deg}deg,${choseColor1} 50%, ${choseColor2} 70%)`;
}

changeBtn.addEventListener("click", handleClickBtn);


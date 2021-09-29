const clockTitle = document.querySelector(".js-clock");

function getDday() {
    // Today
    const today = new Date();
    // D-day
    const dDay = new Date('2021, 12, 25');
    const gap = dDay - today
    
    // 1s == 1000ms
    // ---------------------------------------- 초   분    시
    const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const seconds = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(2, "0");

    clockTitle.innerHTML = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getDday();
setInterval(getDday, 1000);
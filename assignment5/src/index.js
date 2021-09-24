function handleWindowResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 800) {
      document.body.style.backgroundColor = "pink";
    } else if (800 > windowWidth && windowWidth > 500) {
      document.body.style.backgroundColor = "tomato";
    } else {
      document.body.style.backgroundColor = "purple";
    }
    console.log(window.innerWidth);
  }
  
  window.addEventListener("resize", handleWindowResize);  
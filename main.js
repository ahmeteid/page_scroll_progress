let scrolLine = document.querySelector(".scroller");
let heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);
// console.log(heigth);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scrolLine.style.width = `${(scrollTop / heigth) * 100}%`;
});
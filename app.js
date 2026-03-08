const draw = document.getElementById("draw")
const result = document.getElementById("result")

let omikuji = ["大吉","中吉","吉","小吉","凶"];

let omikujiResult = 0;

draw.addEventListener("click", () => {
    dice = Math.floor(Math.random() * omikuji.length)
    omikujiResult = omikuji[dice]
    result.innerText = omikujiResult
});

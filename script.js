let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]


let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

document.addEventListener("click", function () {

    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
});


console.log(fightButton)
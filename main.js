let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]


let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndexOne = Math.floor(Math.random() * fighters.length);
    let remaining = fighters.filter((_, i) => i !== randomIndexOne);
    let randomIndexTwo = Math.floor(Math.random() * remaining.length);

    stageEl.textContent = fighters[randomIndexOne] + " vs " + remaining[randomIndexTwo];
}); // Closing the event listener function
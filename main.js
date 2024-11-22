const Gameboard = (() => {
    let gameboard = ['', '', '', '', '', '', '' , '', '']

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square-${index}>"${square}</div>`
        })
    }
    document.getElementById("gameboard").innerHTML = boardHTML;

    return {
        render,
    }
})();

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
    //Game.start()
})
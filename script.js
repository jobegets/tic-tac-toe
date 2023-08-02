const gameBoard = (() =>{
    // empty gameboard
    this.layout = ['','','','','','','','','',];
    return {layout};
})();


const board = document.querySelector('.gameboard');
const displayController = ((p1, p2)=>{
    const render = () =>{
        for (let i = 0; i < gameBoard.layout.length; i++){
            let cell = document.createElement('div');
            cell.classList.add("box");
       
            cell.addEventListener("click", ()=>{
                gameBoard.layout[i] = p1.move;
                cell.textContent = gameBoard.layout[i];
                console.log(gameBoard.layout);
            });

            board.appendChild(cell);
        }
    }
    return {render};
})();

const player = (name, symbol) =>{
    return {name, symbol};
}; 

playerOne = player('Rob', 'X');
playerTwo = player('Rob', 'O');

displayController.render();


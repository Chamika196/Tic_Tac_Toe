const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initilizeGame()


function initilizeGame(){
    cells.forEach(cell => cell.addEventListener("click",cellCliked))
    restartBtn.addEventListener("click",restartGame);
    statusText.textContent = `${currentPlayer} 's turn`;
    running = true;
}

function cellCliked(){
     const cellIndex = this.getAttribute("cellIndex");

     if(options[cellIndex] != "" || !running){
        return;
     }
     updateCell(this, cellIndex);
     //changePlayer();
     checkWinner();

}

function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer} 's turn`;


}
function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;

        }
        if(cellA == cellB && cellB == cellC){
            roundWon=true;
            break;
        }
    }
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins !`;
        //statusText.textContent = `${currentPlayer} 's turn`;

        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw !`;
        running =false;
    }
    else{
        changePlayer();
    }
   

}

function restartGame(){
    currentPlayer = "X";
    let options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer} 's turn `;
    cells.forEach(cell => cell.textContent = "");
    running = true;

}

    AND(LEN([ColumnName])=12,
    AND(LEFT([ColumnName],1)>="a",LEFT([ColumnName],1)<="z",
    AND(MID([ColumnName],2,1)>="a",MID([ColumnName],2,1)<="z",
    AND(MID([ColumnName],3,1)>="a",MID([ColumnName],3,1)<="z",
    ISNUMBER(0+MID([ColumnName],4,9))))))

    AND(LEN([CDN])=11,
    AND(LEFT([CDN],4)="CDN/",
    AND(MID([CDN],5,2)>=00,MID([CDN],5,2)<=99,
    AND(MID([CDN],7,1)="/",
    ISNUMBER(0+MID([ColumnName],4,9))))))

    AND(LEN([CDN])=11,
    AND(LEFT([CDN],4)="CDN/",
    AND(MID([CDN],5,2)>=00,MID([CDN],5,2)<=99,
    AND(MID([CDN],7,1)="/",
    ISNUMBER(0+MID([CDN],8,4))))))



    AND(
        LEN([CDN])=11,
        AND(
            LEFT([CDN],4)="CDN/",
            AND(
                MID([CDN],5,2)>=00,
                MID([CDN],5,2)<=99,
                AND(
                    MID([CDN],7,1)="/",
                    ISNUMBER(
                        MID([CDN],8,4)
                    )
                )
            )
        )
    )

    =IF(LEN([CDN])=11,AND(LEFT([CDN],4)="CDN/",AND(MID([CDN],5,2)>=00,MID([CDN],5,2)<=99,AND(MID([CDN],7,1)="/",ISNUMBER(MID([CDN],8,4))))),TRUE,FALSE)

    =IF(LEFT(CDN,4)="CDN/",TRUE,FALSE)

    =IF(LEFT([CDN],4)="CDN/",AND(IF(MID([CDN],4,2)="XX")))

    =IF(LEFT([CDN],4)="CDN/",IF(MID([CDN],5,2)="XX",TRUE,FALSE))

    =IF(AND(LEFT([CDN],4)="CDN/",MID([CDN],5,2)="XX"),TRUE,FALSE)
    =IF(AND(LEFT([CDN],4)="CDN/",MID([CDN],5,2)="XX"),"a")

    IF(AND(LEFT([CDN],4)="CDN/",TRUE, IF(MID([CDN],5,2)="XX",TRUE,IF(MID([CDN],7,2)="hs",TRUE))))

    //Filter(Choices([@'Train Ticket Reservation  Form'].ToStation),DataCardValue8_1.Selected.Value<>Value)
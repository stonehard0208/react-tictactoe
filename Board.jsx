import React, { useState } from 'react';
import Square from './Square';

function Board() {
    const [square, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    let status = "";

    

    const isWinner = () => {
        const winnerBoard = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0; i < winnerBoard.length; i++){
            const [a, b, c] = winnerBoard[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c]){
                return square[a];
            }
        }

        return null;


    }

    const winner = isWinner();
    if (winner){
        status = "Winner: " + winner;
    }
    else{
        status = "Next:" + (isXNext ? "X" : "O")
    }
    

    const handleClick = (i) => {
        if (square[i] || isWinner(square)){
            return;
        }
        const nextSquare = square.slice();
        if (isXNext){
            nextSquare[i] = "X";
        }
        else{
            nextSquare[i] = "O";
        }
       
        setSquares(nextSquare);
        setIsXNext(!isXNext);
    }

    return (
        <div>
      <span>Status: {status} </span>
      <div>
        <Square value={square[0]} handleOnClick={() => handleClick(0)}></Square>
        <Square value={square[1]} handleOnClick={() => handleClick(1)}></Square>
        <Square value={square[2]} handleOnClick={() => handleClick(2)}></Square>
      </div>
      <div>
        <Square value={square[3]} handleOnClick={() => handleClick(3)}></Square>
        <Square value={square[4]} handleOnClick={() => handleClick(4)}></Square>
        <Square value={square[5]} handleOnClick={() => handleClick(5)}></Square>
      </div>
      <div>
        <Square value={square[6]} handleOnClick={() => handleClick(6)}></Square>
        <Square value={square[7]} handleOnClick={() => handleClick(7)}></Square>
        <Square value={square[8]} handleOnClick={() => handleClick(8)}></Square>
      </div>
    </div>
    );
}
export default Board;
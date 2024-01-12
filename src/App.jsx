import { useState } from "react";

export default function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null))//Array(9).fill(null) 
    //creates an array with nine elements and sets each of them to null.
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return
        }


        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <>
            <div >{status}</div>

            <Square onClick={() => handleClick(0)} value={squares[0]} ></Square>
            <Square onClick={() => handleClick(1)} value={squares[1]}></Square>
            <Square onClick={() => handleClick(2)} value={squares[2]}></Square>


            <br />


            <Square onClick={() => handleClick(3)} value={squares[3]}></Square>
            <Square onClick={() => handleClick(4)} value={squares[4]}></Square>
            <Square onClick={() => handleClick(5)} value={squares[5]}></Square>

            <br />


            <Square onClick={() => handleClick(6)} value={squares[6]}></Square>
            <Square onClick={() => handleClick(7)} value={squares[7]}></Square>
            <Square onClick={() => handleClick(8)} value={squares[8]}></Square>

        </>
    );
}

function Square({ value, onClick }) {


    // function handleClick() {
    //     setBoxValue("X");
    // }
    return (
        <>
            <button style={{
                width: '80px',
                height: '80px',
                fontSize: '1.2rem',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
            }}




                onClick={onClick}>{value}</button >
        </>
    );
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
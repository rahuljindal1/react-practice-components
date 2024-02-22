import { useState } from "react";
import classes from "./styles.module.css";

const defaultGameMatrix = [
  Array(3).fill(""),
  Array(3).fill(""),
  Array(3).fill(""),
];
const defaultCurrentPlayer = "X";

const checkRow = (row) => {
  if (row.every((value) => value === row[0])) {
    return row[0];
  }
  return null;
};

const getMatchWinner = (gameMatrix) => {
  const rows = gameMatrix.length;
  const columns = gameMatrix[0].length;

  // Row match
  for (let i = 0; i < rows; i++) {
    const rowWinner = checkRow(gameMatrix[i]);
    if (rowWinner) {
      return rowWinner;
    }
  }

  // Column match
  for (let j = 0; j < columns; j++) {
    const columns = [];
    for (let i = 0; i < rows; i++) {
      columns.push(gameMatrix[i][j]);
    }
    const columnWinner = checkRow(columns);
    if (columnWinner) {
      return columnWinner;
    }
  }

  // Check diagonals
  const diagonal1 = [gameMatrix[0][0], gameMatrix[1][1], gameMatrix[2][2]];
  const diagonal2 = [gameMatrix[0][2], gameMatrix[1][1], gameMatrix[2][0]];

  const diagonal1Winner = checkRow(diagonal1);
  if (diagonal1Winner) {
    return diagonal1Winner;
  }

  const diagonal2Winner = checkRow(diagonal2);
  if (diagonal2Winner) {
    return diagonal2Winner;
  }

  return;
};

export default function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState(defaultCurrentPlayer);
  const [gameMatrix, setGameMatrix] = useState(
    structuredClone(defaultGameMatrix)
  );

  const isMatchDrawn = gameMatrix.every((row) =>
    row.every((column) => Boolean(column))
  );
  const matchWinner = getMatchWinner(gameMatrix);

  const handleCellClick = (rowIndex, columnIndex) => {
    if (isMatchDrawn || matchWinner || gameMatrix[rowIndex][columnIndex]) {
      return;
    }

    gameMatrix[rowIndex][columnIndex] = currentPlayer;
    setCurrentPlayer((prevState) => (prevState === "X" ? "O" : "X"));
    setGameMatrix(gameMatrix);
  };

  const handleReset = () => {
    setCurrentPlayer(defaultCurrentPlayer);
    setGameMatrix(structuredClone(defaultGameMatrix));
  };

  const getPlayerInstruction = () => {
    if (matchWinner) {
      return `Player ${matchWinner} won the match. Please restart the game.`;
    }

    if (isMatchDrawn) {
      return "Draw Match. Please restart the game.";
    }

    return `Next Player is ${currentPlayer}`;
  };

  return (
    <div className={classes.container}>
      <div className={classes.gameArea}>
        {gameMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className={classes.row}>
            {row.map((column, columnIndex) => (
              <div
                className={classes.cell}
                key={`${rowIndex}${columnIndex}`}
                onClick={() => {
                  handleCellClick(rowIndex, columnIndex);
                }}
              >
                {gameMatrix[rowIndex][columnIndex]}
              </div>
            ))}
          </div>
        ))}
        <div className="row"></div>
      </div>
      <div className={classes.instructionArea}>{getPlayerInstruction()}</div>
      <div className={classes.actions} onClick={handleReset}>
        <button>Restart</button>
      </div>
    </div>
  );
}

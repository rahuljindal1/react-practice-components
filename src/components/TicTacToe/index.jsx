import { useState } from "react";
import classes from "./styles.module.css";

const defaultGameMatrix = [
  Array(3).fill(""),
  Array(3).fill(""),
  Array(3).fill(""),
];
const defaultCurrentPlayer = "X";

const getMatchWinner = (gameMatrix) => {
  const rows = gameMatrix.length;
  const columns = gameMatrix[0].length;

  // Row match
  for (let i = 0; i < rows; i++) {
    let areValuesMismatched = false;
    let currentValue;
    for (let j = 0; j < columns - 1; j++) {
      currentValue = gameMatrix[i][j];
      if (!gameMatrix[i][j] || gameMatrix[i][j] !== gameMatrix[i][j + 1]) {
        areValuesMismatched = true;
      }
    }
    if (!areValuesMismatched) {
      return currentValue;
    }
  }

  // Column match
  for (let j = 0; j < columns; j++) {
    let areValuesMismatched = false;
    let currentValue;
    for (let i = 0; i < rows - 1; i++) {
      currentValue = gameMatrix[i][j];
      if (!gameMatrix[i][j] || gameMatrix[i][j] !== gameMatrix[i + 1][j]) {
        areValuesMismatched = true;
      }
    }
    if (!areValuesMismatched) {
      return currentValue;
    }
  }

  // Diagonal Match
  if (gameMatrix[0][0] === gameMatrix[1][1] && gameMatrix[2][2]) {
    return gameMatrix[0][0];
  }
  if (gameMatrix[0][2] === gameMatrix[1][1] && gameMatrix[2][0]) {
    return gameMatrix[1][1];
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

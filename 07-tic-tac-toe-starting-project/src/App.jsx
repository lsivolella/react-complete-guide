import { act, useState } from 'react';

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';

import { WINNING_COMBINATIONS } from './WinningCombinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const playerX = "X";
const playerO = "O";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = playerX;

  if (gameTurns.length > 0 && gameTurns[0].player === playerX)
    currentPlayer = playerO;

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    [playerX]: 'Player 1',
    [playerO]: 'Player 2'
  })
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]


    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = !winner && gameTurns.length === 9

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square:
          {
            row: rowIndex,
            col: colIndex
          },
          player: currentPlayer
        },
        ...prevTurns];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={playerX}
            isActive={activePlayer === playerX}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol={playerO}
            isActive={activePlayer === playerO}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {console.log(winner)}
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log
        gameTurns={gameTurns} />
    </main >
  );
}

export default App

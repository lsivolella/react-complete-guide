import { act, useState } from 'react';

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";
import Log from './components/Log.jsx';

const playerX = "X";
const playerO = "O";

function App() {
  const [activePlayer, setActivePlayer] = useState(playerX);
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === playerX ? playerO : playerX);
    setGameTurns(prevTurns => {
      let currentPlayer = playerX;

      if (prevTurns.length > 0 && prevTurns[0].player === playerX)
        currentPlayer = playerO;

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol={playerX}
            isActive={activePlayer === playerX}
          />
          <Player
            initialName="Player 2"
            symbol={playerO}
            isActive={activePlayer === playerO}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns} />
      </div>
      <Log
        gameTurns={gameTurns} />
    </main >
  );
}

export default App

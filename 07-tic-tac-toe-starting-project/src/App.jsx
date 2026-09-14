import { useState } from 'react';

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx";

const playerX = "X";
const playerO = "O";

function App() {
  const [activePlayer, setActivePlayer] = useState(playerX);

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === playerX ? playerO : playerX);
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
          activePlayerSymbol={activePlayer} />
      </div>
      GAME LOG
    </main >
  );
}

export default App

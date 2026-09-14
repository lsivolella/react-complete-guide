export default function Log({ gameTurns }) {
    return (
        <ol id="log">
            {gameTurns.map(({ square, player }) => (
                <li key={`${square.row}${square.col}`}>
                    {player} selected ({square.row},{square.col})
                </li>
            ))}
        </ol>
    );
}

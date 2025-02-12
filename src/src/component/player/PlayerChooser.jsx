

const PlayerChooser = ({ setPlayer }) => {
    const players = [
        {'player': 'Sleepy', 'race':'Fairy'},
        {'player': 'Dio', 'race':'Fairy'},
        {'player': 'PandaMo', 'race':'Fairy'},
        {'player': 'BulueDwarf', 'race':'Dwarf'},
        {'player': 'Mr.Tyson', 'race':'Orc'},
        {'player': 'Sleepy', 'race':'Fairy'},
        {'player': 'Sleepy', 'race':'Fairy'},
        {'player': 'Sleepy', 'race':'Fairy'}
    ];

    return (
        <select onChange={(e) => setPlayer(e.target.value)}>
            {players.map((playerData, index) => (
                <option key={index} value={playerData.player}>
                    {playerData.player} - {playerData.race}
                </option>
            ))}
        </select>
    );
}

export default PlayerChooser

import { Link } from 'react-router-dom'

const GameInfo = ({game}) => {
    let gamesArray = [];
    for (let i = 0; i < game.length; i++) {
        gamesArray.push(
        <Link to={`/game/${game[i]._id}`}>
        <h1>{game[i].name}</h1>
        <p>{game[i].sport}</p>
        <p>{game[i].location}</p>
        </Link>
        )
    }
    return gamesArray;
}

export default GameInfo
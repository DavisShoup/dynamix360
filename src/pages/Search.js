import { Link } from "react-router-dom"
import Map from "../components/Map";

const Search = ({game}) => {
    // const [park, setPark] = useState();
    const gameInfo = () => {
        let gamesArray = [];
        for (let i = 0; i < game.length; i++) {
            gamesArray.push(
                <Link to={`/game/${game[i]._id}`}>
            <h1>{game[i].name}</h1>
            </Link>)
        }
        return gamesArray;
    }

    return(
        <div className="search-container">

            <h1>All Games</h1>
            <Map />
                {gameInfo()}
                </div>

    )
};

export default Search
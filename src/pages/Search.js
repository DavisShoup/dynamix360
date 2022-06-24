import GameInfo from "../components/gameInfo";

const Search = ({game}) => {
    return(
        <div className="search-container">

            <h1>All Games</h1>
            <GameInfo game={game} />
                </div>

    )
};

export default Search
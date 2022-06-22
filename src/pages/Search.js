import GamesInfo from '../components/Games.js'
import Map from '../components/Map.js';
const Search = ({game}) => {
  return (
      <>
      <Map />
      <GamesInfo game={game} />
      </>
  );
};

export default Search;
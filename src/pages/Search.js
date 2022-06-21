import { GoogleMap, Marker, useLoadScript  } from "@react-google-maps/api";


const Search = ({game}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const gameInfo = () => {
        let gamesArray = [];
        for (let i = 0; i < game.length; i++) {
            gamesArray.push(<h1>{game[i].name}</h1>)
        }
        return gamesArray;
    };

    const Map = () => {
        return <GoogleMap
                zoom={5}
                center={{lat: 40, lng: -100}}
                mapContainerClassName="map-container">
                <Marker position={{lat:40, lng: -100}}/>
                </GoogleMap>
    }

    if (!isLoaded) return <h1>Loading ...</h1>
    return(
        <div className="games">
            {Map()}
            {gameInfo()}
        </div>
    )
};

export default Search
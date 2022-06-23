// import { useState } from 'react';
import { Link } from "react-router-dom"
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
// import { Wrapper, Status } from '@googlemaps/react-wrapper'
// import Map from '../components/Map.js'
// import Places from '../components/Places.js'


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

    // const Map = () => {
    //     const mapRef = useRef();
    //     const center = useMemo(() => ({lat: 40, lng: -100}), []);
    //     const options = useMemo(() => ({
    //         mapId: "b6ef39514783a2a4",
    //         disableDefaultUI: true,
    //         clickableIcons: false,
    //     }), []);
        // const onLoad = useCallback(map => (mapRef.current = map), []);

    //     return(
    //         <div className="container">
    //         <div className="controls">
    //             <h1>Games</h1>
    //         </div>
    //         <div className="map">
    //         <GoogleMap
    //             zoom={5}
    //             center={{lat: 40, lng: -100}}
    //             mapContainerClassName="map-container"
    //             options={options}
    //             onLoad={onLoad}>
    //         </GoogleMap>
    //         </div>
    //     </div>
    //     )
    // }

    return(
        <div>
            {/* <Wrapper apiKey='AIzaSyAat5B6nBVMGYxMVw4jSWxtNiJopiczj4E'>
                {Map()}
            </Wrapper> */}
                {gameInfo()}
        </div>
    )
};

export default Search
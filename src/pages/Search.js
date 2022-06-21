<<<<<<< HEAD
import { GoogleMap, Marker, useLoadScript  } from "@react-google-maps/api";


const Search = ({game}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

=======
import { useState, useMemo, useCallback, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '../components/Map.js'
import Places from '../components/Places.js'


const Search = ({game}) => {
    const [park, setPark] = useState();
>>>>>>> ed7909dd94c18ed8b17a0facbd95b5dcdebd720a
    const gameInfo = () => {
        let gamesArray = [];
        for (let i = 0; i < game.length; i++) {
            gamesArray.push(<h1>{game[i].name}</h1>)
        }
        return gamesArray;
    };

    const Map = () => {
<<<<<<< HEAD
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
=======
        const mapRef = useRef();
        const center = useMemo(() => ({lat: 40, lng: -100}), []);
        const options = useMemo(() => ({
            mapId: "b6ef39514783a2a4",
            disableDefaultUI: true,
            clickableIcons: false,
        }), []);
        const onLoad = useCallback(map => (mapRef.current = map), []);

        return(
            <div className="container">
            <div className="controls">
                <h1>Games</h1>
            </div>
            <div className="map">
            <GoogleMap
                zoom={5}
                center={{lat: 40, lng: -100}}
                mapContainerClassName="map-container"
                options={options}
                onLoad={onLoad}>
            </GoogleMap>
            </div>
        </div>
        )
    }

    return(
        <div>
            <Wrapper apiKey='your-api-key'>
                {Map()}
            </Wrapper>
                {gameInfo()}
>>>>>>> ed7909dd94c18ed8b17a0facbd95b5dcdebd720a
        </div>
    )
};

export default Search
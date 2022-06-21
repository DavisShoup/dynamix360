import { useState, useMemo, useCallback, useRef } from 'react';
import { useLoadScript, GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusteror } from 'react';

import Places from "./Places";
import Distance from "./Distance";

export default function Map() {
    const center = useMemo(() => ({lat: 40, lng: -100}), []);
    return(
    <div className="container">
        <div className="controls">
            <h1>Games</h1>
        </div>
        <div className="map">
        <GoogleMap
            zoom={5}
            center={{center}}
            mapContainerClassName="map-container">
        </GoogleMap>
        </div>
    </div>
    )
 }
 
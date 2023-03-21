import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function App() {
    const defaultState = {
        center: [55.819833, 49.124820],
        zoom: 15,
    };
    const mapStyle =  {
        width: '100%',
        height: '146px'
    }

    return (
        <YMaps>
            <Map defaultState={defaultState} style={mapStyle}>
                <Placemark geometry={[55.819833, 49.124820]} />
            </Map>
        </YMaps>
    );
}

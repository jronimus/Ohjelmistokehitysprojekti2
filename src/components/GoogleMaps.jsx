import React from 'react'
import { useState } from "react";
import {Map, APIProvider, AdvancedMarker, Marker, Pin, InfoWindow} from '@vis.gl/react-google-maps'




function GoogleMaps() {
const position = { lat: 60.1828417992176, lng: 24.952730318261803 }
const apiKey = import.meta.env.VITE_API_KEY


  return (

    <APIProvider apiKey={apiKey}>
    <div style={{height: '100vh'}}>
    <Map zoom={11} center={position} >
    <Marker position={position}>

    </Marker>
    </Map>
    </div>

    </APIProvider>
  )
}

export default GoogleMaps
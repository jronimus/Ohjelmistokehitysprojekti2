import React from 'react'
import { useState } from "react";
import {Map, APIProvider, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps'




function Map() {
const position = { lat: 60.19, lng: 24.95 }



  return (

    <APIProvider >
    <div>Map</div>

    </APIProvider>
  )
}

export default Map
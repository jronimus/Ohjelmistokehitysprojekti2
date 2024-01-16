import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Map,
  APIProvider,
  AdvancedMarker,
  Marker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps'

function GoogleMaps() {
  const [geoData, setGeoData] = useState(null)

  const position = { lat: 60.1828417992176, lng: 24.952730318261803 }
  const apiKey = import.meta.env.VITE_API_KEY
  const mapId= import.meta.env.VITE_MAP_ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.geojson'
        )
        const data = response.data
        setGeoData(data)
        console.log(geoData)
      } catch (error) {
        console.log('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [])

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: '100vh' }}>
        <Map zoom={11} center={position} mapId={mapId}>
          <Marker position={position}></Marker>
          {geoData && geoData.features.map((feature, index)=>(
            
            <AdvancedMarker key={index} position={{ lat: feature.geometry.coordinates[1], lng: feature.geometry.coordinates[0] }}>
          
            <Pin/>


            </AdvancedMarker>
          ))}
          
        </Map>
      </div>
    </APIProvider>
  )
}

export default GoogleMaps

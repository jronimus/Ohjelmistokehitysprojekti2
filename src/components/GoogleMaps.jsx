import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import pin from '../../public/pin.png'
import mapOptions from './mapSkin'

import {
  Map,
  APIProvider,
  AdvancedMarker,
  Marker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps'
import { MarkerClusterer } from '@googlemaps/markerclusterer'

function GoogleMaps() {
  const [geoData, setGeoData] = useState(null)
  const [muniData, setMuniData] = useState(null)

  const position = { lat: 60.1828417992176, lng: 24.952730318261803 }
  const apiKey = import.meta.env.VITE_API_KEY
  const mapId = import.meta.env.VITE_MAP_ID



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
        console.log('Error fetching data:  ', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://api.hel.fi/linkedevents/v1/place?type=muni'
        )
        setMuniData(res.data)
      } catch (error) {
        console.log('Error fetching data:  ', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    // Check if muniData is not null and has a data property before mapping
    if (muniData && Array.isArray(muniData.data)) {
      muniData.data
        .filter(
          (item) =>
            typeof item.name === 'string' && item.name.includes('kirjasto')
        )
        .map((item, index) => {
          console.log(item.position)
          return null
        })
    }
  }, [muniData])



  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: '100vh' }}>
        <Map zoom={11} center={position}  options={mapOptions}>
          {geoData &&
            geoData.features.map((feature, index) => (
              <Marker
                key={index} icon={pin}
                position={{
                  lat: feature.geometry.coordinates[1],
                  lng: feature.geometry.coordinates[0],

                }}>
              </Marker>
            ))}

          {muniData &&
            Array.isArray(muniData.data) &&
            muniData.data
              .filter((item) => item.name.fi.includes('kirjasto'))
              .map((item, index) => {
                return (
                  <Marker
                    key={index} icon={pin}
                    position={{
                      lat: item.position.coordinates[1],
                      lng: item.position.coordinates[0],
                    }}>
                  
                  </Marker>
                )
              })}
        </Map>
      </div>
    </APIProvider>
  )
}

export default GoogleMaps

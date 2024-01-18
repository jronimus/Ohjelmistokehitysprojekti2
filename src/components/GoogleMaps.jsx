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

  useEffect(() => {
    (async () => {
      try {
        const authBody = new URLSearchParams()
        authBody.append('grant_type', 'password')
        authBody.append('client_id', 'datahub-api')
        authBody.append('client_secret', 'ed7cd94f-727e-4cf7-879c-1c26f798bcc0')
        authBody.append('username', 'mikathefinn@gmail.com')
        authBody.append('password', 'juhapaavo69')

        const authRes = await axios.post(
          'https://iam-datahub.visitfinland.com/auth/realms/Datahub/protocol/openid-connect/token',
          authBody,
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )

        const accessToken = authRes.data.access_token

        const myQuery = `
          query GetGroupedProducts {
            groupedProducts(args: {publishing_id: "3fee5495-0abb-4e3a-b2f8-98c8227ae0e9"}) {
              id
              productInformations(where: { language: { _eq: fi } }) {
                name
                description
              }
            }
          }
        `

        const res = await axios.post(
          'https://api-datahub.visitfinland.com/graphql/v1/graphql',
          { query: myQuery },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )

        const queryResult = res.data
        console.log(JSON.stringify(queryResult, null, 2))
        console.log('result', queryResult);
      } catch (error) {
        console.log('Error fetching data: ', error)
      }
    })()
  }, [])

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: '100vh' }}>
        <Map zoom={11} center={position} mapId={mapId}>
          {geoData &&
            geoData.features.map((feature, index) => (
              <AdvancedMarker
                key={index}
                position={{
                  lat: feature.geometry.coordinates[1],
                  lng: feature.geometry.coordinates[0],
                }}>
                <span style={{ fontSize: '1.2rem' }}>🚲</span>
              </AdvancedMarker>
            ))}

          {muniData &&
            Array.isArray(muniData.data) &&
            muniData.data
              .filter((item) => item.name.fi.includes('kirjasto'))
              .map((item, index) => {
                return (
                  <AdvancedMarker
                    key={index}
                    position={{
                      lat: item.position.coordinates[1],
                      lng: item.position.coordinates[0],
                    }}>
                    <span style={{ fontSize: '2rem' }}>📚</span>
                  </AdvancedMarker>
                )
              })}
        </Map>
      </div>
    </APIProvider>
  )
}

export default GoogleMaps

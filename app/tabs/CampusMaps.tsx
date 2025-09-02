import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const CampusMaps = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
      }
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 1 },
        (loc) => setLocation(loc)
      )
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Campus Maps</Text>
      {errorMsg ? (
        <Text style={styles.error}>{errorMsg}</Text>
      ) : location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
        </MapView>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { fontSize: 24, fontWeight: 'bold', margin: 16 },
  map: { flex: 1 },
  error: { color: 'red', margin: 16 },
})

export default CampusMaps
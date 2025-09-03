import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, PermissionsAndroid, Platform, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useDarkMode } from '../../DarkModeContext'

const CampusMaps = () => {
  const { darkMode } = useDarkMode()
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50"
  const headerBg = darkMode ? "bg-blue-900" : "bg-blue-600"
  const headerText = "text-2xl font-bold text-white tracking-wider"
  const textColor = darkMode ? "text-gray-100" : "text-gray-700"
  const errorColor = "text-red-600 text-lg text-center"

  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          )
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            setErrorMsg('Location permission denied')
            return
          }
        }

        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
          return
        }

        Location.watchPositionAsync(
          { accuracy: Location.Accuracy.High, distanceInterval: 1 },
          (loc) => setLocation(loc)
        )
      } catch (error) {
        setErrorMsg('Error getting location')
      }
    }

    getLocation()
  }, [])

  return (
    <View className={`flex-1 ${bgColor}`}>
      <View className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}>
        <Text className={headerText}>Campus Maps</Text>
      </View>
      {errorMsg ? (
        <View className="flex-1 justify-center items-center p-6">
          <Text className={errorColor}>{errorMsg}</Text>
        </View>
      ) : location ? (
        <MapView
          style={{ flex: 1 }}
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
            description="Your current location"
          />
        </MapView>
      ) : (
        <View className="flex-1 justify-center items-center p-6">
          <ActivityIndicator size="large" color="#2563eb" />
          <Text className={`text-base mt-4 ${textColor}`}>Loading location...</Text>
        </View>
      )}
    </View>
  )
}

export default CampusMaps
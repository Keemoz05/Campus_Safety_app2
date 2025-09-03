import React from 'react'
import { Text, View } from 'react-native'
import { useDarkMode } from '../../DarkModeContext'

const SupportResources = () => {
  const { darkMode } = useDarkMode()
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50"
  const headerBg = darkMode ? "bg-blue-900" : "bg-blue-600"
  const textColor = darkMode ? "text-gray-100" : "text-gray-700"

  return (
    <View className={`flex-1 ${bgColor}`}>
      <View className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}>
        <Text className="text-2xl font-bold text-white tracking-wider">Support Resources</Text>
      </View>
      <View className="flex-1 items-center justify-center p-6">
        <Text className={`text-base text-center ${textColor}`}>
          Find support contacts and resources for your well-being on campus.
        </Text>
      </View>
    </View>
  )
}

export default SupportResources
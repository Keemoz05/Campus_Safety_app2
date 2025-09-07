import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useAppContext } from '../../AppContext'

const SafetyToolbox = () => {
  const { darkMode } = useAppContext()
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50"
  const headerBg = darkMode ? "bg-blue-900" : "bg-blue-600"
  const textColor = darkMode ? "text-gray-100" : "text-gray-700"

  return (
    <ScrollView className={`flex-1 ${bgColor}`}>
      <View className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}>
        <Text className="text-2xl font-bold text-white tracking-wider">Safety Toolbox</Text>
      </View>
      <View className="p-6">
        <Text className={`text-base mb-5 text-center ${textColor}`}>
          Access important safety tools and resources to help keep you secure on campus.
        </Text>
        {/* Add your safety tools components here */}
      </View>
    </ScrollView>
  )
}

export default SafetyToolbox
import { router, useLocalSearchParams } from "expo-router";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAppContext } from "../../AppContext";



export default function PostDetails() {
  const { id, title, description, time } = useLocalSearchParams();
   
    const { darkMode } = useAppContext();
    const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
    const headerBg = darkMode ? "bg-blue-900" : "bg-blue-600";
    const textColor = darkMode ? "text-gray-100" : "text-gray-700";
    const cardColor = darkMode ? "bg-gray-800" : "bg-white";


  return (
    
          

    
    <View className={`flex-1 ${bgColor}`}>

      <View
        className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}
      >
        <Text className="text-2xl font-bold text-white tracking-wider">
          Report
        </Text>
      </View>
    
        <TouchableOpacity
                  onPress={() => router.back()}
                  className="absolute top-2.5 left-2.5 bg-white px-4 py-2 rounded-xl shadow active:opacity-80 mt-8"
                >
                  <Text className="text-black-600 text-lg font-semibold">← Back</Text>
        </TouchableOpacity>
        
    <View className={`flex-1 ${cardColor} p-6 mt-12`}>
      <Text className={`text-2xl font-bold ${textColor}`}>{title}</Text> 
      <Text className={`${textColor} mt-2`}>{description}</Text>
      <Text className="text-xs text-gray-400 mt-4">{time}</Text>
    </View>
    
      
      
      
    </View>
  )
}



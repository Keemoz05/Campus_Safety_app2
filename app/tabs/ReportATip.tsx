import { Link } from "expo-router";
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../AppContext";
import BackButton from "../../components/BackButton";

const ReportATip = () => {
  const { darkMode } = useAppContext();
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const headerBg = darkMode ? "bg-blue-900" : "bg-blue-600";
  const textColor = darkMode ? "text-gray-100" : "text-gray-700";

  return (
    <View className={`flex-1 ${bgColor}`}>
      <BackButton />
      <View className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}>
        <Text className="text-2xl font-bold text-white tracking-wider">Report A Tip</Text>
      </View>
      <View className="flex-1 items-center justify-center p-6">
        <Text className={`text-base mb-6 text-center ${textColor}`}>
          Help keep campus safe by reporting tips or suspicious activity.
        </Text>
        <Link href="/tabs/ReportingTabs/SRCForm" asChild>
          <TouchableOpacity className="w-40 aspect-square bg-green-100 rounded-2xl items-center justify-center mb-3 shadow active:opacity-80">
            <Text className="text-green-800 font-semibold text-lg mt-0.5 text-center">
              Life Aid
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

export default ReportATip
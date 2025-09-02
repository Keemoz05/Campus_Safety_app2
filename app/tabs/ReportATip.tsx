import { Link } from "expo-router";
import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
const ReportATip = () => {
  return (
    <View>
      <Text>Report A Tip</Text>
      <Text>Description Here</Text>
                  <Link href="/tabs/ReportingTabs/SRCForm" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-green-100 rounded-xl items-center justify-center mb-4">
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Life Aid
                </Text>
              </TouchableOpacity>
            </Link>
    </View>


  )
}

export default ReportATip
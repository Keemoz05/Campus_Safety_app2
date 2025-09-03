import { Link } from "expo-router";
import { Cog, FileText, Heart, House, Map, Shield, Users } from "lucide-react-native";
import {
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDarkMode } from "../DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const textColor = darkMode ? "text-gray-100" : "text-gray-900";

  const MakePhoneCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <SafeAreaView
      className={`flex-1 ${bgColor}`}
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView className="px-5 py-8">
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <View className="w-14 h-14 bg-red-600 rounded-full items-center justify-center mr-4 shadow-lg">
            <Text className="text-white font-bold text-xl">S</Text>
          </View>
          <Text className={`text-2xl font-bold ${textColor}`}>
            Campus Safety App
          </Text>
        </View>

        {/* Title Section */}
        <Text className="text-3xl font-extrabold text-red-700 mb-1">
          🚨 Emergency?
        </Text>
        <Text className={`text-base text-center ${textColor} mb-7`}>
          If you are in an emergency, call the emergency contacts now.
        </Text>

        {/* Emergency Buttons */}
        <View className="w-full space-y-4 mb-10">
          <TouchableOpacity
            onPress={() => MakePhoneCall("999")}
            className="bg-red-600 rounded-2xl py-4 shadow-lg active:opacity-80"
          >
            <Text className="text-white text-xl font-bold text-center tracking-wide">
              Call 999
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => MakePhoneCall("0123456789")}
            className="bg-orange-500 rounded-2xl py-4 shadow-lg active:opacity-80"
          >
            <Text className="text-white text-xl font-bold text-center tracking-wide">
              Call MMU Security Hotline
            </Text>
          </TouchableOpacity>
        </View>

        {/* Safety Tools Section */}
        <View className="w-full bg-white rounded-2xl shadow-lg p-5 mt-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Safety Tools
          </Text>

          <View className="flex-row flex-wrap justify-between">
            <Link href="/tabs/EmergencyProcedures" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-red-100 rounded-xl items-center justify-center mb-4 active:opacity-80 shadow">
                <Shield size={32} color="#b91c1c" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Emergency Procedures
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/FriendWalk" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-blue-100 rounded-xl items-center justify-center mb-4 active:opacity-80 shadow">
                <Users size={32} color="#1d4ed8" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  FriendWalk
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/ReportATip" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-yellow-100 rounded-xl items-center justify-center mb-4 active:opacity-80 shadow">
                <FileText size={32} color="#ca8a04" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Report a Tip
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/CampusMaps" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-green-100 rounded-xl items-center justify-center mb-4 active:opacity-80 shadow">
                <Map size={32} color="#15803d" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Campus Maps
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/SupportResources" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-pink-100 rounded-xl items-center justify-center mb-4 active:opacity-80 shadow">
                <Heart size={32} color="#be123c" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Support Resources
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/SafetyToolbox" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-purple-100 rounded-xl items-center justify-center mb-4 active:opacity-80 shadow">
                <House size={32} color="#6b21a8" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Safety Toolbox
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View className="flex-row justify-around items-center bg-white border-t border-gray-200 py-3 shadow-lg">
        <Link href="/" asChild>
          <TouchableOpacity className="items-center active:opacity-80">
            <House size={24} color="#b91c1c" />
            <Text className="text-xs text-gray-700 mt-1">Home</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/tabs/CampusMaps" asChild>
          <TouchableOpacity className="items-center active:opacity-80">
            <Map size={24} color="#15803d" />
            <Text className="text-xs text-gray-700 mt-1">Maps</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/tabs/ReportATip" asChild>
          <TouchableOpacity className="items-center active:opacity-80">
            <FileText size={24} color="#ca8a04" />
            <Text className="text-xs text-gray-700 mt-1">Report</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/tabs/Settings" asChild>
          <TouchableOpacity className="items-center active:opacity-80">
            <Cog size={24} color="#a78bfa" />
            <Text className="text-xs text-gray-700 mt-1">Settings</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

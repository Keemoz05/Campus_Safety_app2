import { Link } from "expo-router";
import { FileText, Heart, House, Map, Shield, Users } from "lucide-react-native";
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

export default function Home() {
  const MakePhoneCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <SafeAreaView
      className="flex-1 bg-gray-50"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView className="flex-1 px-4 py-6">
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <View className="w-12 h-12 bg-red-600 rounded-full items-center justify-center mr-3">
            <Text className="text-white font-bold text-lg">S</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900">Campus Safety App</Text>
        </View>

        {/* Title Section */}
        <Text className="text-3xl font-bold text-red-700 mb-2">🚨In an Emergency?</Text>
        <Text className="text-lg text-center text-gray-700 mb-6">
          If you are in an emergency, call the emergency contacts now.
        </Text>

        {/* Emergency Buttons */}
        <View className="w-full space-y-4 mb-8">
          <TouchableOpacity
            onPress={() => MakePhoneCall("999")}
            className="bg-red-600 rounded-2xl py-4 shadow-md"
          >
            <Text className="text-white text-xl font-bold text-center">
              Call 999
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => MakePhoneCall("0123456789")}
            className="bg-orange-500 rounded-2xl py-4 shadow-md"
          >
            <Text className="text-white text-xl font-bold text-center">
              Call MMU Security Hotline
            </Text>
          </TouchableOpacity>
        </View>

        {/* Safety Tools Section */}
        <View className="w-full bg-white rounded-2xl shadow-md p-4 mt-6">
          <Text className="text-lg font-semibold text-gray-800 mb-4">
            Safety Tools
          </Text>

          <View className="flex-row flex-wrap justify-between">
            <Link href="/tabs/EmergencyProcedures" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-red-100 rounded-xl items-center justify-center mb-4">
                <Shield size={32} color="#b91c1c" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Emergency Procedures
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/FriendWalk" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-blue-100 rounded-xl items-center justify-center mb-4">
                <Users size={32} color="#1d4ed8" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  FriendWalk
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/ReportATip" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-yellow-100 rounded-xl items-center justify-center mb-4">
                <FileText size={32} color="#ca8a04" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Report a Tip
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/CampusMaps" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-green-100 rounded-xl items-center justify-center mb-4">
                <Map size={32} color="#15803d" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Campus Maps
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/SupportResources" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-pink-100 rounded-xl items-center justify-center mb-4">
                <Heart size={32} color="#be123c" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Support Resources
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/tabs/SafetyToolbox" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-purple-100 rounded-xl items-center justify-center mb-4">
                <House size={32} color="#6b21a8" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Safety Toolbox
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

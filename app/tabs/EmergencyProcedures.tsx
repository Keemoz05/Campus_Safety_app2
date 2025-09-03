import { Link, useRouter } from "expo-router";
import { Map } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDarkMode } from "../../DarkModeContext";

export default function EmergencyProcedures() {
  const router = useRouter();
  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const headerBg = darkMode ? "bg-red-900" : "bg-red-600";
  const textColor = darkMode ? "text-gray-100" : "text-gray-700";

  return (
    <ScrollView className={`flex-1 ${bgColor}`}>
      <View className={`pt-12 pb-5 ${headerBg} items-center border-b border-gray-200 shadow`}>
        <Text className="text-2xl font-bold text-white tracking-wider">
          Emergency Procedures
        </Text>
      </View>
      <View className="flex-1 p-6 items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-2.5 left-2.5 bg-white px-4 py-2 rounded-xl shadow active:opacity-80"
        >
          <Text className="text-red-600 text-lg font-semibold">← Back</Text>
        </TouchableOpacity>
        <Text className={`text-lg mb-6 mt-8 text-center ${textColor}`}>
          Be sure you are comfortable with all the emergency procedures below
          before heading out! These plans are available offline.
        </Text>
        <Link
          href="/tabs/EmergencyProceduresTabs/GettingAssistance"
          asChild
        >
          <TouchableOpacity className="w-40 aspect-square bg-green-100 rounded-2xl items-center justify-center mb-3 shadow active:opacity-80">
            <Map size={32} color="#15803d" />
            <Text className="text-green-800 font-semibold text-lg mt-0.5 text-center">
              Life Aid
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

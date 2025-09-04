import { Link, useRouter } from "expo-router";
import { Map } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function Page1() {
  const router = useRouter();

  return (
    <ScrollView>
    <View className="flex-1 bg-red-200 px-4 pt-12">
      {/* Top-left Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-10 left-4 bg-white px-4 py-2 rounded-lg shadow"
      >
        <Text className="text-black text-lg font-semibold">← Back</Text>
      </TouchableOpacity>

      {/* Content */}
      <View className="flex-1 items-center justify-center pt-10"  >
        <Text className="text-2xl mb-4">Emergency Procedures</Text>
        <Text className="text-lg text-center px-2 text-gray-800">
          Be sure you are comfortable with all the emergency procedures below
          before heading out! These plans are available offline.
        </Text>
      </View>


            <Link href="/tabs/EmergencyProceduresTabs/GettingAssistance" asChild>
              <TouchableOpacity className="w-[48%] aspect-square bg-green-100 rounded-xl items-center justify-center mb-4 mt-5">
                <Map size={32} color="#15803d" />
                <Text className="text-gray-800 font-medium mt-2 text-center">
                  Life Aid
                </Text>
              </TouchableOpacity>
            </Link>
    </View>
    </ScrollView>
  );
}

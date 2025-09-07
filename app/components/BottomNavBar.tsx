
import { Link, useRouter } from "expo-router";
import { House, Map, UserPlus, Cog, Bell } from "lucide-react-native";
import { TouchableOpacity, View, Text, Alert } from "react-native";
import { useAppContext } from "../../AppContext";

export function BottomNavBar() {
  const { darkMode, signedIn } = useAppContext();
  const router = useRouter();
  const cardColor = darkMode ? "bg-gray-800" : "bg-white";

  const handleProtectedLink = (href: string) => {
    if (!signedIn) {
      Alert.alert(
        "Sign In Required",
        "Please sign in to use this feature.",
        [{ text: "OK" }]
      );
    } else {
      router.push(href);
    }
  };

  return (
    <View
      className={`flex-row justify-around items-center ${cardColor} border-t border-gray-200 py-3 shadow-lg`}
    >
      <Link href="/" asChild>
        <TouchableOpacity className="items-center active:opacity-80">
          <House size={24} color="#b91c1c" />
          <Text
            className={`text-xs mt-1 ${
              darkMode ? "text-white font-bold" : "text-gray-700"
            }`}
          >
            Home
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/tabs/CampusMaps" asChild>
        <TouchableOpacity className="items-center active:opacity-80">
          <Map size={24} color="#15803d" />
          <Text
            className={`text-xs mt-1 ${
              darkMode ? "text-white font-bold" : "text-gray-700"
            }`}
          >
            Maps
          </Text>
        </TouchableOpacity>
      </Link>
      <Link href="/tabs/Notifications" asChild>
        <TouchableOpacity className="items-center active:opacity-80">
          <Bell size={24} color="#f59e0b" />
          <Text
            className={`text-xs mt-1 ${
              darkMode ? "text-white font-bold" : "text-gray-700"
            }`}
          >
            Notifications
          </Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity
        className="items-center active:opacity-80"
        onPress={() => handleProtectedLink("/tabs/FriendsList")}
      >
        <UserPlus size={24} color="#2563eb" />
        <Text
          className={`text-xs mt-1 ${
            darkMode ? "text-white font-bold" : "text-gray-700"
          }`}
        >
          Friends
        </Text>
      </TouchableOpacity>
      <Link href="/tabs/Settings" asChild>
        <TouchableOpacity className="items-center active:opacity-80">
          <Cog size={24} color="#a78bfa" />
          <Text
            className={`text-xs mt-1 ${
              darkMode ? "text-white font-bold" : "text-gray-700"
            }`}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

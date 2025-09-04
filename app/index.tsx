import Constants from "expo-constants";
import { Link } from "expo-router";
import { Cog, EllipsisVertical, FileText, Heart, House, Map, Shield, UserPlus, Users } from "lucide-react-native";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Linking,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { useDarkMode } from "../DarkModeContext";
export default function Home() {
  const { darkMode } = useDarkMode();
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const textColor = darkMode ? "text-gray-100" : "text-gray-900";
  const cardColor = darkMode ? "bg-gray-800" : "bg-white";
  const inputBg = darkMode ? "bg-gray-700" : "bg-gray-100";
  const inputText = darkMode ? "text-gray-100" : "text-gray-900";

  // Sign-in modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [role, setRole] = useState<"student" | "security" | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState<null | "student" | "security">(null);

  // Friends list state
  const [friends, setFriends] = useState<string[]>(["Alice", "Bob"]);
  const [friendModalVisible, setFriendModalVisible] = useState(false);
  const [newFriend, setNewFriend] = useState("");

  const MakePhoneCall = (number: string) => {
    if (!signedIn) {
      Alert.alert(
        "Sign In Required",
        "Please sign in as a student or security to use this feature.",
        [{ text: "OK" }]
      );
      return;
    }
    Linking.openURL(`tel:${number}`);
  };

  const handleSignIn = () => {
    // Dummy sign-in logic
    if (username && password && role) {
      setSignedIn(role);
      setModalVisible(false);
      setUsername("");
      setPassword("");
      setRole(null);
    }
  };

  const handleSignOut = () => {
    setSignedIn(null);
    Alert.alert("Signed Out", "You have been signed out.");
  };

  const handleAddFriend = () => {
    if (newFriend.trim() && !friends.includes(newFriend.trim())) {
      setFriends([...friends, newFriend.trim()]);
      setNewFriend("");
    }
  };

  const handleRemoveFriend = (name: string) => {
    setFriends(friends.filter(f => f !== name));
  };

  return (

    <SafeAreaView
      className={`flex-1 ${bgColor}`}
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >


      {/* Sign In Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/40">
          <View className={`w-11/12 rounded-2xl p-6 ${cardColor} shadow-lg`}>
            <Text className={`text-xl font-bold mb-4 ${textColor}`}>Sign In</Text>
            <View className="flex-row justify-between mb-4">
              <Pressable
                className={`flex-1 mr-2 py-2 rounded-xl ${role === "student" ? "bg-blue-600" : inputBg}`}
                onPress={() => setRole("student")}
              >
                <Text className={`text-center font-semibold ${role === "student" ? "text-white" : textColor}`}>
                  Student
                </Text>
              </Pressable>
              <Pressable
                className={`flex-1 ml-2 py-2 rounded-xl ${role === "security" ? "bg-red-600" : inputBg}`}
                onPress={() => setRole("security")}
              >
                <Text className={`text-center font-semibold ${role === "security" ? "text-white" : textColor}`}>
                  Security
                </Text>
              </Pressable>
            </View>
            <View className={`rounded-lg px-3 py-2 mb-3 ${inputBg}`}>
              <Text className={`text-xs mb-1 ${inputText}`}>Username</Text>
              <TextInput
                placeholder="Enter username"
                placeholderTextColor={darkMode ? "#a3a3a3" : "#737373"}
                value={username}
                onChangeText={setUsername}
                className={`w-full ${inputText}`}
                style={{ padding: 0, backgroundColor: "transparent" }}
              />
            </View>
            <View className={`rounded-lg px-3 py-2 mb-4 ${inputBg}`}>
              <Text className={`text-xs mb-1 ${inputText}`}>Password</Text>
              <TextInput
                placeholder="Enter password"
                placeholderTextColor={darkMode ? "#a3a3a3" : "#737373"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                className={`w-full ${inputText}`}
                style={{ padding: 0, backgroundColor: "transparent" }}
              />
            </View>
            <View className="flex-row justify-end">
              <Pressable
                className="px-4 py-2 rounded-xl bg-gray-300 mr-2"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-gray-800 font-semibold">Cancel</Text>
              </Pressable>
              <Pressable
                className={`px-4 py-2 rounded-xl ${
                  role && username && password ? "bg-blue-600" : "bg-gray-400"
                }`}
                disabled={!role || !username || !password}
                onPress={handleSignIn}
              >
                <Text className="text-white font-semibold">Sign In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Friends List Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={friendModalVisible}
        onRequestClose={() => setFriendModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/40">
          <View className={`w-11/12 rounded-2xl p-6 ${cardColor} shadow-lg max-h-[80%]`}>
            <Text className={`text-xl font-bold mb-4 ${textColor}`}>Friends List</Text>
            <FlatList
              data={friends}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <View className="flex-row items-center justify-between mb-2">
                  <Text className={`text-base ${textColor}`}>{item}</Text>
                  <TouchableOpacity
                    onPress={() => handleRemoveFriend(item)}
                    className="px-2 py-1 rounded bg-red-200 active:opacity-80"
                  >
                    <Text className="text-xs text-red-800 font-semibold">Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
              ListEmptyComponent={
                <Text className={`text-base ${textColor}`}>No friends added yet.</Text>
              }
              style={{ marginBottom: 12 }}
            />
            <View className="flex-row items-center mb-4">
              <TextInput
                placeholder="Add friend name"
                placeholderTextColor={darkMode ? "#a3a3a3" : "#737373"}
                value={newFriend}
                onChangeText={setNewFriend}
                className={`flex-1 mr-2 px-3 py-2 rounded-lg ${inputBg} ${inputText}`}
                style={{ backgroundColor: "transparent" }}
              />
              <TouchableOpacity
                className="px-4 py-2 rounded-xl bg-blue-600 active:opacity-80"
                onPress={handleAddFriend}
              >
                <Text className="text-white font-semibold">Add</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-end">
              <Pressable
                className="px-4 py-2 rounded-xl bg-gray-300"
                onPress={() => setFriendModalVisible(false)}
              >
                <Text className="text-gray-800 font-semibold">Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView className="px-5 py-8">
        {/* Header */}
        <View className="flex-row items-center mb-8 justify-between">
          <View className="flex-row items-center">
            <View className="w-14 h-14 bg-red-600 rounded-full items-center justify-center mr-4 shadow-lg">
              <Text className="text-white font-bold text-xl">S</Text>
            </View>
            <Text className={`text-2xl font-bold ${textColor}`}>
              Campus Safety App
            </Text>
          </View>
          {/* Discrete sign-in button */}
          <TouchableOpacity
            className="p-2 rounded-full active:opacity-80"
            onPress={() => setModalVisible(true)}
            accessibilityLabel={signedIn ? `Signed in as ${signedIn}` : "Sign in"}
          >
            <EllipsisVertical size={28} color={darkMode ? "#f3f4f6" : "#374151"} />
          </TouchableOpacity>
        </View>

        {/* Optionally, show signed-in status as a small badge and sign out */}
        {signedIn && (
          <View className="flex-row justify-end items-center mb-2 space-x-2">
            <Text className="text-xs px-3 py-1 rounded-full bg-blue-600 text-white">
              {signedIn === "student" ? "Student" : "Security"}
            </Text>
            <TouchableOpacity
              className="ml-2 px-2 py-1 rounded bg-gray-300 active:opacity-80"
              onPress={handleSignOut}
            >
              <Text className="text-xs text-gray-800 font-semibold">Sign Out</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Alert if not signed in */}
        {!signedIn && (
          <View className="flex-row justify-center mb-4">
            <Text className="text-xs px-3 py-1 rounded-full bg-yellow-200 text-yellow-800">
              Please sign in to access all features.
            </Text>
          </View>
        )}
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.box}>
          <WebView
            style={styles.webview}
            source={{ uri: "https://forms.office.com/Pages/ResponsePage.aspx?id=z18LfsQS_06WtkZk8l3H2gpFnYadRo9OgwCYHC05XnBUQkpKUkFYRE40Uko0OEEzVjlSWDgxN1VDUi4u&fbclid=PAZXh0bgNhZW0CMTEAAadDOQyoN1fU3V_hPZr994qSQ7LnbIg5_EjgQiEYpmwiHSZuF0ij__kFp9ue5w_aem_RIiWs-76K7Ev__-CxDmWkQ" }}
          />
        </View>
      </ScrollView>
    </View>   
        {/* Title Section */}
        <Text className="text-3xl font-extrabold text-red-700 mb-1">
          🚨 In an Emergency?
        </Text>
        <Text className={`text-base text-center ${textColor} mb-7`}>
          If you are in an emergency, call the emergency contacts now.
        </Text>
        
        {/* Emergency Buttons */}
        <View className="w-full mb-10">
          <TouchableOpacity
            onPress={() => MakePhoneCall("999")}
            className="bg-red-600 rounded-2xl py-4 shadow-lg active:opacity-80 mb-4"
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
        <View className={`w-full ${cardColor} rounded-2xl shadow-lg p-5 mt-4`}>
          <Text className={`text-lg font-semibold ${textColor} mb-4`}>
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
        {/* Friends List navigation button */}
        <Link href="/tabs/FriendsList" asChild>
          <TouchableOpacity className="items-center active:opacity-80">
            <UserPlus size={24} color="#2563eb" />
            <Text
              className={`text-xs mt-1 ${
                darkMode ? "text-white font-bold" : "text-gray-700"
              }`}
            >
              Friends
            </Text>
          </TouchableOpacity>
        </Link>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#f2f2f2",
  },
  scroll: {
    alignItems: "center",
    padding: 16,
  },
  box: {
    width: "90%",
    height: 300, // small fixed box
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  webview: {
    flex: 1, // fill the box only
  },
});

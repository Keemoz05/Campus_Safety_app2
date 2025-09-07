import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../AppContext";

export default function SignIn() {
  const { darkMode, signIn } = useAppContext();
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-900";
  const inputColor = darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900";
  const router = useRouter();

  const [role, setRole] = useState<"student" | "security">("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Dummy authentication logic
    if (username && password) {
      signIn(role);
      if (role === "student") {
        router.replace("/"); // Go to home
      } else {
        router.replace("/tabs/ReportATip"); // Example: security goes to Report page
      }
    } else {
      Alert.alert("Error", "Please enter username and password.");
    }
  };

  return (
    <View className={`flex-1 items-center justify-center ${bgColor}`}>
      <View className={`w-11/12 max-w-md rounded-2xl shadow-lg p-8 ${cardColor}`}>
        <Text className={`text-2xl font-bold mb-6 text-center ${textColor}`}>Sign In</Text>
        <View className="flex-row justify-center mb-6">
          <TouchableOpacity
            className={`px-4 py-2 rounded-l-xl ${role === "student" ? "bg-blue-600" : "bg-gray-300"}`}
            onPress={() => setRole("student")}
          >
            <Text className={`font-semibold ${role === "student" ? "text-white" : "text-gray-700"}`}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`px-4 py-2 rounded-r-xl ${role === "security" ? "bg-red-600" : "bg-gray-300"}`}
            onPress={() => setRole("security")}
          >
            <Text className={`font-semibold ${role === "security" ? "text-white" : "text-gray-700"}`}>Security</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          className={`mb-4 px-4 py-3 rounded-lg ${inputColor}`}
          placeholder="Username"
          placeholderTextColor={darkMode ? "#d1d5db" : "#6b7280"}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          className={`mb-6 px-4 py-3 rounded-lg ${inputColor}`}
          placeholder="Password"
          placeholderTextColor={darkMode ? "#d1d5db" : "#6b7280"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-blue-600 rounded-xl py-3 active:opacity-80"
          onPress={handleSignIn}
        >
          <Text className="text-white text-lg font-bold text-center">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

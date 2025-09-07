import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../AppContext";

export default function FriendsList() {
  const { darkMode } = useAppContext();
  const router = useRouter();
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardColor = darkMode ? "bg-gray-800" : "bg-white";
  const textColor = darkMode ? "text-gray-100" : "text-gray-900";
  const inputBg = darkMode ? "bg-gray-700" : "bg-gray-100";
  const inputText = darkMode ? "text-gray-100" : "text-gray-900";

  // Local state for friends list
  const [friends, setFriends] = useState<string[]>(["Alice", "Bob"]);
  const [newFriend, setNewFriend] = useState("");

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
    <View className={`flex-1 ${bgColor}`}>
      <View className={`pt-12 pb-5 bg-blue-600 items-center border-b border-gray-200 shadow`}>
        <Text className="text-2xl font-bold text-white tracking-wider">Friends List</Text>
      </View>
      <View className={`flex-1 p-6`}>
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
            onPress={() => router.back()}
          >
            <Text className="text-gray-800 font-semibold">Back</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page2() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-2xl mb-4">FriendWalk</Text>
      <Button title="← Back" onPress={() => router.back()} />
    </View>
  );
}

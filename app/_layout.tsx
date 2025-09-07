import { Stack } from "expo-router";
import { AppProvider, useAppContext } from "../AppContext";
import { BottomNavBar } from "./components/BottomNavBar";
import { View, StatusBar } from "react-native";

function AppLayout() {
  const { darkMode } = useAppContext();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <BottomNavBar />
    </View>
  )
}

export default function Layout() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}

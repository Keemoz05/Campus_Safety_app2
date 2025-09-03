import { Stack } from "expo-router";
import { DarkModeProvider } from "../DarkModeContext";

export default function Layout() {
  return (
    <DarkModeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </DarkModeProvider>
  );
}

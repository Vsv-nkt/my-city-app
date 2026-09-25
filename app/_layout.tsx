import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Головна" }} />
      <Stack.Screen name="city" options={{ title: "Моє місто" }} />
      <Stack.Screen name="about" options={{ title: "Про мене" }} />
    </Stack>
  );
}

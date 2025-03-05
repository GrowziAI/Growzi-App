import { theme } from "@/globals";
import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import { View } from 'react-native';

const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <Stack />
      </View>
    </ThemeProvider>
  );
};

export default RootLayout;
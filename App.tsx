import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home";
import { theme } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : null}
    </ThemeProvider>
  );
}

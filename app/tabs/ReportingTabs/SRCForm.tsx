import Constants from "expo-constants";
import { ScrollView, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import BackButton from "../../../components/BackButton";

export default function App() {
  return (
    <View style={styles.screen}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.box}>
          <WebView
            style={styles.webview}
            source={{ uri: "https://forms.office.com/Pages/ResponsePage.aspx?id=z18LfsQS_06WtkZk8l3H2gpFnYadRo9OgwCYHC05XnBUQkpKUkFYRE40Uko0OEEzVjlSWDgxN1VDUi4u&fbclid=PAZXh0bgNhZW0CMTEAAadDOQyoN1fU3V_hPZr994qSQ7LnbIg5_EjgQiEYpmwiHSZuF0ij__kFp9ue5w_aem_RIiWs-76K7Ev__-CxDmWkQ" }}
          />
        </View>
      </ScrollView>
    </View>
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

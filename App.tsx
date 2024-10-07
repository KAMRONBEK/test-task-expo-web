import * as Clipboard from "expo-clipboard";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [color, setColor] = useState("#FFF");

  const handleBackgroundPress = () => {
    const generatedColor = `#${Math.random()
      .toString(16)
      .slice(-6)
      .toUpperCase()}`;

    setColor(generatedColor);
  };

  const handleCopyColor = async () => {
    await Clipboard.setStringAsync(color).then(() => {
      toast(`Successfully copied color: ${color}`);
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleBackgroundPress}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={styles.greetingText}>Hello there</Text>

      <View style={styles.copyContainer}>
        <TouchableOpacity style={styles.hexContainer} onPress={handleCopyColor}>
          <Text style={styles.hexText}>{color}</Text>
        </TouchableOpacity>
        <Text style={styles.copyText}>Click to copy</Text>
      </View>

      <ToastContainer autoClose={1000} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  greetingText: {
    fontSize: 32,
    fontWeight: "bold",
  },

  copyContainer: {
    width: "10%",
    marginTop: 15,
  },

  hexContainer: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
    alignItems: "center",
  },

  hexText: {
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "italic",
  },

  copyText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },
});

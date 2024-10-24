import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CalculateSolution = ({ calculateSolution }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => calculateSolution()}
      >
        <Text style={styles.text}>Calcular Solucion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalculateSolution;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#0064ff",
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});

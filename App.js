import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import CalculateSolution from "./src/components/CalculateSolution";
import EcuationData from "./src/components/EcuationData";
import Solution from "./src/components/Solution";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [discriminante, setDiscriminante] = useState(0);
  const [hasSolution, setHasSolution] = useState(true);

  const data = { a, b, c, setA, setB, setC, x1, x2 };

  const calculateSolution = () => {
    setDiscriminante(Math.pow(b, 2) - 4 * a * c);
    setHasSolution(discriminante >= 0);
    setX1(Number(-b + Math.sqrt(discriminante) / (2 * a)).toFixed(2));
    setX2(Number(-b - Math.sqrt(discriminante) / (2 * a)).toFixed(2));
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Solucion de Ecuaciones Cuadraticas</Text>
        <EcuationData data={data} />
      </View>
      <View style={styles.contentContainer}>
        {hasSolution ? (
          <Solution data={data} />
        ) : (
          <Text>No tiene solucion</Text>
        )}
      </View>
      <View style={styles.footerContainer}>
        <CalculateSolution calculateSolution={calculateSolution} />
      </View>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 2,
    backgroundColor: "#4389f5",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  contentContainer: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "#8fb8f8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});

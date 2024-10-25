import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import CalculateSolution from "./src/components/CalculateSolution";
import EcuationData from "./src/components/EcuationData";
import Solution from "./src/components/Solution";
import { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [hasSolution, setHasSolution] = useState(true);

  const data = { a, b, c, setA, setB, setC, x1, x2 };

  const calculateSolution = () => {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
  
    const hasSol = discriminant >= 0;
    setHasSolution(hasSol);
  
    if (hasSol) {
      const sqrtDiscriminant = Math.sqrt(discriminant);
      const denominator = 2 * a;
  
      const root1 = (-b + sqrtDiscriminant) / denominator;
      const root2 = (-b - sqrtDiscriminant) / denominator;
  
      setX1(Number(root1).toFixed(2));
      setX2(Number(root2).toFixed(2));
    }
  };

  useEffect(() => {setHasSolution(true)}, [a, b, c]);
  useEffect(() => {setX1(0), setX2(0)}, [a, b, c]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Solucion de Ecuaciones Cuadraticas</Text>
        <EcuationData data={data} />
      </View>
      <View style={styles.contentContainer}>
        {hasSolution ? (
          <Solution data={data} />
        ) : (
          <Text style={styles.errorText}>No tiene solucion</Text>
        )}
      </View>
      <View style={styles.footerContainer}>
        <CalculateSolution calculateSolution={calculateSolution} />
      </View>
      <StatusBar hidden />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1ecfe",
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
  errorText: {
    fontSize: 22,
    color: "red",
  }
});

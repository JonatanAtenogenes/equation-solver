import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Solution = ({ data }) => {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.text}>Valor de a: </Text>
        <Text style={styles.data}>{data.a}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Valor de b: </Text>
        <Text style={styles.data}>{data.b}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Valor de c: </Text>
        <Text style={styles.data}>{data.c}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Valor de x1: </Text>
        <Text style={styles.data}>{data.x1}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Valor de x2: </Text>
        <Text style={styles.data}>{data.x2}</Text>
      </View>
    </>
  );
};

export default Solution;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 25,
  },
  data: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

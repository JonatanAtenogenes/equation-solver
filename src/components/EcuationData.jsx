import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const EcuationData = ({ data }) => {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.text}>Ingresa el valor de a: </Text>
        <TextInput
          editable
          keyboardType="numeric"
          style={styles.input}
          value={data.a}
          onChangeText={(value) => data.setA(value)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Ingresa el valor de b: </Text>
        <TextInput
          editable
          keyboardType="numeric"
          style={styles.input}
          value={data.b}
          onChangeText={(value) => data.setB(value)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Ingresa el valor de c: </Text>
        <TextInput
          editable
          keyboardType="numeric"
          style={styles.input}
          value={data.c}
          onChangeText={(value) => data.setC(value)}
        />
      </View>
    </>
  );
};

export default EcuationData;

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    borderWidth: 2,
    height: 30,
    width: "25%",
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: "#fff"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

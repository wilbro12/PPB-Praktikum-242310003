import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormPage() {
  const [nama, setNama] = useState("");
  const [nip, setNip] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [institusi, setInstitusi] = useState("");

  return (
    <View style={styles.container}>
     
    <Image
  source={require("../assets/images/user5.jpeg")}
  style={styles.image}
/>

      <Text>Nama:</Text>
      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={setNama}
        placeholder="Masukkan nama"
      />

      <Text>NIP:</Text>
      <TextInput
        style={styles.input}
        value={nip}
        onChangeText={setNip}
        placeholder="Masukkan NIP"
      />

      <Text>Jabatan:</Text>
      <TextInput
        style={styles.input}
        value={jabatan}
        onChangeText={setJabatan}
        placeholder="Masukkan jabatan"
      />

      <Text>Institusi:</Text>
      <TextInput
        style={styles.input}
        value={institusi}
        onChangeText={setInstitusi}
        placeholder="Masukkan institusi"
      />

      <View style={{ marginTop: 20 }}>
        <Text>Nama: {nama}</Text>
        <Text>NIP: {nip}</Text>
        <Text>Jabatan: {jabatan}</Text>
        <Text>Institusi: {institusi}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
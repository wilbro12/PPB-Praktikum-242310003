import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function praktikum_2() {
  
  const user = {
    nama: "Wiliam",
    berat: 55, // kg
    tinggi: 170, // cm
  };

  
  const makanan = [
    { nama: "Nasi Goreng", kalori: 500 },
    { nama: "Ayam Goreng", kalori: 300 },
    { nama: "Teh Manis", kalori: 120 },
  ];

  
  let totalKalori = 0;
  for (let i = 0; i < makanan.length; i++) {
    totalKalori += makanan[i].kalori;
  }

  
  const tinggiMeter = user.tinggi / 100;

 
  const bmi = user.berat / (tinggiMeter * tinggiMeter);

 
  let statusBMI = "";
  if (bmi < 18.5) {
    statusBMI = "Kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statusBMI = "Ideal";
  } else {
    statusBMI = "Berlebih";
  }

  
  let statusKalori = "";
  if (totalKalori < 2000) {
    statusKalori = "Kurang";
  } else if (totalKalori >= 2000 && totalKalori <= 2500) {
    statusKalori = "Cukup";
  } else {
    statusKalori = "Berlebih";
  }

  
  let kesimpulan = "";
  if (statusBMI === "Ideal" && statusKalori === "Cukup") {
    kesimpulan = "Kondisi tubuh dan pola makan sudah seimbang 👍";
  } else {
    kesimpulan = "Perlu perbaikan pola makan atau gaya hidup ⚠️";
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Evaluasi BMI & Kalori</Text>

      
      <Text style={styles.section}>Data Diri</Text>
      <Text>Nama: {user.nama}</Text>
      <Text>Berat: {user.berat} kg</Text>
      <Text>Tinggi: {user.tinggi} cm</Text>

      
      <Text style={styles.section}>Makanan Harian</Text>
      {makanan.map((item, index) => (
        <Text key={index}>
          {item.nama} - {item.kalori} kalori
        </Text>
      ))}

      
      <Text style={styles.section}>Hasil</Text>
      <Text>Total Kalori: {totalKalori}</Text>
      <Text>BMI: {bmi.toFixed(2)}</Text>
      <Text>Status BMI: {statusBMI}</Text>
      <Text>Status Kalori: {statusKalori}</Text>

      <Text style={styles.section}>Kesimpulan</Text>
      <Text>{kesimpulan}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    marginTop: 15,
    fontWeight: "bold",
  },
});
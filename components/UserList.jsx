import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { users } from "../constants/list_users";

export default function UserList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List User</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.title}</Text>
            <Text>{item.department}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: {
    flex: 1,
    backgroundColor: "#d9f3f8",
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  image: { width: 80, height: 80, borderRadius: 50 },
  name: { fontWeight: "bold" },
});
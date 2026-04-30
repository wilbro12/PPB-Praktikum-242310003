import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { users } from "../constants/list_users";

export default function UserProfile() {
  const user = users[0]; 

  return (
    <View style={styles.container}>
      <Image source={user.image} style={styles.profileImg} />

      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.title}</Text>
      <Text>{user.department}</Text>
      <Text>{user.email}</Text>

      <Text style={styles.portTitle}>Portfolio</Text>

      <FlatList
        data={user.portfolio}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.portItem}>
            <Image source={item.image} style={styles.portImg} />
            <Text>{item.name}</Text>
            <Text>{item.code}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  profileImg: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 20, fontWeight: "bold" },
  portTitle: { marginTop: 20, fontWeight: "bold" },
  portItem: { marginTop: 10 },
  portImg: { width: 60, height: 60 },
});
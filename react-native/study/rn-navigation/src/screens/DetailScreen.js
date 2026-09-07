import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function DetailScreen({ route }) {
  const { id, done, todo } = route.params;
  console.log(id, done, todo);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>설정설정홤녀화면</Text>
      </View>
      <View style={styles.main}>
        <Text>
          {id}
          {done}
          {todo}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet, Text, Pressable, View } from "react-native";

function Card(item) {
  return (
    <View style={styles.card}>
      <Pressable
        style={styles.cardClick}
        android_ripple={{ color: "#ccc" }}
      >
        <Text style={styles.text}>{item.item.quoteAuthor}</Text>
        <Text>{item.item.quoteText}</Text>
      </Pressable>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: "white",
  },
  cardClick: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: "black",
  },
});

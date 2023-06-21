import { StyleSheet, View, ActivityIndicator, Text } from "react-native";

function LoadingFooter({isLoading, isError}) {
  return (
    <View style={styles.loading}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text style={styles.text}>Something went wrong</Text>}
    </View>
  );
}

export default LoadingFooter;

const styles = StyleSheet.create({
  loading: {
    paddingVertical: 16,
  },
  text: {
    textAlign: "center",
  }
});

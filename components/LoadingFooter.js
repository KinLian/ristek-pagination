import { StyleSheet, View, ActivityIndicator } from "react-native";

function LoadingFooter(isLoading) {
  return (
    <View style={styles.loading}>{isLoading && <ActivityIndicator />}</View>
  );
}

export default LoadingFooter;

const styles = StyleSheet.create({
  loading: {
    paddingVertical: 16,
  },
});

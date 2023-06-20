import { StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";

import useGetQuotes from "../hooks/api/useGetQuotes";
import { FlatList } from "react-native";
import Card from "../components/Card";
import { LoadingFooter } from "../components";

function HomeScreen() {
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function fetchMoreQuotes() {
    if (isLoading) return;

    setIsLoading(true);

    useGetQuotes(currentPage + 1, 15)
      .then((newQuotes) => {
        setQuotes((prevData) => [...prevData, ...newQuotes]);
        setCurrentPage(currentPage + 1);
      })
      .then(() => setIsLoading(false));
  }

  useEffect(() => {
    useGetQuotes(currentPage, 15).then((data) => setQuotes(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={quotes}
        renderItem={Card}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={
          <Text style={styles.title}>List of Quotes !!!</Text>
        }
        ListFooterComponent={<LoadingFooter isLoading={isLoading} />}
        onEndReached={fetchMoreQuotes}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    paddingTop: 32,
    marginHorizontal: 16,
    fontWeight: 700,
    fontSize: 36,
  },
});

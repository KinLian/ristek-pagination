import { StyleSheet, Text, ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";

import useGetQuotes from "../hooks/api/useGetQuotes";
import { FlatList } from "react-native";
import Card from "../components/Card";
import { LoadingFooter } from "../components";

function HomeScreen() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false)

  function fetchMoreQuotes() {
    if (isLoading) return;

    setIsLoading(true);
    setIsError(false)

    useGetQuotes(currentPage + 1, 15)
      .then((newQuotes) => {
        setQuotes((prevData) => [...prevData, ...newQuotes]);
        setCurrentPage(currentPage + 1);
      })
      .then(() => setIsLoading(false))
      .catch(() => {
        setIsError(true)
        setIsLoading(false)
      });
  }

  useEffect(() => {
    useGetQuotes(currentPage, 15)
      .then((data) => setQuotes(data))
      .then(() => setIsInitialLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isInitialLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={quotes}
          renderItem={Card}
          keyExtractor={(item) => item._id}
          ListHeaderComponent={
            <Text style={styles.title}>List of Quotes !!!</Text>
          }
          ListFooterComponent={<LoadingFooter isLoading={isLoading} isError={isError} />}
          onEndReached={!isError && fetchMoreQuotes}
          onEndReachedThreshold={0.2}
        />
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

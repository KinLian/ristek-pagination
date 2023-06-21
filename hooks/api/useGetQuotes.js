// https://pprathameshmore.github.io/QuoteGarden/

async function useGetQuotes(page, limit) {
  try {
    const response = await fetch(
      `https://quote-garden.onrender.com/api/v3/quotes?page=${page}&limit=${limit}`
    ).then((res) => res.json());
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default useGetQuotes;

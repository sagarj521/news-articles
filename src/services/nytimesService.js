const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;
const BASE_URL = process.env.REACT_APP_NYTIMES_BASE_URL;

export const fetchMostPopularArticles = async (period = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/svc/mostpopular/v2/viewed/${period}.json?api-key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

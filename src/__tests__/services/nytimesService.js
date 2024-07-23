import { fetchMostPopularArticles } from "../../services/nytimesService";

const API_KEY = process.env.REACT_APP_NYTIMES_API_KEY;
const BASE_URL = process.env.REACT_APP_NYTIMES_BASE_URL;

const mockFetch = (status, data) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: status === 200,
      status,
      json: () => Promise.resolve(data),
    })
  );
};

const mockFetchError = () => {
  global.fetch = jest.fn(() => Promise.reject(new Error("Network Error")));
};

describe("fetchMostPopularArticles", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches and returns the most popular articles", async () => {
    const mockData = {
      results: [
        { id: 1, title: "Article 1", abstract: "Abstract 1" },
        { id: 2, title: "Article 2", abstract: "Abstract 2" },
      ],
    };
    mockFetch(200, mockData);

    const articles = await fetchMostPopularArticles();
    expect(articles).toEqual(mockData.results);
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
    );
  });

  it("throws an error when the network response is not ok", async () => {
    mockFetch(500, {});

    await expect(fetchMostPopularArticles()).rejects.toThrow(
      "Network response was not ok"
    );
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
    );
  });

  it("throws an error when there is a network error", async () => {
    mockFetchError();

    await expect(fetchMostPopularArticles()).rejects.toThrow("Network Error");
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`
    );
  });
});

//  MOCK fetch BEFORE loading the module under test
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: "success" })
  })
);

// THEN require the module under test
const { fetchData, url } = require("./api.cjs.js");

describe("API fetchData", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetchData calls fetch with full URL and appid", async () => {
    const callback = jest.fn();
    const testURL = "https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&units=metric";

    await fetchData(testURL, callback);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("appid="));
    expect(callback).toHaveBeenCalledWith({ test: "success" });
  });
});

describe("URL builder", () => {
  test("geo returns valid query string", () => {
    const str = url.geo("London");
    expect(str).toContain("q=London");
  });

  test("currentWeather returns valid string", () => {
    const str = url.currentWeather("lat=0", "lon=0");
    expect(str).toContain("weather?");
  });
});

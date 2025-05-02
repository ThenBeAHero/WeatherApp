/**
 * @jest-environment jsdom
 */

const { updateWeather, error404, setupSearchIntegration } = require("./app.cjs.js");
const { fetchData } = require("./api.cjs.js");

// Mock fetchData to simulate API calls
jest.mock("./api.cjs.js", () => ({
  fetchData: jest.fn(),
  url: {
    currentWeather: jest.fn(() => "mockCurrentWeather"),
    forecast: jest.fn(() => "mockForecast"),
    airPollution: jest.fn(() => "mockAirPollution"),
    reverseGeo: jest.fn(() => "mockReverseGeo"),
    geo: jest.fn(() => "mockGeo")
  }
}));

// Mock module functions used for rendering
jest.mock("../js/module.js", () => ({
  getDate: () => "Monday 1, Jan",
  getTime: () => "6:00 AM",
  getHours: () => "6 AM",
  mps_to_kmh: () => 10,
  monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  weekDayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  aqiText: {
    1: { level: "Good", message: "Clean air" }
  }
}));

describe("Integration: updateWeather", () => {
  beforeEach(() => {
    // Set up DOM elements
    document.body.innerHTML = `
      <input data-search-field />
      <div data-search-result></div>
      <article data-container></article>
      <div data-loading></div>
      <div data-error-content></div>
      <section data-current-weather></section>
      <section data-highlights></section>
      <section data-hourly-forecast></section>
      <section data-5-day-forecast></section>
      <button data-current-location-btn></button>
    `;

    setupSearchIntegration();

    // Mock fetchData responses
    fetchData.mockImplementation((url, callback) => {
      if (url.includes("currentWeather")) {
        callback({
          weather: [{ description: "clear", icon: "01d" }],
          dt: 1682918400,
          sys: { sunrise: 1682892000, sunset: 1682938800 },
          main: { temp: 20, feels_like: 18, pressure: 1012, humidity: 60 },
          visibility: 10000,
          timezone: 0
        });
      } else if (url.includes("air_pollution")) {
        callback({ list: [{ main: { aqi: 1 }, components: { no2: 5, o3: 10, so2: 2, pm2_5: 12 } }] });
      } else if (url.includes("forecast")) {
        callback({
          city: { timezone: 0 },
          list: Array(40).fill({
            dt: 1682947200,
            main: { temp: 22, temp_max: 24 },
            weather: [{ icon: "02d", description: "partly cloudy" }],
            wind: { speed: 2, deg: 180 },
            dt_txt: "2023-05-01 12:00:00"
          })
        });
      } else if (url.includes("reverse")) {
        callback([{ name: "London", country: "GB" }]);
      }
    });
  });

  test("should populate weather sections on updateWeather call", () => {
    updateWeather("lat=0", "lon=0");

    expect(fetchData).toHaveBeenCalled();
    expect(document.querySelector("[data-loading]").style.display).toBe("grid");
  });
});

describe("Integration: error404", () => {
  test("should display error content", () => {
    document.body.innerHTML = `<section data-error-content style="display:none;"></section>`;
    error404();
    expect(document.querySelector("[data-error-content]").style.display).toBe("flex");
  });
});

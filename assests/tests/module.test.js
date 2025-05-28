const {
  getDate,
  getTime,
  getHours,
  mps_to_kmh,
  weekDayNames,
  monthNames
} = require("../tests/module.cjs");

describe("Utility Functions", () => {
  test("getDate returns correct format", () => {
    const result = getDate(1682918400, 0); // per shembull Friday 2, May
    expect(typeof result).toBe("string");
    expect(result).toMatch(/\w+ \d{1,2}, \w{3}/);
  });

  test("getTime returns correct format", () => {
    const result = getTime(1682947200, 0); // per shembull 4:30 PM
    expect(result).toMatch(/\d{1,2}:\d{1,2} (AM|PM)/);
  });

  test("getHours returns correct format", () => {
    const result = getHours(1682947200, 0); // per shembull 3 AM
    expect(result).toMatch(/\d{1,2} (AM|PM)/);
  });

  test("mps_to_kmh converts correctly", () => {
    expect(mps_to_kmh(1)).toBeCloseTo(3.6);
  });

  test("weekDayNames has 7 items", () => {
    expect(weekDayNames).toHaveLength(7);
  });

  test("monthNames has 12 items", () => {
    expect(monthNames).toHaveLength(12);
  });
});

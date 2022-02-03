import { formatTime, msShouldStartFrom } from "./formatTime";

describe("format time function cases", () => {
  it("should throw error when called empty", () => {
    try {
      formatTime();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("ms argument should be > 0");
    }
  });

  it("should return 15:30", () => {
    const test = formatTime(1000 * 60 * 15 + 1000 * 30);
    expect(test).toBe("15:30");
  });

  it("should return 01:09", () => {
    const test = formatTime(1000 * 60 + 1000 * 9);
    expect(test).toBe("01:09");
  });

  it("should return 10:15:30", () => {
    const test = formatTime(1000 * 60 * 60 * 10 + 1000 * 60 * 15 + 1000 * 30);
    expect(test).toBe("10:15:30");
  });

  it("should return 02:08:21", () => {
    const test = formatTime(1000 * 60 * 60 * 2 + 1000 * 60 * 8 + 1000 * 21);
    expect(test).toBe("02:08:21");
  });
});

describe("ms should be function cases", () => {
  const timeNowToBeInPast = new Date().getTime();
  it("should throw error when called empty", () => {
    try {
      msShouldStartFrom();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("startTime argument should be > 0");
    }
  });

  it("should return 900000", () => {
    const test = msShouldStartFrom(timeNowToBeInPast - 900000);

    expect(test).toBeGreaterThanOrEqual(900000);
    expect(test).not.toBeLessThan(900000);
  });
  it("should return <= 0", () => {
    const test = msShouldStartFrom(timeNowToBeInPast);
    expect(test).toBeGreaterThanOrEqual(0);
    expect(test).not.toBeLessThan(0);
  });
  it("should return < 0", () => {
    const test = msShouldStartFrom(timeNowToBeInPast + 1000);
    expect(test).not.toBeGreaterThan(0);
    expect(test).toBeLessThanOrEqual(0);
  });
});

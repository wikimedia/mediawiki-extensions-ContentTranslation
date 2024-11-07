import { timeago, daysLeftFromNow } from "@/utils/dateHelper";

describe("Date Helper: timeago test", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    const testDate = new Date("2023-06-10T12:50:00.000Z");
    jest.setSystemTime(testDate.getTime());
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should compute day difference properly", () => {
    const timeStamp = "20230605104500";
    const timeagoObject = timeago(timeStamp);
    expect(timeagoObject).toStrictEqual({ postfix: "days", value: 5 });
  });

  it("should compute month difference properly", () => {
    const timeStamp = "20230510104500";
    const timeagoObject = timeago(timeStamp);
    expect(timeagoObject).toStrictEqual({ postfix: "months", value: 1 });
  });

  it("should compute year difference properly", () => {
    const timeStamp = "20220620104500";
    const timeagoObject = timeago(timeStamp);
    expect(timeagoObject).toStrictEqual({ postfix: "years", value: 1 });
  });
});

describe("Date Helper: daysLeftFromNow test", () => {
  it("should return a positive number for a future date", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10); // 10 days in the future
    const futureDateString = futureDate.toISOString().split("T")[0];

    const result = daysLeftFromNow(futureDateString);
    expect(result).toBe(10); // Expect exactly 10 days left
  });

  it("should return 0 if the target date is today", () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in "yyyy-mm-dd" format

    const result = daysLeftFromNow(today);
    // "toBe" calls `Object.is` to compare values, which yields false for "+0" and "-0"
    // use strict comparison instead
    expect(result === 0).toBe(true); // Expect 0 days left
  });

  it("should return 0 for a past date", () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 5); // 5 days in the past
    const pastDateString = pastDate.toISOString().split("T")[0];

    const result = daysLeftFromNow(pastDateString);
    expect(result).toBe(0);
  });
});

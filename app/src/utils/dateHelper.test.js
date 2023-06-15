import { timeago } from "@/utils/dateHelper";

describe("debounce test", () => {
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

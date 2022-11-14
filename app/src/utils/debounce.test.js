import debounce from "./debounce";

describe("debounce test", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it("should work properly", () => {
    const callback = jest.fn(() => {});
    const debounced = debounce(callback, 500);
    debounced(1);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    debounced(2);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(499);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should call the debounced method with the proper arguments", () => {
    const callback = jest.fn(() => {});
    const debounced = debounce(callback, 500);
    debounced(47);
    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(47);
  });

  it("should trigger the callback on the leading edge when 'immediate' is true with lead", () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 500, true);
    expect(callback).not.toHaveBeenCalled();
    debounced();
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(100);
    debounced();
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
    debounced();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

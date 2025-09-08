import { bytesToMinutes } from "./translationTimeEstimator";

describe("test translationTimeEstimator", () => {
  describe("bytesToMinutes", () => {
    it("converts bytes to reading minutes correctly", () => {
      expect(bytesToMinutes(1000)).toBe(14); // 1000 / 5 / 15 = 13.33 → 14 minutes
      expect(bytesToMinutes(6000)).toBe(80); // 6000 / 5 / 15 = 80 minutes
      expect(bytesToMinutes(30000)).toBe(400); // 6000 / 5 / 15 = 80 minutes
      expect(bytesToMinutes(0)).toBe(0);
    });
  });
});

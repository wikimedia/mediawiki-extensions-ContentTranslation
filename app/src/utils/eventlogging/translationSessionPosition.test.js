import {
  setTranslationSessionPosition,
  getTranslationSessionPosition,
} from "./translationSessionPosition";

describe("translation session position test", () => {
  it("should get and set the translation session position properly", () => {
    let position = getTranslationSessionPosition();
    expect(position).toBe(0);

    setTranslationSessionPosition();
    position = getTranslationSessionPosition();
    expect(position).toBe(1);

    setTranslationSessionPosition();
    position = getTranslationSessionPosition();
    expect(position).toBe(2);
  });
});

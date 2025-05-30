import { nextSessionPosition } from "./translationSessionPosition";

describe("translation session position test", () => {
  it("should auto-increment session position starting from 0", () => {
    let position = nextSessionPosition();
    expect(position).toBe(0);

    position = nextSessionPosition();
    expect(position).toBe(1);

    position = nextSessionPosition();
    expect(position).toBe(2);
  });
});

import Page from "./page";
import PageSection from "../../cx/models/pageSection";
import SubSection from "../../cx/models/subSection";

const createEl = (tag) => {
  const root = document.createElement("section");
  const child = document.createElement(tag);
  root.appendChild(child);

  return root;
};

describe("test Page model", () => {
  it("test getSectionNumberByTitle method", () => {
    const sections = [
      new PageSection({
        id: 1,
        title: "Test title 1",
        subSections: [
          new SubSection({ node: createEl("h3"), sentences: [] }),
          new SubSection({ node: createEl("div"), sentences: [] }),
          new SubSection({ node: createEl("div"), sentences: [] }),
        ],
      }),
      new PageSection({
        id: 2,
        title: "Test title 2",
        subSections: [new SubSection({ node: createEl("div"), sentences: [] })],
      }),
      new PageSection({
        id: 3,
        title: "Test title 3",
        subSections: [
          new SubSection({ node: createEl("h3"), sentences: [] }),
          new SubSection({ node: createEl("div"), sentences: [] }),
          new SubSection({ node: createEl("h3"), sentences: [] }),
          new SubSection({ node: createEl("div"), sentences: [] }),
          new SubSection({ node: createEl("h4"), sentences: [] }),
          new SubSection({ node: createEl("div"), sentences: [] }),
          new SubSection({ node: createEl("h4"), sentences: [] }),
          new SubSection({ node: createEl("div"), sentences: [] }),
        ],
      }),
      new PageSection({
        id: 4,
        title: "Test title 4",
        subSections: [
          new SubSection({ node: createEl("div"), sentences: [] }),
          new SubSection({ node: createEl("div"), sentences: [] }),
        ],
      }),
      new PageSection({ id: 4, title: "Appendix1" }),
    ];

    const targetPage = new Page({
      sections,
    });

    expect(targetPage.getSectionNumberByTitle("Not existing")).toEqual(-1);
    expect(targetPage.getSectionNumberByTitle("Test title 1")).toEqual(1);
    expect(targetPage.getSectionNumberByTitle("Test title 2")).toEqual(3);
    expect(targetPage.getSectionNumberByTitle("Test title 3")).toEqual(4);
    expect(targetPage.getSectionNumberByTitle("Test title 4")).toEqual(9);
    expect(targetPage.getSectionNumberByTitle("Appendix1")).toEqual(10);
  });
});

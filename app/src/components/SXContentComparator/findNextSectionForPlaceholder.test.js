import findNextSectionForPlaceholder from "./findNextSectionForPlaceholder";

const TARGET_APPENDIX_SECTION_TITLES = [
  "Bibliografía",
  "Referencias",
  "Citas",
  "Discografía",
  "Filmografía",
  "Notas",
  "Publicaciones",
  "Obra",
  "Enlaces externos",
  "Otras lecturas",
  "Lecturas relacionadas",
  "Véase también",
];

describe("calculateSectionPosition", () => {
  test("with source order mapping", () => {
    const sourceSectionTitles = [
      "Introduction",
      "History",
      "Geography",
      "References",
    ];
    const targetSectionTitles = ["Introducción", "Geografía", "Referencias"];
    const presentSectionMappings = {
      Introduction: "Introducción",
      Geography: "Geografía",
      References: "Referencias",
    };

    const nextSectionTitle = findNextSectionForPlaceholder({
      sourceSectionTitle: "History",
      sourceSectionTitles,
      targetSectionTitles,
      presentSectionMappings,
      targetAppendixSectionTitles: TARGET_APPENDIX_SECTION_TITLES,
    });

    expect(nextSectionTitle).toBe("Geografía");
  });

  test("source order fallback to appendix", () => {
    const sourceSectionTitles = ["Culture", "Random"];
    const targetSectionTitles = ["Introducción", "Geografía", "Referencias"];

    const nextSectionTitle = findNextSectionForPlaceholder({
      sourceSectionTitle: "Culture",
      sourceSectionTitles,
      targetSectionTitles,
      presentSectionMappings: {},
      targetAppendixSectionTitles: TARGET_APPENDIX_SECTION_TITLES,
    });

    expect(nextSectionTitle).toBe("Referencias");
  });

  test("insertion at beginning", () => {
    const sourceSectionTitles = [
      "Introduction",
      "History",
      "Geography",
      "Culture",
      "References",
    ];
    const targetSectionTitles = ["Geografía", "Cultura", "Referencias"];
    const presentSectionMappings = {
      Geography: "Geografía",
      Culture: "Cultura",
      References: "Referencias",
    };

    const nextSectionTitle = findNextSectionForPlaceholder({
      sourceSectionTitle: "History",
      sourceSectionTitles,
      targetSectionTitles,
      presentSectionMappings,
      targetAppendixSectionTitles: TARGET_APPENDIX_SECTION_TITLES,
    });

    expect(nextSectionTitle).toBe("Geografía");
  });

  test("insertion at end (empty appendix titles)", () => {
    const sourceSectionTitles = [
      "Introduction",
      "History",
      "Geography",
      "Culture",
      "References",
    ];
    const targetSectionTitles = ["Introducción", "Historia", "Geografía"];
    const presentSectionMappings = {
      Introduction: "Introducción",
      History: "Historia",
      Geography: "Geografía",
    };

    const nextSectionTitle = findNextSectionForPlaceholder({
      sourceSectionTitle: "Culture",
      sourceSectionTitles,
      targetSectionTitles,
      presentSectionMappings,
      targetAppendixSectionTitles: [],
    });

    expect(nextSectionTitle).toBe(null);
  });
});

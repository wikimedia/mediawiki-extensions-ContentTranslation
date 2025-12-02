import { ref } from "vue";
import useFeaturedCollectionFlag from "./useFeaturedCollectionFlag";
import useFeaturedCollectionFilter from "./useFeaturedCollectionFilter";
import useFeaturedCollectionMembership from "./useFeaturedCollectionMembership";

// Mock the composables
jest.mock("./useFeaturedCollectionFilter");
jest.mock("./useFeaturedCollectionMembership");

describe("useFeaturedCollectionFlag", () => {
  let mockInFeaturedCollection;
  let mockFeaturedCollectionPromise;
  let mockFeaturedCollection;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock useFeaturedCollectionMembership
    mockInFeaturedCollection = jest.fn();
    useFeaturedCollectionMembership.mockReturnValue({
      inFeaturedCollection: mockInFeaturedCollection,
    });

    // Mock useFeaturedCollectionFilter
    mockFeaturedCollectionPromise = ref(Promise.resolve());
    mockFeaturedCollection = ref({ name: "test-collection" });
    useFeaturedCollectionFilter.mockReturnValue({
      featuredCollectionPromise: mockFeaturedCollectionPromise,
      featuredCollection: mockFeaturedCollection,
    });
  });

  it("should return items unchanged when items array is empty", async () => {
    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    const result = await addFeaturedCollectionFlag([], {
      titleGetter: (item) => item.title,
    });

    expect(result).toEqual([]);
    expect(mockInFeaturedCollection).not.toHaveBeenCalled();
  });

  it("should return items unchanged when items is null", async () => {
    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    const result = await addFeaturedCollectionFlag(null, {
      titleGetter: (item) => item.title,
    });

    expect(result).toBeNull();
    expect(mockInFeaturedCollection).not.toHaveBeenCalled();
  });

  it("should enrich items with inFeaturedCollection flags", async () => {
    const items = [
      {
        title: "Article1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
      {
        title: "Article2",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
    ];

    mockInFeaturedCollection.mockResolvedValue({
      Article1: true,
      Article2: false,
    });

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    const result = await addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.title,
    });

    expect(result[0].inFeaturedCollection).toBe(true);
    expect(result[1].inFeaturedCollection).toBe(false);
    expect(mockInFeaturedCollection).toHaveBeenCalledWith(
      null,
      "en",
      ["Article1", "Article2"],
      "test-collection"
    );
  });

  it("should not call API when featured collection is not available", async () => {
    mockFeaturedCollection.value = null;

    const items = [
      {
        title: "Article1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
    ];

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    await addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.title,
    });

    expect(mockInFeaturedCollection).not.toHaveBeenCalled();
    expect(items[0].inFeaturedCollection).toBeUndefined();
  });

  it("should not call API when featured collection has no name", async () => {
    mockFeaturedCollection.value = {};

    const items = [
      {
        title: "Article1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
    ];

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    await addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.title,
    });

    expect(mockInFeaturedCollection).not.toHaveBeenCalled();
    expect(items[0].inFeaturedCollection).toBeUndefined();
  });

  it("should group items by target language and make separate API calls", async () => {
    const items = [
      {
        title: "Article1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
      {
        title: "Article2",
        sourceLanguage: "en",
        targetLanguage: "fr",
      },
    ];

    mockInFeaturedCollection
      .mockResolvedValueOnce({ Article1: true })
      .mockResolvedValueOnce({ Article2: false });

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    await addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.title,
    });

    expect(useFeaturedCollectionFilter).toHaveBeenCalledTimes(2);
    expect(useFeaturedCollectionFilter).toHaveBeenCalledWith("es");
    expect(useFeaturedCollectionFilter).toHaveBeenCalledWith("fr");
    expect(mockInFeaturedCollection).toHaveBeenCalledTimes(2);
  });

  it("should group items by source language within target language groups", async () => {
    const items = [
      {
        title: "Article1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
      {
        title: "Article2",
        sourceLanguage: "fr",
        targetLanguage: "es",
      },
      {
        title: "Article3",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
    ];

    mockInFeaturedCollection
      .mockResolvedValueOnce({
        Article1: true,
        Article3: true,
      })
      .mockResolvedValueOnce({
        Article2: false,
      });

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    await addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.title,
    });

    // Should make 2 API calls: one for "en" source, one for "fr" source
    expect(mockInFeaturedCollection).toHaveBeenCalledTimes(2);
    expect(mockInFeaturedCollection).toHaveBeenCalledWith(
      null,
      "en",
      ["Article1", "Article3"],
      "test-collection"
    );
    expect(mockInFeaturedCollection).toHaveBeenCalledWith(
      null,
      "fr",
      ["Article2"],
      "test-collection"
    );

    expect(items[0].inFeaturedCollection).toBe(true);
    expect(items[1].inFeaturedCollection).toBe(false);
    expect(items[2].inFeaturedCollection).toBe(true);
  });

  it("should use custom titleGetter function", async () => {
    const items = [
      {
        sourceTitle: "SourceArticle1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
      {
        sourceTitle: "SourceArticle2",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
    ];

    mockInFeaturedCollection.mockResolvedValue({
      SourceArticle1: true,
      SourceArticle2: false,
    });

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    await addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.sourceTitle,
    });

    expect(mockInFeaturedCollection).toHaveBeenCalledWith(
      null,
      "en",
      ["SourceArticle1", "SourceArticle2"],
      "test-collection"
    );

    expect(items[0].inFeaturedCollection).toBe(true);
    expect(items[1].inFeaturedCollection).toBe(false);
  });

  it("should handle mixed target and source languages correctly", async () => {
    const items = [
      {
        title: "Article1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
      {
        title: "Article2",
        sourceLanguage: "fr",
        targetLanguage: "es",
      },
      {
        title: "Article3",
        sourceLanguage: "en",
        targetLanguage: "de",
      },
      {
        title: "Article4",
        sourceLanguage: "fr",
        targetLanguage: "de",
      },
    ];

    mockInFeaturedCollection
      .mockResolvedValueOnce({ Article1: true })
      .mockResolvedValueOnce({ Article2: false })
      .mockResolvedValueOnce({ Article3: true })
      .mockResolvedValueOnce({ Article4: false });

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    await addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.title,
    });

    // Should call useFeaturedCollectionFilter twice (for "es" and "de")
    expect(useFeaturedCollectionFilter).toHaveBeenCalledWith("es");
    expect(useFeaturedCollectionFilter).toHaveBeenCalledWith("de");

    // Should make 4 API calls (2 target languages × 2 source languages)
    expect(mockInFeaturedCollection).toHaveBeenCalledTimes(4);

    expect(items[0].inFeaturedCollection).toBe(true);
    expect(items[1].inFeaturedCollection).toBe(false);
    expect(items[2].inFeaturedCollection).toBe(true);
    expect(items[3].inFeaturedCollection).toBe(false);
  });

  it("should wait for featured collection promise before processing", async () => {
    let resolvePromise;
    const delayedPromise = new Promise((resolve) => {
      resolvePromise = resolve;
    });

    mockFeaturedCollectionPromise.value = delayedPromise;

    const items = [
      {
        title: "Article1",
        sourceLanguage: "en",
        targetLanguage: "es",
      },
    ];

    mockInFeaturedCollection.mockResolvedValue({ Article1: true });

    const { addFeaturedCollectionFlag } = useFeaturedCollectionFlag();
    const resultPromise = addFeaturedCollectionFlag(items, {
      titleGetter: (item) => item.title,
    });

    // Should not have called inFeaturedCollection yet
    expect(mockInFeaturedCollection).not.toHaveBeenCalled();

    // Resolve the promise
    resolvePromise();
    await resultPromise;

    // Now it should have been called
    expect(mockInFeaturedCollection).toHaveBeenCalled();
  });
});

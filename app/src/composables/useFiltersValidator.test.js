import useFiltersValidator from "./useFiltersValidator";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";

// Mock page collections for testing
const mockPageCollections = [
  { name: "Featured articles" },
  { name: "Good articles" },
  { name: "Vital articles" },
];

const DEFAULT_FILTER = {
  type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  id: EDITS_SUGGESTION_PROVIDER,
};

describe("useFiltersValidator", () => {
  const providerTestSuites = [
    {
      name: "EDITS provider",
      cases: [
        {
          description: "by id",
          input: { type: null, id: "previous-edits" },
          expected: {
            type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
            id: EDITS_SUGGESTION_PROVIDER,
          },
          shouldError: false,
        },
        {
          description: "with mixed case",
          input: { type: null, id: "Previous-Edits" },
          expected: {
            type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
            id: EDITS_SUGGESTION_PROVIDER,
          },
          shouldError: false,
        },
      ],
    },
    {
      name: "POPULAR provider",
      cases: [
        {
          description: "by id",
          input: { type: null, id: "popular" },
          expected: {
            type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
            id: POPULAR_SUGGESTION_PROVIDER,
          },
          shouldError: false,
        },
        {
          description: "with mixed case",
          input: { type: null, id: "POPULAR" },
          expected: {
            type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
            id: POPULAR_SUGGESTION_PROVIDER,
          },
          shouldError: false,
        },
      ],
    },
    {
      name: "TOPIC provider",
      cases: [
        {
          description: "valid topic",
          input: { type: "topic", id: "Art" },
          expected: { type: TOPIC_SUGGESTION_PROVIDER, id: "art" },
          shouldError: false,
        },
        {
          description: "valid topic with mixed case",
          input: { type: "TOPIC", id: "BIOLOGY" },
          expected: { type: TOPIC_SUGGESTION_PROVIDER, id: "biology" },
          shouldError: false,
        },
        {
          description: "invalid topic",
          input: { type: "topic", id: "InvalidTopic" },
          expected: DEFAULT_FILTER,
          shouldError: true,
        },
        {
          description: "missing topic id",
          input: { type: "topic", id: null },
          expected: DEFAULT_FILTER,
          shouldError: true,
        },
      ],
    },
    {
      name: "REGIONS provider",
      cases: [
        {
          description: "valid region",
          input: { type: "geography", id: "Europe" },
          expected: { type: REGIONS_SUGGESTION_PROVIDER, id: "europe" },
          shouldError: false,
        },
        {
          description: "valid country",
          input: { type: "geography", id: "France" },
          expected: { type: REGIONS_SUGGESTION_PROVIDER, id: "france" },
          shouldError: false,
        },
        {
          description: "with mixed case",
          input: { type: "GEOGRAPHY", id: "JAPAN" },
          expected: { type: REGIONS_SUGGESTION_PROVIDER, id: "japan" },
          shouldError: false,
        },
        {
          description: "invalid region",
          input: { type: "geography", id: "InvalidRegion" },
          expected: DEFAULT_FILTER,
          shouldError: true,
        },
        {
          description: "missing region id",
          input: { type: "geography", id: null },
          expected: DEFAULT_FILTER,
          shouldError: true,
        },
      ],
    },
    {
      name: "SEED provider",
      cases: [
        {
          description: "valid seed",
          input: { type: "seed", id: "any-seed-value" },
          expected: { type: SEED_SUGGESTION_PROVIDER, id: "any-seed-value" },
          shouldError: false,
        },
        {
          description: "with mixed case",
          input: { type: "SEED", id: "SEED-VALUE" },
          expected: { type: SEED_SUGGESTION_PROVIDER, id: "SEED-VALUE" },
          shouldError: false,
        },
      ],
    },
    {
      name: "Default cases",
      cases: [
        {
          description: "unknown type",
          input: { type: "unknown", id: "some-id" },
          expected: DEFAULT_FILTER,
          shouldError: false,
        },
        {
          description: "null type and id",
          input: { type: null, id: null },
          expected: DEFAULT_FILTER,
          shouldError: false,
        },
        {
          description: "empty type and id",
          input: { type: "", id: "" },
          expected: DEFAULT_FILTER,
          shouldError: false,
        },
      ],
    },
  ];

  describe.each(providerTestSuites)("validateFilters - $name", ({ cases }) => {
    test.each(cases)(
      "should validate $description",
      ({ input, expected, shouldError }) => {
        const { validateFilters, filtersValidatorError } =
          useFiltersValidator();

        const result = validateFilters(input);

        expect(result).toEqual(expected);
        expect(filtersValidatorError.value).toBe(shouldError);
      }
    );
  });

  describe("validateFilters - COLLECTIONS provider", () => {
    const collectionCases = [
      {
        description: "valid collection with page collections",
        input: { type: "collections", id: "Featured articles" },
        pageCollections: mockPageCollections,
        expected: {
          type: COLLECTIONS_SUGGESTION_PROVIDER,
          id: "Featured articles",
        },
        shouldError: false,
      },
      {
        description: "collection with mixed case",
        input: { type: "COLLECTIONS", id: "GOOD ARTICLES" },
        pageCollections: mockPageCollections,
        expected: {
          type: COLLECTIONS_SUGGESTION_PROVIDER,
          id: "GOOD ARTICLES",
        },
        shouldError: false,
      },
      {
        description: "any collection when no page collections provided",
        input: { type: "collections", id: "Any Collection" },
        pageCollections: undefined,
        expected: {
          type: COLLECTIONS_SUGGESTION_PROVIDER,
          id: "Any Collection",
        },
        shouldError: false,
      },
      {
        description: "invalid collection with page collections",
        input: { type: "collections", id: "Invalid Collection" },
        pageCollections: mockPageCollections,
        expected: DEFAULT_FILTER,
        shouldError: true,
      },
      {
        description: "collections by id when collections exist",
        input: { type: null, id: "collections" },
        pageCollections: mockPageCollections,
        expected: {
          type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
          id: COLLECTIONS_SUGGESTION_PROVIDER,
        },
        shouldError: false,
      },
      {
        description: "collections id with no collections",
        input: { type: null, id: "collections" },
        pageCollections: [],
        expected: DEFAULT_FILTER,
        shouldError: true,
      },
    ];

    test.each(collectionCases)(
      "should validate $description",
      ({ input, pageCollections, expected, shouldError }) => {
        const { validateFilters, filtersValidatorError } =
          useFiltersValidator();

        const result = validateFilters(input, pageCollections);

        expect(result).toEqual(expected);
        expect(filtersValidatorError.value).toBe(shouldError);
      }
    );
  });

  describe("filtersValidatorError state", () => {
    it("should reset error state on successful validation", () => {
      const { validateFilters, filtersValidatorError } = useFiltersValidator();

      // First, trigger an error
      validateFilters({ type: "topic", id: "InvalidTopic" });
      expect(filtersValidatorError.value).toBe(true);

      // Then, perform successful validation
      validateFilters({ type: "topic", id: "Art" });
      expect(filtersValidatorError.value).toBe(false);
    });

    it("should not set error for default filter fallback", () => {
      const { validateFilters, filtersValidatorError } = useFiltersValidator();

      validateFilters({ type: "unknown", id: "some-id" });

      expect(filtersValidatorError.value).toBe(false);
    });
  });

  describe("isDefaultFilter", () => {
    it("should return true for default filter", () => {
      const { isDefaultFilter } = useFiltersValidator();

      const result = isDefaultFilter(DEFAULT_FILTER);

      expect(result).toBe(true);
    });

    it("should return false for non-default filter", () => {
      const { isDefaultFilter } = useFiltersValidator();

      const result = isDefaultFilter({
        type: TOPIC_SUGGESTION_PROVIDER,
        id: "art",
      });

      expect(result).toBe(false);
    });
  });
});

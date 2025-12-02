import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";
import useFeaturedCollectionMembership from "@/composables/useFeaturedCollectionMembership";

/**
 * Composable for enriching items with featured collection membership data
 * @return {{addFeaturedCollectionFlag: (function(Array, Object): Promise<Array>)}}
 */
const useFeaturedCollectionFlag = () => {
  const { inFeaturedCollection } = useFeaturedCollectionMembership();

  /**
   * @param {string[]} targetLanguages
   * @return {{featuredCollections, featuredCollectionPromises}} featured collections and promises grouped by language
   */
  const getFeaturedCollectionData = (targetLanguages) => {
    // Group featured collection promises and wait for all of them in parallel
    const featuredCollections = {};
    const featuredCollectionPromises = {};

    for (const targetLanguage of targetLanguages) {
      const { featuredCollection, featuredCollectionPromise } =
        useFeaturedCollectionFilter(targetLanguage);

      featuredCollections[targetLanguage] = featuredCollection;
      featuredCollectionPromises[targetLanguage] = featuredCollectionPromise;
    }

    return { featuredCollections, featuredCollectionPromises };
  };

  /**
   * @param {array} items
   * @param {function} languageGetter
   * @returns {object}
   */
  const groupByLanguage = (items, languageGetter) => {
    const itemsGroupedByLanguage = {};

    for (const item of items) {
      const language = languageGetter(item);

      if (!itemsGroupedByLanguage[language]) {
        itemsGroupedByLanguage[language] = [];
      }
      itemsGroupedByLanguage[language].push(item);
    }

    return itemsGroupedByLanguage;
  };

  /**
   * Adds featured collection membership flag to items
   * @param {Translation[]|FavoriteSuggestion[]|SectionSuggestion[]|ArticleSuggestion[]} items - Items to enrich
   * @param {Object} config - Configuration object with getter functions
   * @param {function} config.titleGetter - Function to extract title from item
   * @return {Promise<Array>} The enriched items array
   */
  async function addFeaturedCollectionFlag(items, config) {
    const { titleGetter } = config;

    if (!items || !items.length) {
      return items;
    }

    // Group items by target language
    const itemsGroupedByTargetLanguage = groupByLanguage(
      items,
      (i) => i.targetLanguage
    );

    const targetLanguages = Object.keys(itemsGroupedByTargetLanguage);
    const { featuredCollections, featuredCollectionPromises } =
      getFeaturedCollectionData(targetLanguages);

    await Promise.all(Object.values(featuredCollectionPromises));
    /** @type {{ items, promise }[]} */
    const itemsAndFlagPromises = [];

    // Process each target language
    for (const targetLanguage in itemsGroupedByTargetLanguage) {
      /** @type {Translation[]|FavoriteSuggestion[]|SectionSuggestion[]|ArticleSuggestion[]} */
      const itemsForTargetLanguage =
        itemsGroupedByTargetLanguage[targetLanguage];

      const featuredCollection = featuredCollections[targetLanguage];

      if (!featuredCollection.value?.name) {
        continue;
      }

      // Group items by source language to reduce number of API calls
      const itemsBySourceLanguage = groupByLanguage(
        itemsForTargetLanguage,
        (i) => i.sourceLanguage
      );

      // Check featured collection membership for each source language group
      for (const sourceLanguage in itemsBySourceLanguage) {
        const groupedItems = itemsBySourceLanguage[sourceLanguage];
        const titles = groupedItems.map((item) => titleGetter(item));
        const promise = inFeaturedCollection(
          null,
          sourceLanguage,
          titles,
          featuredCollection.value.name
        );

        itemsAndFlagPromises.push({ promise, items: groupedItems });
      }
    }

    const flagPromises = itemsAndFlagPromises.map(({ promise }) => promise);
    const results = await Promise.all(flagPromises);

    itemsAndFlagPromises.forEach(({ items }, index) => {
      const result = results[index];

      for (const item of items) {
        item.inFeaturedCollection = result[titleGetter(item)];
      }
    });

    return items;
  }

  return {
    addFeaturedCollectionFlag,
  };
};

export default useFeaturedCollectionFlag;

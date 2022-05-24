import MTProviderGroup from "../wiki/mw/models/mtProviderGroup";

/**
 * @param {TranslationUnitPayload} translationUnitPayload
 * @param {string[]} supportedMTProviders
 */
const validateParallelCorporaPayload = (
  translationUnitPayload,
  supportedMTProviders
) => {
  const { content, origin, baseSectionId, subSectionId } =
    translationUnitPayload;

  if (!content) {
    throw new Error(
      "[CX] Content of parallel corpora translation unit is empty"
    );
  }

  const nonUserProviders = supportedMTProviders.filter(
    (provider) => !MTProviderGroup.isUserMTProvider(provider)
  );

  if (
    origin !== "source" &&
    origin !== "user" &&
    !nonUserProviders.includes(origin)
  ) {
    throw new Error("[CX] Invalid origin of parallel corpora translation unit");
  }

  if (
    !baseSectionId ||
    !subSectionId ||
    translationUnitPayload.sectionId !== `${baseSectionId}_${subSectionId}`
  ) {
    throw new Error(
      "[CX] Invalid section id of parallel corpora translation unit"
    );
  }
};

export { validateParallelCorporaPayload };

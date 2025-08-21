"use strict";

/**
 * Find the next mapped target section that follows the given source section.
 * Used to determine where the "new section" placeholder should be inserted in the target
 * article preview, based on source/target section mappings.
 *
 * @param {string} sourceSectionTitle The source section being positioned
 * @param {string[]} sourceSections All source sections in order
 * @param {Object<string,string>} presentMappings Mapping of sourceSectionTitle → targetSectionTitle
 * @return {string|null} target section title before which we should position the placeholder
 */
const findNextMappedSection = (
  sourceSectionTitle,
  sourceSections,
  presentMappings
) => {
  // Find the position of our source section in the source article
  const sourceSectionIndex = sourceSections.indexOf(sourceSectionTitle);

  // Look for the next section in source order that already exists in target
  const mappedTargetSections = sourceSections
    .slice(sourceSectionIndex + 1)
    .map((section) => presentMappings[section])
    .filter(Boolean); // remove undefined/null

  // if no later sections found in target --> no insertion point found
  return mappedTargetSections[0] || null;
};

/**
 * Determines the next section title, before which the "new section" placeholder
 * should be positioned in the target article preview.
 *
 * First tries to preserve source order using mapped sections, then falls back
 * to the first appendix section if no source-based insertion point can be found.
 * If appendix sections are also missing, it returns null.
 *
 * @param {string} sourceSectionTitle
 * @param {string[]} sourceSectionTitles
 * @param {string[]} targetSectionTitles
 * @param {Object<string,string>|null} presentSectionMappings
 * @param {string[]} targetAppendixSectionTitles
 * @return {string|null}
 */
const findNextSectionForPlaceholder = ({
  sourceSectionTitle,
  sourceSectionTitles,
  targetSectionTitles,
  presentSectionMappings,
  targetAppendixSectionTitles,
}) => {
  // Try source-order calculation
  const mappedSection = findNextMappedSection(
    sourceSectionTitle,
    sourceSectionTitles,
    presentSectionMappings
  );

  if (mappedSection !== null) {
    return mappedSection;
  }

  // Fall back to appendix
  const firstAppendixSection = targetSectionTitles.find((t) =>
    targetAppendixSectionTitles.includes(t)
  );

  return firstAppendixSection || null;
};

export default findNextSectionForPlaceholder;

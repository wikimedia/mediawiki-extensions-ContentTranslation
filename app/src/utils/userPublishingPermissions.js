/**
 * Cached result for user publishing permissions
 * @type {boolean|null}
 */
let cachedResult = null;

/**
 * Compute whether current user can publish translations to main namespace
 * @returns {boolean} true if can publish, false if cannot
 */
function computeUserCanPublish() {
  // Get configuration from MediaWiki
  const publishRequirements = mw.config.get(
    "wgContentTranslationPublishRequirements"
  );
  const userGroups = mw.config.get("wgUserGroups") || [];

  if (!publishRequirements || !publishRequirements.userGroups) {
    // If no requirements configured, allow all users
    return true;
  }

  const requiredGroups = publishRequirements.userGroups;

  // If "*" is in required groups, allow all users
  if (requiredGroups.includes("*")) {
    return true;
  }

  // Check if user has any of the required groups
  return requiredGroups.some((group) => userGroups.includes(group));
}

/**
 * Check if current user can publish translations to main namespace
 * @returns {boolean} true if can publish, false if cannot
 */
export default function canUserPublish() {
  if (cachedResult === null) {
    cachedResult = computeUserCanPublish();
  }

  return cachedResult;
}

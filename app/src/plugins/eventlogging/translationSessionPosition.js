const POSITION_LOCAL_STORAGE_PREFIX = "cx-translation-session-position-";

const getLocalStorageKey = () =>
  POSITION_LOCAL_STORAGE_PREFIX + mw.user.sessionId();

/**
 * @return {number}
 */
const getTranslationSessionPosition = () => {
  const storageKey = getLocalStorageKey();
  let translationSessionPosition = mw.storage.get(storageKey);

  if (translationSessionPosition === null) {
    translationSessionPosition = 0;
  }

  return parseInt(translationSessionPosition);
};

const setTranslationSessionPosition = function () {
  // clear pre-existing session position counters from local storage
  Object.keys(localStorage)
    .filter((x) => x.startsWith(POSITION_LOCAL_STORAGE_PREFIX))
    .forEach((x) => localStorage.removeItem(x));

  const storageKey = getLocalStorageKey();
  const translationSessionPosition = getTranslationSessionPosition();
  mw.storage.set(storageKey, translationSessionPosition + 1);
};

export { getTranslationSessionPosition, setTranslationSessionPosition };

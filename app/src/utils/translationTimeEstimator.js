/**
 * Converts byte size to estimated translation time in minutes.
 *
 * @param {number} byteSize - The size of the text in bytes.
 * @return {number} - The estimated translation time in minutes.
 */
const bytesToMinutes = (byteSize) => {
  const averageWordLengthInBytes = 5;
  const averageTranslationSpeedInWordsPerMinute = 15;

  const wordCount = byteSize / averageWordLengthInBytes;
  const translationTimeInMinutes =
    wordCount / averageTranslationSpeedInWordsPerMinute;

  return Math.ceil(translationTimeInMinutes);
};

export { bytesToMinutes };

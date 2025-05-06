const CJKLanguages = [
  "cjy-hans",
  "cjy-hant",
  "gan-hans",
  "gan",
  "hak-hans",
  "hak-hant",
  "hsn",
  "ii",
  "ja",
  "jje",
  "ko-kp",
  "ko",
  "lzh",
  "ryu",
  "wuu",
  "yue",
  "zh",
  "zh-cn",
  "zh-hans",
  "zh-hant",
  "zh-hk",
  "zh-mo",
  "zh-my",
  "zh-sg",
  "zh-tw",
];

/**
 * Calculate the difference between two strings in the scale
 * of 0 to 1, based on the order changed in string2 from string1.
 *
 * @param {string} string1
 * @param {string} string2
 * @param {string} language
 * @return {number} A value between 0 and 1
 */
const calculateUnmodifiedContent = (string1, string2, language) => {
  if (!string1 || !string2) {
    return 0;
  }

  if (string1 === string2) {
    // Both strings are equal. So string2 is 100% unmodified version of string1
    return 1;
  }

  const tokens1 = tokenise(string1, language);
  const tokens2 = tokenise(string2, language);

  // Find the longest common subsequence (tokens in the same order)
  const lcsLength = findLongestCommonSubsequenceLength(tokens1, tokens2);

  // Calculate the unmodified content percentage based on the larger token set
  const largerLength = Math.max(tokens1.length, tokens2.length);

  return lcsLength / largerLength;
};

/**
 * Finds the length of the longest common subsequence between two arrays of tokens.
 * This preserves the order of tokens.
 *
 * @param {string[]} tokens1
 * @param {string[]} tokens2
 * @return {number} The length of the longest common subsequence
 */
const findLongestCommonSubsequenceLength = (tokens1, tokens2) => {
  const m = tokens1.length;
  const n = tokens2.length;

  // Create a table to store the LCS lengths
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Fill the dp table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (tokens1[i - 1] === tokens2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Return the length of the LCS
  return dp[m][n];
};

/**
 * Tokenize a given string. Here tokens is basically words for non CJK languages.
 * For CJK languages, we just split at each codepoint level.
 *
 * @param {string} string
 * @param {string} language
 * @return {string[]}
 */
const tokenise = function (string, language) {
  if (!string) {
    return [];
  }

  if (CJKLanguages.includes(language)) {
    return string.split("");
  }

  // Match all non whitespace characters for tokens.
  return string.match(/\S+/g) || [];
};

export { calculateUnmodifiedContent };

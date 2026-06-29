// Color palette mirroring the legacy WikimediaUI base colors.
// Each value resolves to the matching Codex design token (set on the page by the
// skin's CSSCustomProperties.less) so colors adapt to dark mode, falling back to
// the original hex when the tokens are not present (e.g. in isolation/Storybook).
export default {
  gray200: "var(--background-color-neutral, #eaecf0)",
  gray300: "var(--border-color-subtle, #c8ccd1)",
  gray500: "var(--color-subtle, #72777d)",
  gray600: "var(--color-subtle, #54595d)",
  gray700: "var(--color-base, #202122)",
  blue600: "var(--color-progressive, #36c)",
  green500: "var(--color-success, #00af89)",
  green600: "var(--color-success, #14866d)",
  red600: "var(--color-error, #d73333)",
  yellow500: "var(--color-warning, #fc3)",
  yellow700: "var(--color-warning, #ac6600)",
};

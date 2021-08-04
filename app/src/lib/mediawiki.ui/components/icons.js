/**
 * Icons data for the UI library.
 * Each icon can have a string value containing the SVG path for the icon.
 * Alternatively, the icon value can be an object with the following structure:
 *   path - the SVG path
 *   flippable - Whether icon can be flippable in RTL context. If the icon is
 *     horizontally symmetric, this has no visual difference. If flippable is
 *     not defined, 'true' value is assumed.
 *
 * Defining all icons in this file assumes a build tooling capable of treeshaking.
 */
export const mwIconAdd = "M11 9V4H9v5H4v2h5v5h2v-5h5V9z";
export const mwIconWikipediaLogo = {
  path:
    "M11.14 4H14a.69.69 0 0 1 0 .65c-1 .16-1.36.91-1.81 1.83l-1.4 2.75 2.35 5.21h.07l3.52-8.1c.44-1.07.4-1.59-.79-1.7a.68.68 0 0 1 0-.65h3.45a.68.68 0 0 1 0 .65c-1.21.16-1.42.91-1.81 1.83l-4.37 10.08c-.13.3-.24.45-.44.45s-.33-.16-.42-.45l-2.48-5.73-2.72 5.73c-.11.3-.24.45-.44.45s-.31-.16-.42-.45l-4-10.09c-.57-1.4-.6-1.7-1.65-1.8A.68.68 0 0 1 .62 4h3.91a.68.68 0 0 1 0 .65c-1.16.13-1.21.45-.74 1.58l3.41 8.19h.05L9.3 10 7.78 6.45C7.17 5.05 7 4.77 6.24 4.66a.69.69 0 0 1 0-.65h3.32a.68.68 0 0 1 0 .65c-.74.12-.7.45-.19 1.58l.87 2 .08.09 1-2c.57-1.14.64-1.58-.15-1.7a.69.69 0 0 1-.03-.63z",
  flippable: false
};

export const mwIconUserAvatar =
  "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z";
export const mwIconBell =
  "M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z";
export const mwIconBellOutline =
  "M11.5 2.19C14.09 2.86 16 5.2 16 8v6l2 2v1H2v-1l2-2V8c0-2.8 1.91-5.14 4.5-5.81V1.5C8.5.67 9.17 0 10 0s1.5.67 1.5 1.5v.69zM10 4C7.79 4 6 5.79 6 8v7h8V8c0-2.21-1.79-4-4-4zM8 18h4c0 1.1-.9 2-2 2s-2-.9-2-2z";
export const mwIconChart = "M3 3H1v16h18v-2H3z M11 11L8 9l-4 4v3h14V5z";
export const mwIconInfo =
  "M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z";
export const mwIconSpeechBubble =
  "M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z";
export const mwIconEdit =
  "M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zM1 14.25V19h4.75l9.96-9.96-4.75-4.75z";
export const mwIconArticleCheck = {
  path:
    "M9 17l-4.59-4.59L5.83 11 9 14.17l8-8V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z",
  flippable: false
};

export const mwIconLightBulb =
  "M8 19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1H8zm9-12a7 7 0 1 0-12 4.9S7 14 7 15v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1c0-1 2-3.1 2-3.1A7 7 0 0 0 17 7z";
export const mwIconImageLayoutFrameless =
  "M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z";
export const mwIconStar =
  "M20 7h-7L10 .5 7 7H0l5.46 5.47-1.64 7 6.18-3.7 6.18 3.73-1.63-7zm-10 6.9l-3.76 2.27 1-4.28L3.5 8.5h4.61L10 4.6l1.9 3.9h4.6l-3.73 3.4 1 4.28z";
export const mwIconTrash =
  "M17 2h-3.5l-1-1h-5l-1 1H3v2h14zM4 17a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5H4z";
export const mwIconTray =
  "M3 1a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm14 12h-4l-1 2H8l-1-2H3V3h14z";
export const mwIconExpand = "M17.5 4.75l-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z";
export const mwIconArrowForward = "M7 1L5.6 2.5 13 10l-7.4 7.5L7 19l9-9z";
export const mwIconRefresh =
  "M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z";
export const mwIconClose =
  "M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z";
export const mwIconPrevious = "M4 10l9 9 1.4-1.5L7 10l7.4-7.5L13 1z";
export const mwIconArrowPrevious =
  "M5.83 9l5.58-5.58L10 2l-8 8 8 8 1.41-1.41L5.83 11H18V9z";
export const mwIconArrowNext =
  "M8.59 3.42L14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z";
export const mwIconSearch =
  "M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 0 1 7.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z";
export const mwIconBookmarkOutline =
  "M5 1a2 2 0 0 0-2 2v16l7-5 7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5-5 3.5V3h10z";
export const mwIconBookmark = "M5 1a2 2 0 00-2 2v16l7-5 7 5V3a2 2 0 00-2-2z";
export const mwIconLanguage =
  "M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z";
export const mwIconLinkExternal =
  "M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z M11 1l3.29 3.29-5.73 5.73 1.42 1.42 5.73-5.73L19 9V1z";
export const mwIconLabFlask =
  "M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 002 19h16a1 1 0 00.86-1.51zm-4.2.88a1 1 0 00.2-.6V3h2v4.89a1 1 0 00.14.51l2.14 3.6H6.72z";
export const mwIconRobot =
  "M10.5 5h6.505C18.107 5 19 5.896 19 6.997V14h-7v2h5.005c1.102 0 1.995.888 1.995 2v2H1v-2c0-1.105.893-2 1.995-2H8v-2H1V6.997C1 5.894 1.893 5 2.995 5H9.5V2.915a1.5 1.5 0 111 0zm-4 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z";
export const mwIconEye =
  "M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z M 10, 10  m -2.5, 0 a 2.5, 2.5 0 1,0 5,0 a 2.5,2.5 0 1,0 -5,0";
export const mwIconEllipsis =
  "m 19,10 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2 M 5,10 A 2,2 0 0 1 3,12 2,2 0 0 1 1,10 2,2 0 0 1 3,8 2,2 0 0 1 5,10 m 7,0 a 2,2 0 0 1 -2,2 2,2 0 0 1 -2,-2 2,2 0 0 1 2,-2 2,2 0 0 1 2,2";
export const mwIconUndo =
  "M1 8.5L8 14v-4h1c4 0 7 2 7 6v1h3v-1c0-6-5-9-10-9H8V3z";
export const mwIconNotice = {
  path: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm1 16H9v-2h2zm0-4H9V4h2z"
};
export const mwIconCheck = {
  path: "M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42z",
  flippable: false
};
export const mwIconError = {
  path:
    "M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
};
export const mwIconAlert = {
  path:
    "M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
};
export const mwIconCollapse = {
  path: "M2.5 15.25l7.5-7.5 7.5 7.5 1.5-1.5-9-9-9 9z"
};
export const mwIconSettings =
  "M11.5 0l.42 2.75a7.67 7.67 0 0 1 1.87.77L16 1.87 18.16 4 16.49 6.23a7.67 7.67 0 0 1 .76 1.85L20 8.5v3l-2.75.42a7.67 7.67 0 0 1-.77 1.87L18.13 16 16 18.16l-2.24-1.67a7.67 7.67 0 0 1-1.85.76L11.5 20h-3l-.42-2.75a7.45 7.45 0 0 1-1.86-.77L4 18.13 1.87 16l1.65-2.23a7 7 0 0 1-.77-1.85L0 11.5v-3l2.75-.42a7.45 7.45 0 0 1 .77-1.86L1.87 4 4 1.87 6.23 3.52a7.17 7.17 0 0 1 1.85-.77L8.5 0ZM10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5Z";
export const mwIconBlock = "M10 1a9 9 0 109 9 9 9 0 00-9-9zm5 10H5V9h10z";
export const mwIconArticle =
  "M5 1a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2zm0 3h5v1H5zm0 2h5v1H5zm0 2h5v1H5zm10 7H5v-1h10zm0-2H5v-1h10zm0-2H5v-1h10zm0-2h-4V4h4z";

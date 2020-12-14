const siteMapper = {
  getPageUrl: (language, title) =>
    `https://${language}.wikipedia.org/wiki/${title}`
};
export default siteMapper;

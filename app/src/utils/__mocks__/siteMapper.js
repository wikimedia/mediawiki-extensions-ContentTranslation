const siteMapper = {
  getPageUrl: (language, title) =>
    `https://${language}.wikipedia.org/wiki/${title}`,
  getCXServerUrl: url => url
};
export default siteMapper;

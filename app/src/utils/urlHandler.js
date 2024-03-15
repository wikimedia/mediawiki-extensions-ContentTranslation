const isQuickTutorialForced = () => {
  const urlParams = new URLSearchParams(location.search);

  return urlParams.get("force-quick-tutorial");
};

export { isQuickTutorialForced };

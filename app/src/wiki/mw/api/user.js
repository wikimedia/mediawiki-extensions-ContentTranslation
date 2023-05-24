const assertUser = () => {
  return new mw.Api().get({ assert: "user" });
};

export default { assertUser };

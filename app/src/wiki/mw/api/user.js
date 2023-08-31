import AssertUserError from "@/utils/errors/assertUserError";

const assertUser = () => {
  return new mw.Api().get({ assert: "user" }).catch((error) => {
    if (error === "assertuserfailed") {
      throw new AssertUserError();
    }
  });
};

export default { assertUser };

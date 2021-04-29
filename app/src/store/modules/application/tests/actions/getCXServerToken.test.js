jest.mock("../../../../../router", () => {});
import actions from "../../actions";

const mockToken = { age: 0, jwt: "test-jwt" };
let mockTokenSuccessful = true;
jest.mock("../../../../../wiki/mw/api/site", () => {
  return {
    fetchCXServerToken: () => {
      if (mockTokenSuccessful) {
        return Promise.resolve(mockToken);
      }

      return Promise.reject("token-impossible");
    }
  };
});

describe("vuex application/actions/getCXServerToken tests", () => {
  const state = { cxServerToken: null };
  const mutations = {
    setCXServerToken: token => (state.cxServerToken = token)
  };
  const commit = jest.fn((mutation, payload) => mutations[mutation](payload));
  const dispatch = jest.fn();

  it("getCXServerToken action with successful request", async () => {
    const jwt = await actions.getCXServerToken({ dispatch, state, commit });
    const now = Math.floor(Date.now() / 1000);
    const expectedToken = {
      age: 3600,
      refreshAt: now + 3570,
      jwt: "test-jwt"
    };
    expect(commit).toHaveBeenCalledWith("setCXServerToken", expectedToken);
    expect(jwt).toBe(expectedToken.jwt);
  });

  it("getCXServerToken action with existing active token", async () => {
    const jwt = await actions.getCXServerToken({ dispatch, state, commit });
    expect(jwt).toBe(state.cxServerToken.jwt);
  });

  it("getCXServerToken action with failed request and error code 'token-impossible'", async () => {
    state.cxServerToken = null;
    mockTokenSuccessful = false;
    const jwt = await actions.getCXServerToken({ dispatch, state, commit });
    const now = Math.floor(Date.now() / 1000);
    const expectedToken = {
      refreshAt: now + 3600 * 10,
      jwt: ""
    };
    expect(commit).toHaveBeenCalledWith("setCXServerToken", expectedToken);
    expect(jwt).toBe(expectedToken.jwt);
  });

  it("getCXServerToken action with expired token", async () => {
    const now = Math.floor(Date.now() / 1000);
    state.cxServerToken = { refreshAt: now - 1 };
    await actions.getCXServerToken({ dispatch, state, commit });
    expect(commit).toHaveBeenCalledWith("setCXServerToken", null);
    expect(dispatch).toHaveBeenCalledWith("getCXServerToken");
  });
});

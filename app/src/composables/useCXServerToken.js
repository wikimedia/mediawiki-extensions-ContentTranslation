import siteApi from "@/wiki/mw/api/site";
import { ref } from "vue";
/**
 * The cxserver token, mainly used for accessing external machine translation services.
 * @type {Ref<String>}
 */
const cxServerToken = ref(null);

/**
 * This asynchronous action returns the current cxserver jwt token as string.
 * If no such token or current token is expired an api request to
 * fetch new token is being sent. If the api request fails, then
 * an empty string is returned.
 *
 * @return {function(): Promise<string>}
 */
const useCXServerToken = () => {
  const getToken = async () => {
    if (!cxServerToken.value) {
      await siteApi
        .fetchCXServerToken()
        .then((token) => {
          // Make sure token.age is configured to a valid value.
          if (token.age <= 30) {
            // Set the default token age
            token.age = 3600;
          }
          const now = Math.floor(Date.now() / 1000);
          // We use `age` instead of `exp` because it is more reliable, as user's
          // clocks might be set to wrong time.
          token.refreshAt = now + token.age - 30;
          cxServerToken.value = token;
        })
        .catch((errorCode) => {
          if (errorCode === "token-impossible") {
            // Likely CX extension has not been configured properly.
            // To make development and testing easier, assume that
            // no token is needed.
            const now = Math.floor(Date.now() / 1000);
            // Set a dummy token with higher `refreshAt` time
            cxServerToken.value = { jwt: "", refreshAt: now + 3600 * 10 };
          }
        });
    }
    const now = Math.floor(Date.now() / 1000);

    if (cxServerToken.value?.refreshAt <= now) {
      cxServerToken.value = null;

      return getToken();
    }

    return cxServerToken.value?.jwt;
  };

  return getToken;
};

export default useCXServerToken;

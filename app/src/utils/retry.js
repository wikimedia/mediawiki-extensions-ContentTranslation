const MAX_RETRIES = 5;

/**
 * Retries a function until it returns a truthy value or the max number of retries is reached.
 *
 * @param {function: Promise} fn Function to execute
 */
async function retry(fn) {
  let retries = 0;
  let result;

  do {
    result = await fn();
  } while (!result && ++retries < MAX_RETRIES);
}

export default retry;

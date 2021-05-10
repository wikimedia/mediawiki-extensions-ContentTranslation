import Vue from "vue";

Vue.directive("i18n-html-safe", function(el, binding) {
  let message;

  if (Array.isArray(binding.value)) {
    if (binding.arg === undefined) {
      // v-i18n-html-safe="[ ...params ]" (error)
      throw new Error(
        "v-i18n-html-safe used with parameter array but without message key"
      );
    }
    // v-i18n-html-safe:messageKey="[ ...params ]"
    message = mw.message(binding.arg).params(binding.value);
  } else if (binding.value instanceof mw.Message) {
    // v-i18n-html-safe="mw.message( '...' ).params( [ ... ] )"
    message = binding.value;
  } else {
    // v-i18n-html-safe:foo or v-i18n-html-safe="'foo'"
    message = mw.message(binding.arg || binding.value);
  }

  el.innerHTML = message.parse();
});

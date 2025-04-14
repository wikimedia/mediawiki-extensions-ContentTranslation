import { ref } from "vue";

/**
 * @type {Ref<UnwrapRef<"expand"|"new">>}
 */
const existingSectionPublishOption = ref("expand");

const setExistingSectionPublishOption = (option) => {
  existingSectionPublishOption.value = option;
};

const useExistingSectionPublishOption = () => ({
  existingSectionPublishOption,
  setExistingSectionPublishOption,
});

export default useExistingSectionPublishOption;

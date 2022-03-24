import { ref, computed } from "vue";

const useScroll = (
  contentMinHeight,
  contentMaxHeight,
  contentRef,
  isCollapsed
) => {
  const scrollIndex = ref(0);

  const scrollable = computed(
    () => contentMaxHeight.value > contentMinHeight.value
  );

  const isScrolledToEnd = computed(
    () =>
      contentMaxHeight.value <= contentMinHeight.value * (scrollIndex.value + 1)
  );

  const scrollToStepByIndex = (index) => {
    scrollIndex.value = index;
    contentRef.value.scroll(0, contentMinHeight.value * scrollIndex.value);
  };

  const handleArrowUpClick = () => {
    if (!isCollapsed.value) {
      contentRef.value.style.removeProperty("height");
      isCollapsed.value = true;
      scrollToStepByIndex(0);

      return;
    }
    // Scroll to previous step
    scrollToStepByIndex(scrollIndex.value - 1);
  };

  return {
    handleArrowUpClick,
    isScrolledToEnd,
    scrollToStepByIndex,
    scrollable,
    scrollIndex,
  };
};

export default useScroll;

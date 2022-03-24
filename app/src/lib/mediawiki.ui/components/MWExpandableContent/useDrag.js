const useInitiateDrag =
  (contentMaxHeight, contentMinHeight, contentRef, isCollapsed) => (e) => {
    const dragStartY = e.clientY;
    const panelHeightAtDragStart = parseInt(
      document.defaultView.getComputedStyle(contentRef.value).height,
      10
    );

    const doDrag = (e) => {
      isCollapsed.value = false;

      // The height of the original content panel should not exceed
      // the scroll height of its contents
      let heightAfterDrag = Math.min(
        panelHeightAtDragStart + e.clientY - dragStartY,
        contentMaxHeight.value
      );

      // The height of the original content panel should be greater than or
      // equal to its original height
      heightAfterDrag = Math.max(heightAfterDrag, contentMinHeight.value);
      contentRef.value.style.height = heightAfterDrag + "px";
    };

    const completeDrag = () => {
      const currentHeight = contentRef.value.style.height;

      // If the panel is dragged back to its original height, restore
      // the initial state
      if (currentHeight === contentMinHeight.value + "px") {
        contentRef.value.style.removeProperty("height");
        isCollapsed.value = true;
      }

      document.documentElement.removeEventListener(
        "pointermove",
        doDrag,
        false
      );
      document.documentElement.removeEventListener(
        "pointerup",
        completeDrag,
        false
      );
    };

    document.documentElement.addEventListener("pointermove", doDrag, false);
    document.documentElement.addEventListener("pointerup", completeDrag, false);
  };

const useDrag = (
  contentMaxHeight,
  contentMinHeight,
  contentRef,
  isCollapsed
) => {
  const initiateDrag = useInitiateDrag(
    contentMaxHeight,
    contentMinHeight,
    contentRef,
    isCollapsed
  );

  return { initiateDrag };
};

export default useDrag;

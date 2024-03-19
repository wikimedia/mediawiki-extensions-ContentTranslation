import { computed } from "vue";
import SubSectionModel from "@/wiki/cx/models/subSection";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

/**
 * @param {Element} segment
 */
const scrollToSegment = (segment) => {
  // "segment" variable refers to multi-line inline elements (<span>).
  // Such elements have multiple border boxes (one around each line).
  // For this reason we need to check if all these border boxes are
  // visible or not, and we need to use "getClientRects" method instead
  // of "getBoundingClientRect" method
  const isInView = Array.from(segment.getClientRects()).every(
    // use "elementFromPoint" method to get the topmost element
    // at the coordinates of the border box of each line.
    // If the line of the segment is inside the viewport and not
    // hidden by another element (e.g. the proposed translation card),
    // the returned element should match the "segment" element.
    // Note that we only check for the top-left corner of the rectangle, so
    // if a small portion of a line is hidden, the line is still considered
    // to be visible.
    (rect) => document.elementFromPoint(rect.x, rect.y) === segment
  );

  if (isInView) {
    return;
  }
  // Move the current selected translation unit to viewport
  segment.scrollIntoView({
    behavior: "smooth",
    // set "block" property to "start" so that it works well with block templates too
    block: "start",
    inline: "nearest",
  });
};

const useSelectedContentTranslationUnitScroll = () => {
  const { selectedContentTranslationUnit } = useCurrentPageSection();
  const isBlockTemplateSelected = computed(
    () => selectedContentTranslationUnit.value instanceof SubSectionModel
  );

  return () => {
    if (!selectedContentTranslationUnit.value) {
      return;
    }
    const segmentId = selectedContentTranslationUnit.value.id;
    const segment = isBlockTemplateSelected.value
      ? document.getElementById(segmentId)
      : document.querySelector(`[data-segmentid='${segmentId}']`);

    if (!segment) {
      return;
    }
    scrollToSegment(segment);
  };
};

export default useSelectedContentTranslationUnitScroll;

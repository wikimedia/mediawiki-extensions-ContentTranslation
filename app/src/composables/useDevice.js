import { computed, inject } from "vue";
import { siteMapper } from "@/utils/mediawikiHelper";

const useDevice = () => {
  const breakpoints = inject("breakpoints");

  const isDesktop = computed(
    () => !siteMapper.isMobileDomain() && breakpoints.value.tabletAndUp
  );

  return { isDesktop };
};

export default useDevice;

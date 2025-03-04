import { computed } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import { getUrl } from "@/utils/mediawikiHelper";

const useDesktopDashboardURL = () => {
  const { activeDashboardTabParameter: activeTab } = useURLHandler();

  const desktopDashboardUrl = computed(() => {
    return (
      getUrl("Special:ContentTranslation", {
        "cx-dashboard": "desktop",
      }) + `#${activeTab.value}`
    );
  });

  return { desktopDashboardUrl };
};

export default useDesktopDashboardURL;

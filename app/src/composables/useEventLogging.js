import logEvent from "@/utils/eventlogging/logEvent";
import { isDesktopSite } from "@/utils/mediawikiHelper";

const useEventLogging = () => {
  return (event) => {
    if (!event.access_method) {
      event.access_method = isDesktopSite ? "desktop" : "mobile web";
    }

    return logEvent(event);
  };
};

export default useEventLogging;

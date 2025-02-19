import logEvent from "@/utils/eventlogging/logEvent";
import useDevice from "@/composables/useDevice";

const useEventLogging = () => {
  const { isDesktop } = useDevice();

  return (event) => {
    if (!event.access_method) {
      event.access_method = isDesktop.value ? "desktop" : "mobile web";
    }

    return logEvent(event);
  };
};

export default useEventLogging;

// EventLogging plugin
// https://wikitech.wikimedia.org/wiki/Event_Platform
import { inject } from "vue";
import logEvent from "./logEvent";

const contextSymbol = Symbol("event-logging-context");

const useEventLogging = function () {
  const logEvent = inject(contextSymbol);
  if (!logEvent) throw new Error("No event logging method provided!!!");

  return logEvent;
};

const createEventLogging = () => ({
  install: (app) => {
    app.provide(contextSymbol, logEvent);
  },
});

export { createEventLogging, useEventLogging };

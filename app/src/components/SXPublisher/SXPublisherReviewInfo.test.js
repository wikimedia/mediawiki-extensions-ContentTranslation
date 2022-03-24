import SXPublisherReviewInfo from "./SXPublisherReviewInfo.vue";
import { mount } from "@vue/test-utils";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import { createStore } from "vuex";
import { createI18n } from "vue-banana-i18n";

const i18n = createI18n();

import {
  mwIconEye,
  mwIconAlert,
  mwIconBlock,
  mwIconCheck,
} from "@/lib/mediawiki.ui/components/icons";

jest.spyOn(global.Math, "random").mockReturnValue(0.1);
describe("SXPublisher review info panel test", () => {
  const store = createStore({
    modules: {
      application: {
        namespaced: true,
        state: { publishFeedbackMessages: [] },
      },
    },
  });
  const wrapper = mount(SXPublisherReviewInfo, {
    global: { plugins: [store, i18n] },
    props: {
      mwIconEye,
      mwIconAlert,
      mwIconBlock,
      mwIconCheck,
      activeMessageIndex: 0,
    },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should compute status, reviewIcon and messageType correctly when no publishFeedbackMessages exist", () => {
    expect(wrapper.vm.status).toStrictEqual("default");
    expect(wrapper.vm.reviewIcon).toStrictEqual(mwIconEye);
    expect(wrapper.vm.messageType).toBe("notice");
  });

  it(`should compute status, reviewIcon, messageType, messageTitle and messageText correctly when
   the active message is an error`, () => {
    store.state.application.publishFeedbackMessages = [
      new PublishFeedbackMessage({
        title: "Error title",
        text: "Error text",
        status: "error",
      }),
    ];
    expect(wrapper.vm.status).toStrictEqual("error");
    expect(wrapper.vm.reviewIcon).toStrictEqual(mwIconBlock);
    expect(wrapper.vm.messageType).toBe("error");
    expect(wrapper.vm.messageTitle).toBe("Error title");
    expect(wrapper.vm.messageText).toBe("Error text");
  });

  it(`should compute status, reviewIcon, messageType, messageTitle and messageText correctly when
   the active message is a warning`, () => {
    store.state.application.publishFeedbackMessages = [
      new PublishFeedbackMessage({
        title: "Warning title",
        text: "Warning text",
        status: "warning",
      }),
    ];
    expect(wrapper.vm.status).toStrictEqual("warning");
    expect(wrapper.vm.reviewIcon).toStrictEqual(mwIconAlert);
    expect(wrapper.vm.messageType).toBe("warning");
    expect(wrapper.vm.messageTitle).toBe("Warning title");
    expect(wrapper.vm.messageText).toBe("Warning text");
  });

  it("should navigate to previous message when previous button clicked", async () => {
    store.state.application.publishFeedbackMessages = [
      new PublishFeedbackMessage({ title: "1", status: "error" }),
      new PublishFeedbackMessage({ title: "2", status: "warning" }),
      new PublishFeedbackMessage({ title: "3", status: "warning" }),
    ];
    await wrapper.vm.$nextTick();
    const previousButtonWrapper = wrapper.find(
      ".sx-publisher__review-info__navigation-buttons > .mw-ui-button"
    );
    previousButtonWrapper.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.messageTitle).toBe("3");
  });
});

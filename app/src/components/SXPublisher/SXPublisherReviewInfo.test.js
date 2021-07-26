import SXPublisherReviewInfo from "./SXPublisherReviewInfo";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";

import PublishResult from "@/wiki/cx/models/publishResult";
const localVue = createLocalVue();
localVue.use(VueBananaI18n);
localVue.use(Vuex);
import {
  mwIconEye,
  mwIconAlert,
  mwIconBlock,
  mwIconCheck
} from "@/lib/mediawiki.ui/components/icons";

describe("SXPublisher review info panel test", () => {
  const publishResult = new PublishResult();
  const state = { currentPublishResult: publishResult };
  const store = new Vuex.Store({
    modules: {
      application: {
        namespaced: true,
        state
      }
    }
  });
  const wrapper = mount(SXPublisherReviewInfo, {
    store,
    localVue,
    propsData: {
      mwIconEye,
      mwIconAlert,
      mwIconBlock,
      mwIconCheck,
      activeMessageIndex: 0
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Computed props are calculated correctly for default status", () => {
    expect(wrapper.vm.status).toStrictEqual("default");
    expect(wrapper.vm.reviewIcon).toStrictEqual(mwIconEye);
    expect(wrapper.vm.messageType).toBe("notice");
  });

  it("Computed props are calculated correctly for error status", () => {
    state.currentPublishResult = new PublishResult({
      result: "failure",
      messages: [{ title: "Error title", text: "Error text" }]
    });
    expect(wrapper.vm.status).toStrictEqual("error");
    expect(wrapper.vm.reviewIcon).toStrictEqual(mwIconBlock);
    expect(wrapper.vm.messageType).toBe("error");
    expect(wrapper.vm.messageTitle).toBe("Error title");
    expect(wrapper.vm.messageText).toBe("Error text");
  });

  it("Computed props are calculated correctly for warning status", () => {
    state.currentPublishResult = new PublishResult({
      result: "warning",
      messages: [{ title: "Warning title", text: "Warning text" }]
    });
    expect(wrapper.vm.status).toStrictEqual("warning");
    expect(wrapper.vm.reviewIcon).toStrictEqual(mwIconAlert);
    expect(wrapper.vm.messageType).toBe("warning");
    expect(wrapper.vm.messageTitle).toBe("Warning title");
    expect(wrapper.vm.messageText).toBe("Warning text");
  });

  it("Warning is suppressed when check button clicked", async () => {
    const checkButtonWrapper = wrapper.find(
      ".sx-publisher__review-info__suppress-warning-button"
    );
    checkButtonWrapper.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeMessage).toBe(undefined);
  });
});

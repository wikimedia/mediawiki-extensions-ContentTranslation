import SXPublisherReviewInfo from "./SXPublisherReviewInfo.vue";
import { mount } from "@vue/test-utils";
import PublishFeedbackMessage from "@/wiki/cx/models/publishFeedbackMessage";
import { createI18n } from "vue-banana-i18n";

const i18n = createI18n();

import { cdxIconAlert, cdxIconEye, cdxIconBlock } from "@wikimedia/codex-icons";

jest.spyOn(global.Math, "random").mockReturnValue(0.1);
describe("SXPublisher review info panel test", () => {
  let wrapper = mount(SXPublisherReviewInfo, {
    global: { plugins: [i18n] },
    props: { publishFeedbackMessages: [] },
  });

  it("should match snapshot when no publishFeedbackMessages exist", async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should return status, reviewIcon and messageType correctly when no publishFeedbackMessages exist", () => {
    expect(wrapper.vm.status).toStrictEqual("default");
    expect(wrapper.vm.reviewIcon).toStrictEqual(cdxIconEye);
    expect(wrapper.vm.messageType).toBe("notice");
  });

  it(`should return status, reviewIcon, messageType, messageTitle and messageText correctly when
   the active message is an error`, () => {
    wrapper = mount(SXPublisherReviewInfo, {
      global: { plugins: [i18n] },
      props: {
        publishFeedbackMessages: [
          new PublishFeedbackMessage({
            title: "Error title",
            text: "Error text",
            status: "error",
          }),
        ],
      },
    });
    expect(wrapper.vm.status).toStrictEqual("error");
    expect(wrapper.vm.reviewIcon).toStrictEqual(cdxIconBlock);
    expect(wrapper.vm.messageType).toBe("error");
    expect(wrapper.vm.messageTitle).toBe("Error title");
    expect(wrapper.vm.messageText).toBe("Error text");
  });

  it(`should match snapshot when the active message is a warning`, () => {
    wrapper = mount(SXPublisherReviewInfo, {
      global: { plugins: [i18n] },
      props: {
        publishFeedbackMessages: [
          new PublishFeedbackMessage({
            title: "Warning title",
            text: "Warning text",
            status: "warning",
          }),
        ],
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it(`should compute status, reviewIcon, messageType, messageTitle and messageText correctly when
   the active message is a warning`, () => {
    expect(wrapper.vm.status).toStrictEqual("warning");
    expect(wrapper.vm.reviewIcon).toStrictEqual(cdxIconAlert);
    expect(wrapper.vm.messageType).toBe("warning");
    expect(wrapper.vm.messageTitle).toBe("Warning title");
    expect(wrapper.vm.messageText).toBe("Warning text");
  });

  it("should navigate to previous message when previous button clicked", async () => {
    wrapper = mount(SXPublisherReviewInfo, {
      global: { plugins: [i18n] },
      props: {
        publishFeedbackMessages: [
          new PublishFeedbackMessage({ title: "1", status: "error" }),
          new PublishFeedbackMessage({ title: "2", status: "warning" }),
          new PublishFeedbackMessage({ title: "3", status: "warning" }),
        ],
      },
    });
    const previousButtonWrapper = wrapper.find(
      ".sx-publisher__review-info__navigation-buttons > button"
    );
    previousButtonWrapper.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.messageTitle).toBe("3");
  });
});

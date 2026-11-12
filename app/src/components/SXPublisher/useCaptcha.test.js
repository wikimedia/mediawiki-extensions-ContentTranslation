import useCaptcha from "./useCaptcha";

const widget = {
  captchaRendered: false,
  updateForFailure: jest.fn(),
  renderCaptcha: jest.fn(),
  getCaptchaDataForSubmission: jest.fn(),
};

global.mw = {
  loader: { using: jest.fn(() => Promise.resolve()) },
  message: jest.fn((key) => ({ text: () => key })),
  libs: {
    confirmEdit: {
      CaptchaWidget: jest.fn(() => widget),
    },
  },
};

const details = { type: "hcaptcha" };

describe("useCaptcha solveHCaptcha", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    widget.captchaRendered = false;
    widget.renderCaptcha.mockImplementation(() => {
      widget.captchaRendered = true;

      return Promise.resolve();
    });
    widget.getCaptchaDataForSubmission.mockResolvedValue({
      captchaword: "token",
    });
  });

  it("renders the widget and returns the token", async () => {
    widget.updateForFailure.mockResolvedValue(false);
    const { solveHCaptcha } = useCaptcha();

    const data = await solveHCaptcha(details, {}, false);

    expect(widget.renderCaptcha).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ captchaword: "token" });
  });

  it("does not render a rendered widget again", async () => {
    const { solveHCaptcha } = useCaptcha();
    widget.updateForFailure.mockResolvedValue(false);
    await solveHCaptcha(details, {}, false);

    // A stricter challenge: updateForFailure() renders the widget itself
    widget.updateForFailure.mockResolvedValue(true);
    await solveHCaptcha(details, {}, true);

    expect(widget.renderCaptcha).toHaveBeenCalledTimes(1);
    expect(widget.getCaptchaDataForSubmission).toHaveBeenCalledTimes(2);
  });

  it("stops when the server refused the token", async () => {
    widget.updateForFailure.mockResolvedValue(false);
    const { solveHCaptcha } = useCaptcha();

    await expect(solveHCaptcha(details, {}, true)).rejects.toThrow(
      "cx-captcha-dialog-error"
    );
    expect(widget.getCaptchaDataForSubmission).not.toHaveBeenCalled();
  });
});

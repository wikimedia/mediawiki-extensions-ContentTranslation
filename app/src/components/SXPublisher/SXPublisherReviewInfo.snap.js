// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`SXPublisher review info panel test should match snapshot when no publishFeedbackMessages exist 1`] = `
<transition-stub
  appear="false"
  class="sx-publisher__review-info sx-publisher__review-info--notice"
  css="true"
  leaveactiveclass=""
  name="cdx-message"
  persisted="false"
>
  <div
    aria-live="polite"
    class="cdx-message cdx-message--block cdx-message--notice"
  >
    <span
      class="cdx-icon cdx-icon--medium cdx-message__icon--vue"
    >
      <svg
        aria-hidden="true"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!--v-if-->
        <g>
          <path
            d="M10 14.5a4.5 4.5 0 114.5-4.5 4.5 4.5 0 01-4.5 4.5M10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7"
          />
          <circle
            cx="10"
            cy="10"
            r="2.5"
          />
        </g>
      </svg>
    </span>
    <div
      class="cdx-message__content"
    >
      
      <h5>
        cx-sx-publisher-review-info
      </h5>
      <!--v-if-->
      
    </div>
    <!--v-if-->
  </div>
</transition-stub>
`;

exports[`SXPublisher review info panel test should match snapshot when the active message is a warning 1`] = `
<transition-stub
  appear="false"
  class="sx-publisher__review-info sx-publisher__review-info--warning"
  css="true"
  leaveactiveclass=""
  name="cdx-message"
  persisted="false"
>
  <div
    aria-live="polite"
    class="cdx-message cdx-message--block cdx-message--warning"
  >
    <span
      class="cdx-icon cdx-icon--medium cdx-message__icon--vue"
    >
      <svg
        aria-hidden="true"
        height="20"
        viewBox="0 0 20 20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!--v-if-->
        <g>
          <path
            d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
          />
        </g>
      </svg>
    </span>
    <div
      class="cdx-message__content"
    >
      
      <h5>
        Warning title
      </h5>
      
      <p>
        Warning text
      </p>
      <div
        class="row items-center justify-between ma-0"
      >
        
        <div
          class="col sx-publisher__review-info__learn-more-anchor"
        >
          cx-sx-publisher-review-info-learn-more
        </div>
        <!--v-if-->
        
      </div>
      
      
    </div>
    <!--v-if-->
  </div>
</transition-stub>
`;

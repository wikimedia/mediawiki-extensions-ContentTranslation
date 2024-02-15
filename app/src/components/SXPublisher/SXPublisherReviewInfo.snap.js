// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`SXPublisher review info panel test should match snapshot when no publishFeedbackMessages exist 1`] = `
<div
  aria-labelledby="notice10-label"
  aria-live="polite"
  class="row items-normal justify-start mw-ui-message--notice mw-ui-message--inline mw-ui-message sx-publisher__review-info ma-0 pa-4 sx-publisher__review-info--notice"
>
  
  <!-- @slot Use this slot for custom icon -->
  
  <span
    class="cdx-icon cdx-icon--medium shrink mw-ui-message__icon items-start me-1"
  >
    <svg
      aria-hidden="true"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <!---->
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
  
  <span
    class="col grow items-center mw-ui-message__label"
    id="notice10-label"
  >
    
    <!-- @slot Message content -->
    
    <div
      class="sx-publisher__review-info__content"
    >
      <p
        class="complementary ma-0"
      >
        cx-sx-publisher-review-info
      </p>
    </div>
    
    
  </span>
  <!-- @slot Use this slot for custom action for the message -->
  <!--    Add hideMessage method as slot prop, so that message can be hidden even when -->
  <!--    action slot is being overridden -->
  
  <!--v-if-->
  
  
</div>
`;

exports[`SXPublisher review info panel test should match snapshot when the active message is a warning 1`] = `
<div
  aria-labelledby="-label"
  aria-live="polite"
  class="row items-normal justify-start mw-ui-message--warning mw-ui-message sx-publisher__review-info ma-0 pa-4 sx-publisher__review-info--warning"
>
  
  <!-- @slot Use this slot for custom icon -->
  
  <span
    class="cdx-icon cdx-icon--medium shrink mw-ui-message__icon items-start me-1"
  >
    <svg
      aria-hidden="true"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <!---->
      <g>
        <path
          d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"
        />
      </g>
    </svg>
  </span>
  
  <span
    class="col grow items-center mw-ui-message__label"
    id="-label"
  >
    
    <!-- @slot Message content -->
    
    <div
      class="sx-publisher__review-info__content"
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
    
    
  </span>
  <!-- @slot Use this slot for custom action for the message -->
  <!--    Add hideMessage method as slot prop, so that message can be hidden even when -->
  <!--    action slot is being overridden -->
  
  <!--v-if-->
  
  
</div>
`;

// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`MwMessage.vue renders correctly 1`] = `
<div
  aria-labelledby="-label"
  class="row items-normal justify-start mw-ui-message--error mw-ui-message"
  role="alert"
>
  
  <!-- @slot Use this slot for custom icon -->
  
  <span
    class="mw-ui-icon notranslate col shrink mw-ui-message__icon pa-1 items-start"
  >
    <svg
      aria-hidden="true"
      height="24"
      role="presentation"
      viewBox="0 0 20 20"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!--v-if-->
      <g
        fill="currentColor"
      >
        <path
          d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
        />
      </g>
    </svg>
  </span>
  
  <span
    class="col grow items-center mw-ui-message__label"
    id="-label"
  >
    
    <!-- @slot Message content -->
    
    This is an error message
    
    
  </span>
  <!-- @slot Use this slot for custom action for the message -->
  <!--    Add hideMessage method as slot prop, so that message can be hidden even when -->
  <!--    action slot is being overridden -->
  
  <button
    class="mw-ui-button mw-ui-button--icon col shrink items-start mw-ui-message__action py-1"
  >
    
    <span
      class="mw-ui-button__content"
    >
      <span
        class="mw-ui-icon notranslate mw-ui-button__icon"
      >
        <svg
          aria-hidden="true"
          height="24"
          role="presentation"
          viewBox="0 0 20 20"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!--v-if-->
          <g
            fill="currentColor"
          >
            <path
              d="M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z"
            />
          </g>
        </svg>
      </span>
      <!--v-if-->
      <!--v-if-->
    </span>
    
  </button>
  
  
</div>
`;

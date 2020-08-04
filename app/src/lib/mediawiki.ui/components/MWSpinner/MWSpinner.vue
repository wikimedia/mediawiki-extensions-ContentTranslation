<!-- Three bouncing dots based progress indicator. -->
<template functional>
  <div class="mw-ui-spinner">
    <div class="mw-ui-spinner__bounce"></div>
  </div>
</template>

<style lang="less">
@import "../../variables/wikimedia-ui-base.less";

@width-bounce-dot: 1em;

.mw-ui-spinner {
  margin: 10px auto 0;
  width: @width-bounce-dot * 4; // Equals to width and margins.
  white-space: nowrap;

  .mw-ui-spinner__bounce,
  &:before,
  &:after {
    content: "";
    background-color: @color-placeholder;
    display: inline-block;
    width: @width-bounce-dot;
    height: @width-bounce-dot;
    border-radius: 100%;
    animation: bounce-delay 1600ms infinite ease-in-out both;
    animation-delay: -160ms;
  }

  &:before {
    margin-right: @width-bounce-dot / 4;
    -webkit-animation-delay: -330ms;
    animation-delay: -330ms;
  }

  &:after {
    margin-left: @width-bounce-dot / 4;
    -webkit-animation-delay: 0ms;
    animation-delay: 0ms;
  }
}

@-webkit-keyframes bounce-delay {
  0%,
	50%, /* Equals 800ms. */
	100% {
    -webkit-transform: scale(0.625);
  }

  20% {
    // Equals 320ms.
    opacity: 0.87;
    -webkit-transform: scale(1);
  }
}

@keyframes bounce-delay {
  0%,
  100%,
  80% {
    transform: scale(0.625);
  }

  20% {
    opacity: 0.87;
    transform: scale(1);
  }
}
</style>

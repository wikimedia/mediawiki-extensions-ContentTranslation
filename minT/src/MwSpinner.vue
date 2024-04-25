<!-- Three bouncing dots based progress indicator. -->
<!-- Copied from app/src/lib/mediawiki.ui/components/MWSpinner/MWSpinner.vue -->
<template>
	<div class="mw-ui-spinner">
		<div class="mw-ui-spinner__bounce"></div>
	</div>
</template>

<script>
const { defineComponent } = require( 'vue' );

// @vue/component
module.exports = defineComponent( {
	name: 'MwSpinner'
} );
</script>

<style lang="less">
@import "mediawiki.skin.variables.less";

@width-bounce-dot: 1em;

.mw-ui-spinner {
  margin: 10px auto 0;
  width: @width-bounce-dot * 3; // Equals to width and margins.
  white-space: nowrap;

  .mw-ui-spinner__bounce,
  &:before,
  &:after {
    content: "";
    background-color: @color-placeholder;
    display: inline-block;
    width: @width-bounce-dot;
    height: @width-bounce-dot;
    border-radius: @border-radius-circle;
    animation: bounce-delay 1600ms infinite ease-in-out both;
    animation-delay: -160ms;
  }

  &:before {
    -webkit-animation-delay: -330ms;
    animation-delay: -330ms;
  }

  &:after {
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

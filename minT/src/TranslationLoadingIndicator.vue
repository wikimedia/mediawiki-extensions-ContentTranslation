<template>
	<div class="translation-viewer__loading-indicator">
		<cdx-icon :icon="cdxIconRobot"></cdx-icon>
		<cdx-icon :icon="cdxIconEllipsis"></cdx-icon>
	</div>
</template>

<script>
const { defineComponent } = require( 'vue' );
const { CdxIcon } = require( '@wikimedia/codex' );

const { cdxIconEllipsis, cdxIconRobot } = require( './icons.json' );
// @vue/component
module.exports = defineComponent( {
	name: 'TranslationLoadingIndicator',
	components: { CdxIcon },
	setup() {
		return { cdxIconEllipsis, cdxIconRobot };
	}
} );
</script>

<style lang="less">
@import "mediawiki.skin.variables.less";

@keyframes loading-indicator-background-animation {
	0% {
		background-color: @background-color-interactive-subtle;
	}
	100% {
		background-color: @background-color-disabled-subtle;
	}
}

.translation-viewer__loading-indicator {
	padding: @spacing-25 @spacing-50;
	margin-block: @spacing-50;
	animation: loading-indicator-background-animation 1s linear infinite alternate;

	.cdx-icon {
		color: @color-subtle;
		&:first-of-type {
			margin-right: @spacing-50;
		}
	}
}
</style>

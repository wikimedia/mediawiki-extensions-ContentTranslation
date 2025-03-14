<template>
	<div
		class="translation-viewer__section-contents"
	>
		<template
			v-for="( subSectionGroup, sIndex ) in section.subSectionGroups"
			:key="`subSectionGroup-${sIndex}`"
		>
			<!-- eslint-disable vue/no-v-html -->
			<div
				v-if="!!section.subSectionGroupTranslations[sIndex]"
				v-html="section.subSectionGroupTranslations[sIndex]"
			></div>
			<!-- eslint-enable -->
			<div
				v-else-if="section.isSubSectionGroupTranslationFailed( sIndex )"
				class="translation-viewer__failed-subsection-group"
			>
				<div>
					<cdx-icon :icon="cdxIconRobot"></cdx-icon>
					<span>
						{{ $i18n( 'ax-cx-failed-translation-label' ).text() }}
					</span>
				</div>
				<cdx-button
					weight="quiet"
					@click="refreshTranslation( section, sIndex )"
				>
					<cdx-icon :icon="cdxIconReload"></cdx-icon>
				</cdx-button>
			</div>
			<skeleton-loader
				v-else-if="section.hasSubSectionGroupInfobox( sIndex )"
			></skeleton-loader>
			<translation-loading-indicator
				v-else-if="shouldDisplayLoadingIndicator( sIndex )"
			></translation-loading-indicator>
		</template>
	</div>
</template>

<script>
const { defineComponent } = require( 'vue' );
const TranslationLoadingIndicator = require( './TranslationLoadingIndicator.vue' );
const SkeletonLoader = require( './SkeletonLoader.vue' );
const { CdxIcon, CdxButton } = require( '@wikimedia/codex' );
const { cdxIconRobot, cdxIconReload } = require( './icons.json' );
const PageSection = require( './pageSection.js' );
const useSectionTranslate = require( './useSectionTranslate.js' );

// @vue/component
module.exports = defineComponent( {
	name: 'SectionContentTranslation',
	components: { CdxIcon, CdxButton, TranslationLoadingIndicator, SkeletonLoader },
	props: {
		section: {
			type: PageSection,
			required: true
		}
	},
	emits: [ 'refresh-translation' ],
	setup( props ) {
		const { translateSubSectionGroup } = useSectionTranslate();

		/**
		 * @param {PageSection} section
		 * @param {number} subSectionGroupIndex
		 * @return {Promise}
		 */
		const refreshTranslation = ( section, subSectionGroupIndex ) => translateSubSectionGroup(
			section,
			subSectionGroupIndex
		);

		const shouldDisplayLoadingIndicator = ( index ) => {
			// if this is the first subsection group, loading indicator should always be displayed
			if ( index === 0 ) {
				return true;
			}

			// if the previous subsection translation request is completed, successfully or not
			// or the previous subsection translation is still loading,
			// but it has an infobox (skeleton loader)
			return props.section.isSubSectionGroupTranslationDone( index - 1 ) ||
				props.section.hasSubSectionGroupInfobox( index - 1 );
		};

		return {
			cdxIconReload,
			cdxIconRobot,
			refreshTranslation,
			shouldDisplayLoadingIndicator
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.translation-viewer__failed-subsection-group {
	background-color: @background-color-error-subtle;
	color: @color-error;
	display: flex;
	justify-content: space-between;
	font-weight: @font-weight-bold;
	padding: @spacing-50 @spacing-100;
	margin-bottom: @spacing-50;

	.cdx-icon {
		color: @color-error;
		margin-inline-end: @spacing-50;
	}
}
</style>

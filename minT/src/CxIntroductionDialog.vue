<template>
	<cdx-dialog
		class="ax-cx-introduction-summary"
		:open="modelValue"
		:title="$i18n( 'ax-cx-introduction-dialog-title' ).text()"
		:primary-action="primaryAction"
		:use-close-button="true"
		@update:open="close"
		@primary="onPrimaryAction"
	>
		<p>
			{{ $i18n( 'ax-cx-introduction-summary' ) }}
		</p>
		<div class="ax-cx-introduction-summary__information">
			<cdx-icon :icon="cdxIconRobot"></cdx-icon>
			<p>{{ $i18n( 'ax-cx-introduction-information-accuracy' ) }}</p>
		</div>
		<div class="ax-cx-introduction-summary__information">
			<cdx-icon :icon="cdxIconUserGroup"></cdx-icon>
			<p>{{ $i18n( 'ax-cx-introduction-information-expand' ) }}</p>
		</div>
		<div class="ax-cx-introduction-summary__information">
			<cdx-icon :icon="cdxIconEdit"></cdx-icon>
			<p>{{ $i18n( 'ax-cx-introduction-information-correct' ) }}</p>
		</div>
	</cdx-dialog>
</template>

<script>
const { CdxDialog, CdxIcon } = require( '@wikimedia/codex' );
const { defineComponent } = require( 'vue' );
const {
	cdxIconRobot,
	cdxIconEdit,
	cdxIconUserGroup
} = require( './icons.json' );

module.exports = defineComponent( {
	name: 'CxIntroductionDialog',
	components: {
		CdxDialog,
		CdxIcon
	},
	props: {
		modelValue: {
			type: Boolean,
			required: true
		},
		cxUrl: {
			type: String,
			default: null
		}
	},
	emits: [ 'update:modelValue', 'accept', 'reject' ],
	setup( props, context ) {
		const updateOpen = ( value ) => context.emit( 'update:modelValue', value );
		const primaryAction = {
			label: mw.msg( 'ax-cx-introduction-dialog-action' ),
			actionType: 'progressive'
		};

		const close = () => {
			context.emit( 'reject' );
			updateOpen( false );
		};

		const onPrimaryAction = () => {
			context.emit( 'accept' );
			updateOpen( false );
			location.href = props.cxUrl;
		};

		return {
			cdxIconRobot,
			cdxIconEdit,
			cdxIconUserGroup,
			primaryAction,
			close,
			onPrimaryAction
		};
	}
} );
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.cdx-dialog-backdrop:has(.ax-cx-introduction-summary) {
	background-color: @background-color-backdrop-dark;
}

.ax-cx-introduction-summary {
	.cdx-dialog__body > p {
		margin-bottom: @spacing-50;
	}

	&__information {
		display: flex;
		gap: 10px;

		p {
			margin-top: 0;
		}
	}
}
</style>

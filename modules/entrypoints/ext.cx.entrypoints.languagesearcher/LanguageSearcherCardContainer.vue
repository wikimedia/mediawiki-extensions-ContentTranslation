<template>
	<div class="language-searcher-card-container">
		<a
			v-for="entrypoint in entrypoints"
			:key="entrypoint.className"
			href=""
			target="_blank"
			class="entrypoint-card"
			:class="entrypoint.className"
		>
			<span class="cdx-card">
				<span class="cdx-card__icon" :class="entrypoint.iconClass"></span>
				<span class="cdx-card__text">
					<span class="cdx-card__text__title">
						{{ entrypoint.cardTitle }}
					</span>
					<span class="cdx-card__text__description">
						{{ entrypoint.cardDescription }}
					</span>
				</span>
			</span>
		</a>
	</div>
</template>

<script>
// @vue/component
module.exports = {
	name: 'LanguageSearcherCardContainer',
	props: {
		entrypoints: {
			type: Array,
			required: true
		}
	}
};
</script>

<style lang="less">
@import 'mediawiki.skin.variables.less';

.entrypoint-card:not(:last-of-type) {
  display: block;
  margin-bottom: @spacing-100;
}

.entrypoint-card-icon--add {
  .cdx-mixin-css-icon( @cdx-icon-add );
}

.entrypoint-card-icon--robot {
  .cdx-mixin-css-icon( @cdx-icon-robot );
}
</style>

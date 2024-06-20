<template>
	<div class="infobox-skeleton-loader">
		<div class="skeleton infobox-skeleton-loader__image-placeholder"></div>
		<div class="skeleton infobox-skeleton-loader__text"></div>
		<div class="skeleton infobox-skeleton-loader__text"></div>
		<div class="skeleton infobox-skeleton-loader__fat-text"></div>
	</div>
</template>

<script>
const { defineComponent } = require( 'vue' );

module.exports = defineComponent( { name: 'SkeletonLoader' } );
</script>

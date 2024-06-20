const { createApp, h } = require( 'vue' );
const SkeletonLoader = require( './SkeletonLoader.vue' );

/**
 * This composable returns the "createSkeletonLoader" method that creates and returns
 * an HTML string, that implements a skeleton loader. Skeleton loader is a placeholder
 * div with a ripple effect, used to indicate that the component that will take that
 * place, is currently loading.
 *
 * @return {{createSkeletonLoader: (function(): string)}}
 */
const useSkeletonLoader = () => {
	const createSkeletonLoader = () => {
		const container = document.createElement( 'div' );

		const app = createApp( { render() {
			return h( SkeletonLoader );
		} } );
		app.mount( container );

		return container.innerHTML;
	};

	return { createSkeletonLoader };
};

module.exports = useSkeletonLoader;

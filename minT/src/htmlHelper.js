/**
 * @param {HTMLElement} sectionElement
 * @return {boolean}
 */
const hasInfobox = ( sectionElement ) => Array.from( sectionElement.children ).some( ( node ) => node.classList.contains( 'infobox' ) );

const hiddenTags = [ 'style', 'meta', 'link' ];

/**
 * @param {HTMLElement} node
 * @return {boolean}
 */
const isTransclusionNode = ( node ) => !!(
	node.attributes.typeof &&
	node.getAttribute( 'typeof' ).match( /(^|\s)(mw:Transclusion|mw:Placeholder)\b/ )
);

/**
 * @param {HTMLElement} node
 * @return {boolean}
 */
const isHiddenNode = ( node ) => hiddenTags.includes( node.tagName.toLowerCase() ) ||
	node.style.display === 'none' ||
	!node.textContent.trim() ||
	isTransclusionNode( node );

module.exports = { hasInfobox, isHiddenNode };

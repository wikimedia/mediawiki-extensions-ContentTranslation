/**
 * @class
 *
 * @constructor
 * @param {HTMLNode} $sourceCol The column for displaying the source document
 * @param {HTMLNode} $targetCol The column for displaying the target surface
 */
ve.ui.CXTranslation = function VeUiCXTranslation( $sourceCol, $targetCol ) {
	this.$sourceCol = $sourceCol;
	this.$targetCol = $targetCol;
	this.throttleAlignSectionPairs = OO.ui.throttle(
		this.alignSectionPairs.bind( this ),
		500
	);
};

/* Inheritance */

OO.initClass( ve.ui.CXTranslation );

/* Static methods */

ve.ui.CXTranslation.static.isSegmentNode = function ( node ) {
	return node.tagName.toLowerCase() === 'span' && node.classList.contains( 'cx-segment' );
};

ve.ui.CXTranslation.static.alignSectionPair = function ( sectionId ) {
	var offsetTop,
		sourceNode = document.getElementById( sectionId ),
		targetNode = document.getElementById( 'cx' + sectionId );

	if ( !sourceNode || !targetNode ) {
		return;
	}
	sourceNode.style.marginTop = '';
	targetNode.style.marginTop = '';

	offsetTop = Math.max( sourceNode.offsetTop, targetNode.offsetTop );
	sourceNode.style.marginTop = ( offsetTop - sourceNode.offsetTop ) + 'px';
	targetNode.style.marginTop = ( offsetTop - targetNode.offsetTop ) + 'px';
};

/* Methods */

ve.ui.CXTranslation.prototype.alignSectionPairs = function () {
	var alignSectionPair = this.constructor.static.alignSectionPair;

	this.$sourceCol[ 0 ].childNodes.forEach( function ( node ) {
		if ( node.id ) {
			alignSectionPair( node.id );
		}
	} );
};

ve.ui.CXTranslation.prototype.setSourceAndBuildTarget = function ( sourceHtml, targetHtml, config ) {
	function restructure( doc ) {
		var root, i, len, node, sectionNode;
		// rewrite IDs
		$( doc ).find( '[id]' ).each( function ( i, node ) {
			node.setAttribute( 'id', 'cx' + node.getAttribute( 'id' ) );
		} );
		root = doc.body.firstChild;
		for ( i = 0, len = root.childNodes.length; i < len; i++ ) {
			node = root.childNodes[ i ];
			if (
				node.nodeType !== Node.ELEMENT_NODE ||
				node.tagName.toLowerCase() === 'meta'
			) {
				continue;
			}
			if ( node.getAttribute( 'typeof' ) === 'mw:Transclusion' ) {
				// TODO: handle more systematically
				continue;
			}
			sectionNode = doc.createElement( 'section' );
			root.replaceChild( sectionNode, node );
			sectionNode.appendChild( node );
		}
		return doc;
	}
	this.$sourceCol.empty().html( sourceHtml );
	this.targetSurface = new ve.ui.CXSurface(
		ve.dm.converter.getModelFromDom(
			restructure( ve.createDocumentFromHtml( targetHtml ) ),
			{
				lang: $.i18n().locale,
				dir: $( 'body' ).css( 'direction' )
			}
		),
		$.extend( { mode: 'visual' }, config )
	);
	this.targetSurface.model.documentModel.connect( this, {
		transact: 'throttleAlignSectionPairs'
	} );
	this.$targetCol.append( this.targetSurface.$element );
	this.setupHover();
	return this.targetSurface;
};

ve.ui.CXTranslation.prototype.setupHover = function () {
	var cxTranslation = this,
		isSegmentNode = this.constructor.static.isSegmentNode;
	this.targetSurface.getView().$element.on( 'mouseover', function ( ev ) {
		var segmentId;
		if ( !isSegmentNode( ev.target ) ) {
			return;
		}
		segmentId = ev.target.dataset.segmentid;
		ev.target.classList.add( 'cx-highlight' );
		cxTranslation.getSourceSentenceSegment( segmentId ).classList.add( 'cx-highlight' );
		cxTranslation.throttleAlignSectionPairs();
	} );
	this.targetSurface.getView().$element.on( 'mouseout', function ( ev ) {
		var segmentId;
		if ( !isSegmentNode( ev.target ) ) {
			return;
		}
		segmentId = ev.target.dataset.segmentid;
		ev.target.classList.remove( 'cx-highlight' );
		cxTranslation.getSourceSentenceSegment( segmentId ).classList.remove( 'cx-highlight' );
		cxTranslation.throttleAlignSectionPairs();
	} );
};

ve.ui.CXTranslation.prototype.getSourceSentenceSegment = function ( segmentId ) {
	if ( typeof segmentId !== 'string' || !segmentId.match( /^[0-9]+$/ ) ) {
		throw new Error( 'Invalid segment Id: ' + segmentId );
	}
	return this.$sourceCol.find( '.cx-segment[data-segmentid=' + segmentId + ']' )[ 0 ];
};

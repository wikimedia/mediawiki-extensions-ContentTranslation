QUnit.module( 'mw.cx.util', QUnit.newMwEnvironment( {
	beforeEach: function () {
		mw.config.set( 'wgUserName', 'TestUser' );
	}
} ) );

QUnit.test.each( '.getTitleForNamespace()', {
	'Main namespace to main namespace': {
		title: 'Oxygen',
		namespace: 0,
		targetTitle: 'Oxygen'
	},
	'User namespace.': {
		title: 'Oxygen',
		namespace: 2,
		targetTitle: 'User:TestUser/Oxygen'
	},
	'User namespace to main': {
		title: 'User:TestUser/Oxygen',
		namespace: 0,
		targetTitle: 'Oxygen'
	},
	'User namespace to Talk namespace': {
		title: 'User:TestUser/Oxygen',
		namespace: 1,
		targetTitle: 'Talk:Oxygen'
	},
	'User namespace to User namespace': {
		title: 'User:TestUser/Oxygen',
		namespace: 2,
		targetTitle: 'User:TestUser/Oxygen'
	},
	'Talk namespace to User namespace': {
		title: 'Talk:Oxygen',
		namespace: 2,
		targetTitle: 'User:TestUser/Oxygen'
	},
	'Talk namespace to Talk namespace': {
		title: 'Talk:Oxygen',
		namespace: 1,
		targetTitle: 'Talk:Oxygen'
	}
}, function ( assert, data ) {
	assert.deepEqual(
		mw.cx.getTitleForNamespace( data.title, data.namespace ),
		data.targetTitle
	);
} );

QUnit.test( '.getTitleForNamespace() [invalid]', function ( assert ) {
	assert.throws(
		mw.cx.getTitleForNamespace.bind( this, '::', 0 ),
		'Error thrown for invalid title'
	);
} );

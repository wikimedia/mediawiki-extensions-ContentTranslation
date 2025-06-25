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
}, ( assert, data ) => {
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

QUnit.test.each( '.calculateUnmodifiedContent()', {
	'No modification': {
		string1: 'a b c d',
		string2: 'a b c d',
		language: 'en',
		result: 1
	},
	'A token was added': {
		string1: 'a b c d',
		string2: 'a b c d e',
		language: 'en',
		result: 0.8
	},
	'A token was deleted': {
		string1: 'a b c d',
		string2: 'a b c',
		language: 'en',
		result: 0.75
	},
	'All tokens modified': {
		string1: 'a b c d e',
		string2: 'A B C D E',
		language: 'en',
		result: 0
	},
	'A character modified for Chinese': {
		string1: '典范条目',
		string2: '典闻动态',
		language: 'zh',
		result: 0.25
	},
	'3 token were added, one modified': {
		string1: 'a b c d e.',
		string2: 'a B c d e. f g h',
		language: 'en',
		result: 0.5
	},
	'whitespace does not count as a token': {
		string1: 'foo',
		string2: '   ',
		language: 'en',
		result: 0
	},
	'If both are blank, return 0': {
		string1: '',
		string2: '',
		language: 'en',
		result: 0
	}
}, ( assert, data ) => {
	assert.deepEqual(
		mw.cx.calculateUnmodifiedContent(
			data.string1,
			data.string2,
			data.language
		),
		data.result
	);
} );

QUnit.module( 'mw.cx.util', QUnit.newMwEnvironment( {
	setup: function () {
		mw.config.set( 'wgUserName', 'TestUser' );
	}
} ) );

/* Tests */
QUnit.test( 'Title evaluation with namespace change', function ( assert ) {
	var tests, i;

	tests = [
		{
			title: 'Oxygen',
			namespace: 0,
			targetTitle: 'Oxygen',
			description: 'Main namespace to main namespace'
		},
		{
			title: 'Oxygen',
			namespace: 2,
			targetTitle: 'User:TestUser/Oxygen',
			description: 'User namespace.'
		},
		{
			title: 'User:TestUser/Oxygen',
			namespace: 0,
			targetTitle: 'Oxygen',
			description: 'User namespace to main'
		},
		{
			title: 'User:TestUser/Oxygen',
			namespace: 1,
			targetTitle: 'Talk:Oxygen',
			description: 'User namespace to Talk namespace'
		},
		{
			title: 'User:TestUser/Oxygen',
			namespace: 2,
			targetTitle: 'User:TestUser/Oxygen',
			description: 'User namespace to User namespace'
		},
		{
			title: 'Talk:Oxygen',
			namespace: 2,
			targetTitle: 'User:TestUser/Oxygen',
			description: 'Talk namespace to User namespace'
		},
		{
			title: 'Talk:Oxygen',
			namespace: 1,
			targetTitle: 'Talk:Oxygen',
			description: 'Talk namespace to Talk namespace'
		}
	];

	for ( i = 0; i < tests.length; i++ ) {
		assert.deepEqual(
			mw.cx.getTitleForNamespace( tests[ i ].title, tests[ i ].namespace ),
			tests[ i ].targetTitle,
			tests[ i ].description
		);
	}

	assert.throws(
		mw.cx.getTitleForNamespace.bind( this, '::', 0 ),
		'Error thrown for invalid title'
	);
} );

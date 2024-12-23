const Vue = require( 'vue' );
const PublishFeedbackComponent = require( './PublishFeedback.vue' );

const panel = document.createElement( 'section' );
panel.className = 'sx-follow-up-panels';
let container = document.getElementById( 'mw-mf-page-center' );
container = container || document.body;
container.appendChild( panel );

Vue.createMwApp( PublishFeedbackComponent ).mount( panel );

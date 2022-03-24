var Vue = require("vue");
var PublishFeedbackComponent = require("./PublishFeedback.vue");

var panel = document.createElement("section");
panel.className = "sx-follow-up-panels";
var container = document.getElementById("mw-mf-page-center");
container = container || document.body;
container.appendChild(panel);

Vue.createMwApp(PublishFeedbackComponent).mount(panel);

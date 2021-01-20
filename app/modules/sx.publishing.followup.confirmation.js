var Vue = require("vue");
var PublishFeedbackComponent = require("./PublishFeedback.vue");
var PublishFeedbackClass = Vue.extend(PublishFeedbackComponent);

var panel = document.createElement("section");
panel.className = "sx-follow-up-panels";
var container = document.getElementById("mw-mf-page-center");
container = container || document.body;
container.appendChild(panel);
new PublishFeedbackClass({ el: panel });

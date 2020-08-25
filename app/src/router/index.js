import Vue from "vue";
import VueRouter from "vue-router";
import {
  Dashboard,
  SXArticleSelector,
  SXSectionSelector,
  SXContentComparator,
  SXSentenceSelector,
  SXQuickTutorial
} from "@/views";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "dashboard",
    component: Dashboard,
    params: true,
    meta: { workflowStep: 0 }
  },
  {
    path: "/sx",
    name: "sx-article-selector",
    component: SXArticleSelector,
    params: true,
    meta: { workflowStep: 1 }
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: SXSectionSelector,
    params: true,
    meta: { workflowStep: 2 }
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: SXContentComparator,
    params: true,
    meta: { workflowStep: 3 }
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: SXQuickTutorial,
    params: true,
    meta: { workflowStep: 4 }
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: SXSentenceSelector,
    params: true,
    meta: { workflowStep: 5 }
  },
  {
    path: "*",
    name: "404",
    component: Dashboard,
    params: true,
    meta: { workflowStep: 0 }
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;

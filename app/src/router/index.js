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
    params: true
  },
  {
    path: "/sx",
    name: "sx-article-selector",
    component: SXArticleSelector,
    params: true
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: SXSectionSelector,
    params: true
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: SXContentComparator,
    params: true
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: SXQuickTutorial,
    params: true
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: SXSentenceSelector,
    params: true
  },
  {
    path: "*",
    name: "404",
    component: Dashboard,
    params: true
  }
];

const router = new VueRouter({
  mode: "hash",
  base: "/wiki/Special:ContentTranslation",
  routes
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import {
  Dashboard,
  SXTranslationConfirmer,
  SXSectionSelector,
  SXContentComparator,
  SXSentenceSelector,
  SXQuickTutorial,
  SXEditor,
  SXPublisher,
  SXArticleSearch,
} from "@/views";
import { useStore } from "vuex";
import userApi from "@/wiki/mw/api/user";
import AssertUserError from "@/utils/errors/assertUserError";

const routes = [
  {
    path: "",
    name: "dashboard",
    component: Dashboard,
    meta: { workflowStep: 0 },
  },
  {
    path: "/sx/article-search",
    name: "sx-article-search",
    component: SXArticleSearch,
    meta: { workflowStep: 0.5 },
  },
  {
    path: "/sx",
    name: "sx-translation-confirmer",
    component: SXTranslationConfirmer,
    props: (route) => ({
      eventSource: route.query.eventSource,
    }),
    meta: { workflowStep: 1 },
  },
  {
    path: "/sx/section-selector",
    name: "sx-section-selector",
    component: SXSectionSelector,
    meta: { workflowStep: 2 },
  },
  {
    path: "/sx/content-comparator",
    name: "sx-content-comparator",
    component: SXContentComparator,
    meta: { workflowStep: 3 },
  },
  {
    path: "/sx/quick-tutorial",
    name: "sx-quick-tutorial",
    component: SXQuickTutorial,
    meta: { workflowStep: 3.5 },
  },
  {
    path: "/sx/sentence-selector",
    name: "sx-sentence-selector",
    component: SXSentenceSelector,
    meta: { workflowStep: 4 },
  },
  {
    path: "/sx/sx-editor",
    name: "sx-editor",
    component: SXEditor,
    meta: { workflowStep: 4.5 },
  },
  {
    path: "/sx/sx-publisher",
    name: "sx-publisher",
    component: SXPublisher,
    meta: { workflowStep: 5 },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Dashboard,
    meta: { workflowStep: 0 },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * Checks before each redirect that redirect is coming
 * from last required step. When no previous step exists
 * it redirects user to the beginning of the workflow (dashboard)
 */
router.beforeEach((to, from, next) => {
  const store = useStore();
  store.commit("application/setPreviousRoute", from.name);

  if (!mw.user.isAnon()) {
    userApi.assertUser().catch((error) => {
      if (error instanceof AssertUserError) {
        store.commit("application/setIsLoginDialogOn", true);
      }
    });
  }

  if (!!to.query.force) {
    next();

    return;
  }
  const fromStep = from.meta.workflowStep;
  const toStep = to.meta.workflowStep;

  if (isNaN(fromStep) && toStep >= 1) {
    next({ name: "dashboard" });

    return;
  }

  /**
   * Optional intermediate steps (e.g. SXQuickTutorial) can have decimal values
   * to indicate that there are not required for workflow. This way we only need
   * to check if previous required step (which should have an integer value) has
   * already been visited
   */
  const stepsDifference = Math.ceil(toStep) - Math.floor(fromStep);

  if (stepsDifference > 1) {
    const previousRequiredStep = Math.ceil(toStep) - 1;
    const previousRequiredRoute = routes.find(
      (route) => route.meta.workflowStep === previousRequiredStep
    );
    next({ name: previousRequiredRoute.name });

    return;
  }
  next();
});

router.afterEach((to, from) => {
  const toStep = to.meta.workflowStep;
  const fromStep = from.meta.workflowStep;
  to.meta.transitionName =
    toStep < fromStep
      ? "mw-ui-animation-slide-end"
      : "mw-ui-animation-slide-start";
});

export default router;

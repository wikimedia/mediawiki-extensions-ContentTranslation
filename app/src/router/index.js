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
import useURLHandler from "@/composables/useURLHandler";
import useUrlTranslationStart from "@/composables/useUrlTranslationStart";

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
 * @param {string} toRoute
 * @param {string} desiredRoute
 * @param {NavigationGuardNext} next
 */
const redirectToRouteIfNeeded = (toRoute, desiredRoute, next) => {
  if (toRoute === desiredRoute) {
    next();
  } else {
    next({ name: desiredRoute });
  }
};

/**
 *
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string} pageTitle
 * @return {string|null}
 */
const getTranslationCookie = (sourceLanguage, targetLanguage, pageTitle) => {
  let name =
    "cx_" +
    btoa(
      encodeURIComponent([pageTitle, sourceLanguage, targetLanguage].join("_"))
    );
  // Remove all characters that are not allowed in cookie name: ( ) < > @ , ; : \ " / [ ] ? = { }.
  name = name.replace(/[()<>@,;\\[\]?={}]/g, "");

  return mw.cookie.get(name, "");
};

/**
 * Checks before each redirect that redirect is coming
 * from last required step. When no previous step exists
 * it redirects user to the beginning of the workflow (dashboard)
 */
router.beforeEach((to, from, next) => {
  const store = useStore();

  if (!mw.user.isAnon()) {
    userApi.assertUser().catch((error) => {
      if (error instanceof AssertUserError) {
        store.commit("application/setIsLoginDialogOn", true);
      }
    });
  }

  store.commit("application/setPreviousRoute", from.name);

  // If this is not the first navigation within the application, continue as usual
  if (!!from.name) {
    next();

    return;
  }

  const startTranslationFromUrl = useUrlTranslationStart();

  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: pageTitle,
    clearTranslationURLParameters,
  } = useURLHandler();

  const areTranslationParamsSet = !!(
    sourceLanguage.value &&
    targetLanguage.value &&
    pageTitle.value
  );

  // first landing on the application, directly to the confirmation step
  if (areTranslationParamsSet) {
    // base64 encode the name to get cookie name.
    const translationCookie = getTranslationCookie(
      sourceLanguage.value,
      targetLanguage.value,
      pageTitle.value
    );

    if (!!translationCookie) {
      const desiredRouteName =
        to.name === "sx-quick-tutorial"
          ? "sx-quick-tutorial"
          : "sx-sentence-selector";
      redirectToRouteIfNeeded(to.name, desiredRouteName, next);
    } else {
      // When the requested step in the URL is different from "sx-translation-confirmer", this code runs twice.
      // Call the method to handle translation start from url, only before actually navigating to the Confirmation step.
      if (to.name === "sx-translation-confirmer") {
        startTranslationFromUrl();
      }
      redirectToRouteIfNeeded(to.name, "sx-translation-confirmer", next);
    }

    return;
  }
  clearTranslationURLParameters();
  redirectToRouteIfNeeded(to.name, "dashboard", next);
});

router.afterEach((to, from) => {
  if (!from.name) {
    // don't transition on initial load
    return;
  }
  const toStep = to.meta.workflowStep;
  const fromStep = from.meta.workflowStep;
  to.meta.transitionName =
    toStep < fromStep
      ? "mw-ui-animation-slide-end"
      : "mw-ui-animation-slide-start";
});

export default router;

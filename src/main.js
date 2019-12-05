// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";
import NProgress from "nprogress";
import "~/assets/css/custom_nprogress.css";
require("typeface-lato");

import DefaultLayout from "~/layouts/Default.vue";
import ContainerConstrained from "~/components/layout/ContainerConstrained.vue";
import AppButton from "~/components/ui/AppButton.vue";
import TagContainer from "~/components/layout/TagContainer.vue";
import ProjectTag from "~/components/ui/ProjectTag.vue";

import IconBase from "~/components/common/IconBase.vue";
import IconUser from "~/components/icons/IconUser.vue";
import IconClose from "~/components/icons/IconClose.vue";
import IconVerified from "~/components/icons/IconVerified.vue";
import IconBack from "~/components/icons/IconBack.vue";
import IconArrowRight from "~/components/icons/IconArrowRight.vue";
import IconPlay from "~/components/icons/IconPlay.vue";
import IconLogout from "~/components/icons/IconLogout.vue";
import IconCollection from "~/components/icons/IconCollection.vue";
import IconMap from "~/components/icons/IconMap.vue";
import IconDashboard from "~/components/icons/IconDashboard.vue";
import IconInbox from "~/components/icons/IconInbox.vue";
import IconDonations from "~/components/icons/IconDonations.vue";
import IconSettings from "~/components/icons/IconSettings.vue";
import IconPayment from "~/components/icons/IconPayment.vue";
import IconAnalytics from "~/components/icons/IconAnalytics.vue";
import IconNotifications from "~/components/icons/IconNotifications.vue";
import IconTrash from "~/components/icons/IconTrash.vue";
import IconCheck from "~/components/icons/IconCheck.vue";
import IconCheveronDown from "~/components/icons/IconCheveronDown.vue";
import IconLocation from "~/components/icons/IconLocation.vue";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("ContainerConstrained", ContainerConstrained);

  // Global Components
  Vue.component("AppButton", AppButton);
  Vue.component("TagContainer", TagContainer);
  Vue.component("ProjectTag", ProjectTag);
  Vue.component("IconBase", IconBase);
  Vue.component("IconUser", IconUser);
  Vue.component("IconClose", IconClose);
  Vue.component("IconVerified", IconVerified);
  Vue.component("IconBack", IconBack);
  Vue.component("IconArrowRight", IconArrowRight);
  Vue.component("IconPlay", IconPlay);
  Vue.component("IconLogout", IconLogout);
  Vue.component("IconCollection", IconCollection);
  Vue.component("IconMap", IconMap);
  Vue.component("IconDashboard", IconDashboard);
  Vue.component("IconInbox", IconInbox);
  Vue.component("IconDonations", IconDonations);
  Vue.component("IconSettings", IconSettings);
  Vue.component("IconPayment", IconPayment);
  Vue.component("IconAnalytics", IconAnalytics);
  Vue.component("IconNotifications", IconNotifications);
  Vue.component("IconTrash", IconTrash);
  Vue.component("IconCheck", IconCheck);
  Vue.component("IconCheveronDown", IconCheveronDown);
  Vue.component("IconLocation", IconLocation);

  // Add attributes to BODY tag
  head.bodyAttrs = {
    class:
      "bg-green-050 text-gray-900 font-sans antialiased relative min-h-screen pb-12"
  };

  // Add a meta tag
  head.meta.push({
    name: "robots",
    content: "noindex,follow"
  });

  // Configure Vuex
  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      loggedIn: false,
      appUser: {
        name: "Allison Morrison",
        email: "alli.morrison@gmail.com",
        password: "congratulations"
      },
      modalVisible: false,
      modalComponent: null
    },
    mutations: {
      showModal(state, componentName) {
        state.modalVisible = true;
        state.modalComponent = componentName;
      },
      hideModal(state) {
        state.modalVisible = false;
        state.modalComponent = null;
      },
      userLogin(state) {
        state.loggedIn = true;
      },
      userLogout(state) {
        state.loggedIn = false;
      }
    },
    actions: {},
    getters: {},
    plugins: [
      createPersistedState({
        storage: {
          getItem: key => Cookies.get(key),
          setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
          removeItem: key => Cookies.remove(key)
        }
      })
    ]
  });

  // Configure NProgress
  NProgress.configure({ showSpinner: false });

  router.beforeEach((to, from, next) => {
    if (from.name !== null) {
      NProgress.start();
    }
    next();
  });

  router.afterEach((to, from) => {
    // NProgress
    NProgress.done();
    // Store
    appOptions.store.commit("hideModal");
  });
}

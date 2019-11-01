// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("typeface-lato");

import DefaultLayout from "~/layouts/Default.vue";
import AppButton from "~/components/ui/AppButton.vue";
import TagContainer from "~/components/layout/TagContainer.vue";
import ProjectTag from "~/components/ui/ProjectTag.vue";

import IconBase from "~/components/common/IconBase.vue";
import IconUser from "~/components/icons/IconUser.vue";
import IconClose from "~/components/icons/IconClose.vue";
import IconVerified from "~/components/icons/IconVerified.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Global Components
  Vue.component("AppButton", AppButton);
  Vue.component("TagContainer", TagContainer);
  Vue.component("ProjectTag", ProjectTag);
  Vue.component("IconBase", IconBase);
  Vue.component("IconUser", IconUser);
  Vue.component("IconClose", IconClose);
  Vue.component("IconVerified", IconVerified);

  // Add attributes to BODY tag
  head.bodyAttrs = { class: "bg-green-050 text-gray-900 font-sans antialiased relative min-h-screen pb-8" };
}

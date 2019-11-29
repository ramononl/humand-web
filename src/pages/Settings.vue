<template>
  <Layout>
    <ContainerConstrained>
      <div class="mb-6 px-6 sm:px-8 md:px-12">
        <h1>Allison Morrison</h1>
        <p class="mt-0">All your donations, news and settings in one place.</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-8/12 px-6 sm:px-8 md:px-12 py-10 flex-shrink-0">
            <ViewDashboard v-if="view === '#dashboard'"/>
            <ViewInbox v-if="view === '#inbox'"/>
            <ViewDonations v-if="view === '#donations'"/>
            <ViewSettings v-if="view === '#settings'"/>
            <ViewPayment v-if="view === '#payment'"/>
            <ViewAnalytics v-if="view === '#analytics'"/>
            <ViewNotifications v-if="view === '#notifications'"/>
          </div>
          <div class="md:w-4/12 px-6 sm:px-8 py-10 flex-shrink-0 md:border-l border-gray-300">
            <div class="border border-gray-500 rounded-lg overflow-hidden">
              <button @click="changeView('dashboard')" :class="[view === '#dashboard' ? 'active text-green-100 bg-green-500' : 'text-gray-600']" class="flex items-center w-full pl-3 pr-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">
                <IconBase :class="[view === '#dashboard' ? 'text-green-700' : 'text-gray-500']" :iconClasses="['w-6 h-6']"><IconDashboard/></IconBase>
                <span class="ml-2 font-semibold">Dashboard</span>
              </button>
              <button @click="changeView('inbox')" :class="[view === '#inbox' ? 'active text-green-100 bg-green-500' : 'text-gray-600']" class="flex items-center w-full pl-3 pr-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">
                <IconBase :class="[view === '#inbox' ? 'text-green-700' : 'text-gray-500']" :iconClasses="['w-6 h-6']"><IconInbox/></IconBase>
                <span class="ml-2 font-semibold">Inbox</span>
              </button>
              <button @click="changeView('donations')" :class="[view === '#donations' ? 'active text-green-100 bg-green-500' : 'text-gray-600']" class="flex items-center w-full pl-3 pr-4 py-2 text-left text-sm focus:outline-none">
                <IconBase :class="[view === '#donations' ? 'text-green-700' : 'text-gray-500']" :iconClasses="['w-6 h-6']"><IconDonations/></IconBase>
                <span class="ml-2 font-semibold">Donations</span>
              </button>
            </div>
            <div class="mt-6 border border-gray-500 rounded-lg overflow-hidden">
              <button @click="changeView('settings')" :class="[view === '#settings' ? 'active text-green-100 bg-green-500' : 'text-gray-600']" class="flex items-center w-full pl-3 pr-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">
                <IconBase :class="[view === '#settings' ? 'text-green-700' : 'text-gray-500']" :iconClasses="['w-6 h-6']"><IconSettings/></IconBase>
                <span class="ml-2 font-semibold">Settings</span>
              </button>
              <button @click="changeView('payment')" :class="[view === '#payment' ? 'active text-green-100 bg-green-500' : 'text-gray-600']" class="flex items-center w-full pl-3 pr-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">
                <IconBase :class="[view === '#payment' ? 'text-green-700' : 'text-gray-500']" :iconClasses="['w-6 h-6']"><IconPayment/></IconBase>
                <span class="ml-2 font-semibold">Payment</span>
              </button>
              <button @click="changeView('analytics')" :class="[view === '#analytics' ? 'active text-green-100 bg-green-500' : 'text-gray-600']" class="flex items-center w-full pl-3 pr-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">
                <IconBase :class="[view === '#analytics' ? 'text-green-700' : 'text-gray-500']" :iconClasses="['w-6 h-6']"><IconAnalytics/></IconBase>
                <span class="ml-2 font-semibold">Analytics</span>
              </button>
              <button @click="changeView('notifications')" :class="[view === '#notifications' ? 'active text-green-100 bg-green-500' : 'text-gray-600']" class="flex items-center w-full pl-3 pr-4 py-2 text-left text-sm focus:outline-none">
                <IconBase :class="[view === '#notifications' ? 'text-green-700' : 'text-gray-500']" :iconClasses="['w-6 h-6']"><IconNotifications/></IconBase>
                <span class="ml-2 font-semibold">Notifications</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContainerConstrained>
  </Layout>
</template>

<script>
import ViewDashboard from '~/components/settings/ViewDashboard.vue'
import ViewInbox from '~/components/settings/ViewInbox.vue'
import ViewDonations from '~/components/settings/ViewDonations.vue'
import ViewSettings from '~/components/settings/ViewSettings.vue'
import ViewPayment from '~/components/settings/ViewPayment.vue'
import ViewAnalytics from '~/components/settings/ViewAnalytics.vue'
import ViewNotifications from '~/components/settings/ViewNotifications.vue'

export default {
  metaInfo: {
    title: 'Settings'
  },
  components: {
    ViewDashboard, ViewInbox, ViewDonations, ViewSettings, ViewPayment, ViewAnalytics, ViewNotifications
  },
  computed: {
    view() {
      return this.$route.hash;
    }
  },
  methods: {
    changeView(selectedView) {
      this.view = selectedView;
      window.location.hash = "#" + selectedView;
    }
  },
  watch: {
    view() {
      if (location.hash) {
        this.view = window.location.hash;
      } else {
        this.view = "#dashboard";
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
>>> p {
  @apply text-gray-600;
}

>>> h3 {
  @apply mt-6 mb-3 text-sm font-bold tracking-widest uppercase text-gray-700;
}
</style>

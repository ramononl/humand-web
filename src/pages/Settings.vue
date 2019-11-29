<template>
  <Layout>
    <ContainerConstrained>
      <div class="mb-6 px-6 sm:px-8 md:px-12">
        <h1>Settings</h1>
        <p class="mt-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-8/12 px-6 sm:px-8 md:px-12 py-10 flex-shrink-0">
            <ViewDashboard v-if="view === 'dashboard'"/>
            <ViewInbox v-if="view === 'inbox'"/>
            <ViewDonations v-if="view === 'donations'"/>
            <ViewSettings v-if="view === 'settings'"/>
            <ViewPayment v-if="view === 'payment'"/>
            <ViewAnalytics v-if="view === 'analytics'"/>
            <ViewNotifications v-if="view === 'notifications'"/>
          </div>
          <div class="md:w-4/12 px-6 sm:px-8 py-10 flex-shrink-0 md:border-l border-gray-300">
            <div class="border border-gray-500 rounded-lg overflow-hidden">
              <button @click="changeView('dashboard')" :class="[view === 'dashboard' ? 'text-green-100 bg-green-500' : 'text-gray-600']" class="block w-full px-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">Dashboard</button>
              <button @click="changeView('inbox')" :class="[view === 'inbox' ? 'text-green-100 bg-green-500' : 'text-gray-600']" class="block w-full px-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">Inbox</button>
              <button @click="changeView('donations')" :class="[view === 'donations' ? 'text-green-100 bg-green-500' : 'text-gray-600']" class="block w-full px-4 py-2 text-left text-sm focus:outline-none">Donations</button>
            </div>
            <div class="mt-6 border border-gray-500 rounded-lg overflow-hidden">
              <button @click="changeView('settings')" :class="[view === 'settings' ? 'text-green-100 bg-green-500' : 'text-gray-600']" class="block w-full px-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">Settings</button>
              <button @click="changeView('payment')" :class="[view === 'payment' ? 'text-green-100 bg-green-500' : 'text-gray-600']" class="block w-full px-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">Payment</button>
              <button @click="changeView('analytics')" :class="[view === 'analytics' ? 'text-green-100 bg-green-500' : 'text-gray-600']" class="block w-full px-4 py-2 text-left text-sm focus:outline-none border-b border-gray-500">Analytics</button>
              <button @click="changeView('notifications')" :class="[view === 'notifications' ? 'text-green-100 bg-green-500' : 'text-gray-600']" class="block w-full px-4 py-2 text-left text-sm focus:outline-none">Notifications</button>
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
  data() {
    return {
      view: 'dashboard'
    }
  },
  methods: {
    changeView(selectedView) {
      this.view = selectedView;
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

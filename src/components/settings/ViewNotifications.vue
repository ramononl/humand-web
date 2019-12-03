<template>
  <div>
    <div class="flex items-center">
      <IconBase class="text-gray-500" :iconClasses="['w-10 h-10']"><IconNotifications/></IconBase>
      <h2 class="ml-2">Notifications</h2>
    </div>
    <p>Change your notification settings.</p>
    <div class="mt-4">
      <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
          Email
      </div>
      <div class="text-gray-700">
        <label class="flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            New projects are posted by organizations you follow
          </span>
        </label>
        <label class="mt-1 flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            Updates about projects you support
          </span>
        </label>
        <label class="mt-1 flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            New recommendations for you
          </span>
        </label>
        <label class="mt-1 flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            Updates from humand
          </span>
        </label>
      </div>
      <div class="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
          Push
      </div>
      <div class="text-gray-700">
        <label class="flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            New projects are posted by organizations you follow
          </span>
        </label>
        <label class="mt-1 flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            Updates about projects you support
          </span>
        </label>
        <label class="mt-1 flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            New recommendations for you
          </span>
        </label>
        <label class="mt-1 flex items-center">
          <input class="mr-2" type="checkbox" checked>
          <span>
            Updates from humand
          </span>
        </label>
      </div>
      <div class="mt-6">
        <div class="inline-block text-xs px-1 rounded border border-red-500 tracking-widest font-bold text-red-500 uppercase hover:bg-red-500 hover:text-red-100 cursor-pointer">
          Disable all notifications
        </div>
      </div>
      <AppButton buttonStyle="primary" buttonText="Save" class="mt-6"/>
    </div>
  </div>
</template>
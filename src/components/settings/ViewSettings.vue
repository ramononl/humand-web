<template>
  <div>
    <div class="flex items-center">
      <IconBase class="text-gray-500" :iconClasses="['w-10 h-10']"><IconSettings/></IconBase>
      <h2 class="ml-2">Settings</h2>
    </div>
    <p>Your personal information. Of course we respect your privacy.</p>
    <div class="mt-4">
      <div class="max-w-xs">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="title">
          Title
        </label>
        <div class="relative">
          <select class="block appearance-none w-full border text-gray-700 py-2 px-3 rounded bg-white leading-tight focus:outline-none focus:shadow-outline" id="title">
            <option>Ms</option>
            <option>Mr</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="firstname">
          First name
        </label>
        <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First name" value="Allison">
      </div>
      <div class="mt-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="lastname">
          Last name
        </label>
        <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last name" value="Morrison">
      </div>
      <div class="mt-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="username">
          Username
        </label>
        <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value="alli.m">
      </div>
      <div class="mt-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="email">
          Email
        </label>
        <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value="alli.morrison@gmail.com">
      </div>
      <div class="mt-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="phone">
          Private phone
        </label>
        <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Private phone" value="+543 677 6275">
      </div>
      <AppButton buttonStyle="primary" buttonText="Save" class="mt-6"/>
    </div>
  </div>
</template>
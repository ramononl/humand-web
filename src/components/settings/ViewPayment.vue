<template>
  <div>
    <div class="flex items-center">
      <IconBase class="text-gray-500" :iconClasses="['w-10 h-10']"><IconPayment/></IconBase>
      <h2 class="ml-2">Payment</h2>
    </div>
    <p>Change your payment method and credit card information.</p>
    <div class="mt-4">
      <div>
        <div class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Choose payment method
        </div>
        <div class="-mx-2 flex justify-between">
          <div @click="paymentMethod = 'creditCard'" class="w-1/3 mx-2">
            <div :class="[paymentMethod === 'creditCard' ? activeClasses : inactiveClasses]" class="group cursor-pointer flex flex-col items-center h-32 py-4 rounded-lg border-2">
              <div :class="[paymentMethod === 'creditCard' ? 'paymentActive' : 'payment']" class="h-16">
                <IconBase :class="[paymentMethod === 'creditCard' ? contentActive : 'text-gray-400']" :iconClasses="['w-16 h-16']"><IconPayment/></IconBase>
              </div>
              <div :class="[paymentMethod === 'creditCard' ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-500']" class="text-sm">Credit card</div>
            </div>
            <div v-if="paymentMethod === 'creditCard'" class="-mt-5 flex justify-center">
              <IconBase :iconClasses="['w-10 h-10']" class="text-orange-500"><IconCheck/></IconBase>
            </div>
          </div>
          <div @click="paymentMethod = 'payPal'" class="w-1/3 mx-2">
            <div :class="[paymentMethod === 'payPal' ? activeClasses : inactiveClasses]" class="group cursor-pointer flex flex-col items-center h-32 py-4 rounded-lg border-2">
              <div :class="[paymentMethod === 'payPal' ? 'paymentActive' : 'payment']" class="h-16 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.5 33" class="w-24">
                  <path :class="[paymentMethod === 'payPal' ? contentActive : contentInactive]" class="fill-current" d="M11.7 6.7H4.8c-.4 0-.8.4-.9.9L1.1 25.1c0 .3.2.6.5.7H5c.5 0 .9-.3.9-.8l.7-4.7c.1-.5.5-.8.9-.8h2.2c4.5 0 7.1-2.2 7.8-6.5.3-1.9 0-3.4-.9-4.4-.9-1.2-2.6-1.9-4.9-1.9zm.8 6.5c-.4 2.5-2.2 2.5-4.1 2.5h-1l.7-4.7c0-.3.3-.5.6-.5h.5c1.2 0 2.4 0 3 .7.3.5.4 1.1.3 2zm19.6-.1h-3.3c-.3 0-.5.2-.6.5l-.1.9-.2-.3c-.7-1-2.3-1.4-3.9-1.4-3.6 0-6.7 2.7-7.3 6.6-.3 1.9.1 3.8 1.2 5 1 1.2 2.4 1.7 4.1 1.7 2.9 0 4.5-1.9 4.5-1.9l-.1.9c0 .3.2.6.5.7H30c.5 0 .9-.3.9-.8l1.8-11.2c0-.4-.2-.7-.6-.7.1 0 0 0 0 0zm-4.6 6.3c-.3 1.9-1.8 3.1-3.7 3.1-1 0-1.7-.3-2.2-.9-.5-.6-.7-1.4-.5-2.3.3-1.9 1.8-3.2 3.7-3.2.9 0 1.7.3 2.2.9.5.7.7 1.5.5 2.4zm22.1-6.3h-3.3c-.3 0-.6.2-.8.4L41 20.2l-2-6.4c-.1-.4-.5-.7-.9-.7h-3.2c-.3 0-.6.3-.6.6v.2L38 24.5l-3.4 4.8c-.2.3-.1.6.1.8.1.1.2.1.3.1h3.3c.3 0 .6-.2.8-.4L50 14c.2-.3.1-.6-.1-.8-.1-.1-.2-.1-.3-.1z"/>
                  <path :class="[paymentMethod === 'payPal' ? contentActive : contentInactive]" class="fill-current" d="M60.5 6.7h-6.8c-.5 0-.9.3-.9.8L50 25c0 .3.2.6.5.7H54c.3 0 .6-.2.7-.6l.8-5c.1-.5.5-.8.9-.8h2.2c4.5 0 7.1-2.2 7.8-6.5.3-1.9 0-3.4-.9-4.4-1-1-2.8-1.7-5-1.7zm.7 6.5c-.4 2.5-2.2 2.5-4.1 2.5h-1l.7-4.6c0-.3.3-.5.6-.5h.5c1.2 0 2.4 0 3 .7.4.4.5 1 .3 1.9zm19.7-.1h-3.3c-.3 0-.5.2-.6.5l-.1.9-.2-.3c-.7-1-2.3-1.4-3.9-1.4-3.6 0-6.7 2.7-7.3 6.6-.3 1.9.1 3.8 1.2 5 1 1.2 2.4 1.7 4.1 1.7 2.9 0 4.5-1.9 4.5-1.9l-.1.9c0 .3.2.6.5.7h3c.5 0 .9-.3.9-.8l1.8-11.2c.1-.4-.1-.7-.5-.7.1 0 0 0 0 0zm-4.6 6.3c-.3 1.9-1.8 3.1-3.7 3.1-.9 0-1.7-.3-2.2-.9-.5-.6-.7-1.4-.5-2.3.3-1.9 1.8-3.2 3.7-3.2.9 0 1.7.3 2.2.9.5.7.7 1.5.5 2.4zm8.5-12.2L82 25.1c0 .3.2.6.5.7h2.9c.5 0 .9-.3.9-.8L89 7.4c0-.3-.2-.6-.5-.7H85.2c-.2 0-.4.3-.4.5z"/>
                </svg>
              </div>
              <div :class="[paymentMethod === 'payPal' ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-500']" class="text-sm">PayPal</div>
            </div>
            <div v-if="paymentMethod === 'payPal'" class="-mt-5 flex justify-center">
              <IconBase :iconClasses="['w-10 h-10']" class="text-orange-500"><IconCheck/></IconBase>
            </div>
          </div>
          <div @click="paymentMethod = 'applePay'" class="w-1/3 mx-2">
            <div :class="[paymentMethod === 'applePay' ? activeClasses : inactiveClasses]" class="group cursor-pointer flex flex-col items-center h-32 py-4 rounded-lg border-2">
              <div :class="[paymentMethod === 'applePay' ? 'paymentActive' : 'payment']" class="h-16 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 210.2" class="w-20">
                  <path :class="[paymentMethod === 'applePay' ? contentActive : contentInactive]" class="fill-current" d="M93.6 27.1C87.6 34.2 78 39.8 68.4 39c-1.2-9.6 3.5-19.8 9-26.1 6-7.3 16.5-12.5 25-12.9 1 10-2.9 19.8-8.8 27.1m8.7 13.8c-13.9-.8-25.8 7.9-32.4 7.9s-16.8-7.5-27.8-7.3A41.07 41.07 0 007.2 62.7c-15 25.8-3.9 64 10.6 85 7.1 10.4 15.6 21.8 26.8 21.4 10.6-.4 14.8-6.9 27.6-6.9s16.6 6.9 27.8 6.7c11.6-.2 18.9-10.4 26-20.8a91.21 91.21 0 0011.6-23.9c-.2-.2-22.4-8.7-22.6-34.3-.2-21.4 17.5-31.6 18.3-32.2-10-14.8-25.6-16.4-31-16.8m80.3-29v155.9h24.2v-53.3h33.5c30.6 0 52.1-21 52.1-51.4s-21.1-51.2-51.3-51.2zm24.2 20.4h27.9c21 0 33 11.2 33 30.9s-12 31-33.1 31h-27.8zM336.6 169c15.2 0 29.3-7.7 35.7-19.9h.5v18.7h22.4V90.2c0-22.5-18-37-45.7-37-25.7 0-44.7 14.7-45.4 34.9h21.8c1.8-9.6 10.7-15.9 22.9-15.9 14.8 0 23.1 6.9 23.1 19.6v8.6l-30.2 1.8c-28.1 1.7-43.3 13.2-43.3 33.2 0 20.2 15.7 33.6 38.2 33.6zm6.5-18.5c-12.9 0-21.1-6.2-21.1-15.7 0-9.8 7.9-15.5 23-16.4l26.9-1.7v8.8c0 14.6-12.4 25-28.8 25zm82 59.7c23.6 0 34.7-9 44.4-36.3L512 54.7h-24.6l-28.5 92.1h-.5l-28.5-92.1h-25.3l41 113.5-2.2 6.9c-3.7 11.7-9.7 16.2-20.4 16.2-1.9 0-5.6-.2-7.1-.4v18.7c1.4.4 7.4.6 9.2.6z"/>
                </svg>
              </div>
              <div :class="[paymentMethod === 'applePay' ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-500']" class="text-sm">Apple Pay</div>
            </div>
            <div v-if="paymentMethod === 'applePay'" class="-mt-5 flex justify-center">
              <IconBase :iconClasses="['w-10 h-10']" class="text-orange-500"><IconCheck/></IconBase>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="fullname">
          Full name
        </label>
        <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full name" value="Allison Morrison">
      </div>
      <div class="mt-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="cardnumber">
          Card number
        </label>
        <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardnumber" type="text" placeholder="Card number" value="4916-9902-5560-3984">
      </div>
      <div class="mt-4 flex">
        <div class="pr-2 w-1/2">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="month">
            Exp. month
          </label>
          <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="month" type="number" placeholder="Exp. month" value="12">
        </div>
        <div class="pl-2 w-1/2">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="year">
            Exp. year
          </label>
          <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="year" type="number" placeholder="Exp. year" value="22">
        </div>
      </div>
      <div class="mt-4">
        <div class="pr-2 w-1/2">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="cvc">
            CVC number
          </label>
          <input class="max-w-xs appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvc" type="number" placeholder="CVC number" value="495">
        </div>
      </div>
      <AppButton buttonStyle="primary" buttonText="Save" class="mt-6"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: "creditCard",
      activeClasses: "bg-gray-300 border-gray-500",
      inactiveClasses: "bg-gray-200 border-transparent hover:border-gray-300",
      contentActive: "text-gray-500",
      contentInactive: "text-gray-400 group-hover:text-gray-500"
    }
  }
}
</script>
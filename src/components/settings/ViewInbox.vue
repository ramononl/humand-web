<template>
  <div>
    <div class="flex items-center">
      <IconBase class="text-gray-500" :iconClasses="['w-10 h-10']"><IconInbox/></IconBase>
      <h2 class="ml-2">Inbox</h2>
    </div>
    <p>News about your supported projects.</p>
    <div class="mt-4 border rounded-lg overflow-hidden">
      <div class="border-b bg-orange-100 hover:bg-gray-200 cursor-pointer group">
        <div class="pl-3 pr-5 py-2 border-l-4 border-orange-500">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input class="leading-tight" type="checkbox">
              <div class="ml-2 leading-snug font-bold">
                <div>One Earth – One Ocean</div>
                <div class="text-xs">New milestone: Thanks to your ...</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-xs font-bold uppercase">Wed 11/27</div>
              <IconBase class="hidden group-hover:block ml-2 text-red-300 hover:text-red-500" :iconClasses="['w-4 h-4']"><IconTrash/></IconBase>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b bg-orange-100 hover:bg-gray-200 cursor-pointer group">
        <div class="pl-3 pr-5 py-2 border-l-4 border-orange-500">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input class="leading-tight" type="checkbox">
              <div class="ml-2 leading-snug font-bold">
                <div>Squirrels in distress!</div>
                <div class="text-xs">Squirrel hospital in Berlin Mitte ...</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-xs font-bold uppercase">Tue 11/15</div>
              <IconBase class="hidden group-hover:block ml-2 text-red-300 hover:text-red-500" :iconClasses="['w-4 h-4']"><IconTrash/></IconBase>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b hover:bg-gray-200 cursor-pointer group">
        <div class="pl-3 pr-5 py-2 border-l-4 border-transparent">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input class="leading-tight" type="checkbox">
              <div class="ml-2 leading-snug">
                <div>Squirrels in distress!</div>
                <div class="text-xs">Our new mascot</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-xs uppercase">Sat 10/20</div>
              <IconBase class="hidden group-hover:block ml-2 text-red-300 hover:text-red-500" :iconClasses="['w-4 h-4']"><IconTrash/></IconBase>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b hover:bg-gray-200 cursor-pointer group">
        <div class="pl-3 pr-5 py-2 border-l-4 border-transparent">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input class="leading-tight" type="checkbox">
              <div class="ml-2 leading-snug">
                <div>Tomorrow's primeval forests</div>
                <div class="text-xs">1.000 trees planted in Uganda</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-xs uppercase">Wed 10/02</div>
              <IconBase class="hidden group-hover:block ml-2 text-red-300 hover:text-red-500" :iconClasses="['w-4 h-4']"><IconTrash/></IconBase>
            </div>
          </div>
        </div>
      </div>
      <div class="hover:bg-gray-200 cursor-pointer group">
        <div class="pl-3 pr-5 py-2 border-l-4 border-transparent">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input class="leading-tight" type="checkbox">
              <div class="ml-2 leading-snug">
                <div>One Earth – One Ocean</div>
                <div class="text-xs">Together we are stronger</div>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-xs uppercase">Wed 09/08</div>
              <IconBase class="hidden group-hover:block ml-2 text-red-300 hover:text-red-500" :iconClasses="['w-4 h-4']"><IconTrash/></IconBase>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
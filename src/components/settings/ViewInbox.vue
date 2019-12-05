<template>
  <div>
    <div class="flex items-center">
      <IconBase class="text-gray-500" :iconClasses="['w-10 h-10']"><IconInbox/></IconBase>
      <h2 class="ml-2">Project updates</h2>
    </div>
    <p>News about your supported projects.</p>

    <div class="mt-4 rounded-lg overflow-hidden border flex">
      <g-image src="~/projects/images/oneearth_oneocean.jpg" width="150" height="150" fit="cover"/>
      <div class="p-4 leading-snug">
        <div class="text-xs uppercase">Wed 11/27</div>
        <div class="font-bold">One Earth – One Ocean</div>
        <div class="text-sm">Today we would like to present you a new film contribution from our sponsor, which summarizes our work and this time ...</div>
        <div class="mt-2 text-sm underline">Read more</div>
      </div>
    </div>
    
    <div class="mt-4 rounded-lg overflow-hidden border flex">
      <g-image src="~/projects/images/safe_the_squirrels.jpg" width="150" height="150" fit="cover"/>
      <div class="p-4 leading-snug">
        <div class="text-xs uppercase">Tue 11/15</div>
        <div class="font-bold">Squirrels in distress!</div>
        <div class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore velit perferendis quod corrupti repellat rem quidem odio, vel voluptatum.</div>
        <div class="mt-2 text-sm underline">Read more</div>
      </div>
    </div>
    
    <div class="mt-4 rounded-lg overflow-hidden border flex">
      <g-image src="~/projects/images/primeval_forests.jpg" width="150" height="150" fit="cover"/>
      <div class="p-4 leading-snug">
        <div class="text-xs uppercase">Sat 10/20</div>
        <div class="font-bold">Primeval forests</div>
        <div class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore velit perferendis quod corrupti repellat rem quidem odio, vel voluptatum.</div>
        <div class="mt-2 text-sm underline">Read more</div>
      </div>
    </div>
    
    <div class="mt-4 rounded-lg overflow-hidden border flex">
      <g-image src="~/projects/images/peace_in_rwanda.jpg" width="150" height="150" fit="cover"/>
      <div class="p-4 leading-snug">
        <div class="text-xs uppercase">Wed 10/02</div>
        <div class="font-bold">Peace in Rwanda</div>
        <div class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore velit perferendis quod corrupti repellat rem quidem odio, vel voluptatum.</div>
        <div class="mt-2 text-sm underline">Read more</div>
      </div>
    </div>
    
    <div class="mt-4 rounded-lg overflow-hidden border flex">
      <g-image src="~/projects/images/tibet_agless_wisdom.jpg" width="150" height="150" fit="cover"/>
      <div class="p-4 leading-snug">
        <div class="text-xs uppercase">Mon 09/22</div>
        <div class="font-bold">Ageless wisdom in Tibet</div>
        <div class="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore velit perferendis quod corrupti repellat rem quidem odio, vel voluptatum.</div>
        <div class="mt-2 text-sm underline">Read more</div>
      </div>
    </div>
  </div>
</template>
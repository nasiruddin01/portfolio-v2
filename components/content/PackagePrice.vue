<template>
  <div class="not-prose">
    <div class="mx-auto max-w-2xl rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-50/5 lg:mx-0 lg:flex lg:max-w-none lg:items-stretch">
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">{{ title }}</h3> 
       
        <p v-if="description" class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-500">{{ description }}</p>
        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm pb-6 leading-6 text-zinc-600 dark:text-zinc-400">
          <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-2">
            <Icon name="heroicons:check" class="h-6 w-5 flex-none text-yellow-600" />
            {{ feature }}
          </li>
        </ul>

<a class="mt-8 p-2 btn btn-primary btn-gradient btn-glow:hover" v-if="link" :href="link" target="_blank">Click Here</a>
       
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
        <div
          class="relative overflow-hidden rounded-2xl py-10 text-center ring-1 ring-inset ring-zinc-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:h-full"
          :class="[image ? 'bg-zinc-200 dark:bg-zinc-800' : 'bg-zinc-100 dark:bg-zinc-800/30']"
        >
          <div v-if="image" class="absolute inset-0 ">
            <img :src="image.src" alt="" :width="image.width" :height="image.height" class="w-full h-full object-cover">
           
          </div>
         
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import type { Image } from "~/../types/image";
interface Props {
  title: string;
  description?: string;
  includedFeatures: string[];
  link:string;
  currency?: string;
  image?: Image;
}

withDefaults(defineProps<Props>(), {
  description: "",
  currency: "USD",
});
</script>
<style lang="postcss" scoped>
.btn {
  margin-top: 1rem !important;
  font-size: 18px;
  padding: 6px 16px;
  margin: 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  border-radius: 10px;

}

.btn:hover {
  transition: all 0.4s ease;
}

.btn-primary {
  background-color: rgb(111, 76, 255);
  border: 1px solid rgb(111, 76, 255);
  color: rgb(256, 256, 256);
}.btn-glow:hover {
  box-shadow: rgba(111, 76, 255, 0.5) 0px 0px 20px 0px;
}

.btn-gradient {
  background-image: linear-gradient(to right, #5100ad, #ad004b);
  border: 0;
  color: rgba(256, 256, 256);
}

.btn-gradient-border {
  color: rgba(256, 256, 256);
  border: 2px double transparent;
  background-image: linear-gradient(rgb(13, 14, 33), rgb(13, 14, 33)),
    radial-gradient(circle at left top, rgb(1, 110, 218), rgb(217, 0, 192));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

button,
input,
option,
select {
  cursor: pointer;
}
</style>
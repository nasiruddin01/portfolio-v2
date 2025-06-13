import { defineNuxtPlugin } from "#app";
import {
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CommandLineIcon,
} from "@heroicons/vue/24/outline";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("CodeBracketIcon", CodeBracketIcon);
  nuxtApp.vueApp.component("ServerIcon", ServerIcon);
  nuxtApp.vueApp.component("CloudIcon", CloudIcon);
  nuxtApp.vueApp.component("CircleStackIcon", CircleStackIcon);
  nuxtApp.vueApp.component("RocketLaunchIcon", RocketLaunchIcon);
  nuxtApp.vueApp.component("ShieldCheckIcon", ShieldCheckIcon);
  nuxtApp.vueApp.component("SparklesIcon", SparklesIcon);
  nuxtApp.vueApp.component("CommandLineIcon", CommandLineIcon);
});

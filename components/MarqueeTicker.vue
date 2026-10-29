<template>
  <div class="w-full overflow-hidden py-4 border-y border-[#E8EDE6]">
    <div class="flex whitespace-nowrap animate-marquee">
      <span v-for="i in 3" :key="i" class="flex items-center gap-6 pr-6">
        <template v-for="(item, j) in items" :key="j">
          <span class="font-mono text-xs tracking-widest uppercase text-[#1A4435]">{{ item }}</span>
          <span class="text-[#D4F53C] font-bold text-base leading-none">✦</span>
        </template>
      </span>
    </div>
  </div>
</template>

<script setup>
const items = [
  'AI Systems', 'Voice Agents', 'Production AI', 'Riverborn',
  '10+ Products', '100K+ Users', 'AI Architecture', 'Product Strategy',
  'LLM Infrastructure', 'Creative AI', 'Startup Builder', 'COO & Co-Founder',
]
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
.animate-marquee {
  animation: marquee 22s linear infinite;
}
</style>

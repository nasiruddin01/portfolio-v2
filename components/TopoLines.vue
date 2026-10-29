<template>
  <div class="w-full overflow-hidden" style="height: 90px;">
    <svg class="w-full h-full" :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none">
      <path
        v-for="(p, i) in paths"
        :key="i"
        :d="p.d"
        fill="none"
        :stroke="i % 5 === 0 ? '#D4F53C' : '#0D2B22'"
        :stroke-width="i % 5 === 0 ? 1.2 : 0.7"
        :opacity="p.opacity"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const W = 1200
const H = 90

const t = ref(0)
const paths = ref([])
const LINE_COUNT = 14

function noise(x, y, time) {
  return (
    Math.sin(x * 0.008 + time * 0.3) * 0.5 +
    Math.sin(x * 0.015 - y * 0.04 + time * 0.5) * 0.3 +
    Math.sin(x * 0.005 + y * 0.06 + time * 0.2) * 0.2
  )
}

function buildPaths(time) {
  return Array.from({ length: LINE_COUNT }, (_, i) => {
    const baseY = (H / (LINE_COUNT + 1)) * (i + 1)
    const pts = []
    for (let x = 0; x <= W; x += 6) {
      const n = noise(x, baseY, time)
      const y = baseY + n * 22
      pts.push(x === 0 ? `M${x},${y}` : `L${x},${y}`)
    }
    return { d: pts.join(' '), opacity: 0.25 + (i / LINE_COUNT) * 0.45 }
  })
}

let raf
function tick() {
  t.value += 0.015
  paths.value = buildPaths(t.value)
  raf = requestAnimationFrame(tick)
}

onMounted(() => { paths.value = buildPaths(0); raf = requestAnimationFrame(tick) })
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

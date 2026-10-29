<template>
  <div class="w-full overflow-hidden" style="height: 80px;">
    <svg class="w-full h-full" :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none">
      <path :d="path1" fill="none" stroke="#0D2B22" stroke-width="1.5" opacity="0.35"/>
      <path :d="path2" fill="none" stroke="#0D2B22" stroke-width="1" opacity="0.2"/>
      <path :d="path3" fill="none" stroke="#D4F53C" stroke-width="2" opacity="0.75"/>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const W = 1200
const H = 80

const t = ref(0)
const path1 = ref('')
const path2 = ref('')
const path3 = ref('')

function wave(offset, amp, freq, phase) {
  const pts = []
  for (let x = 0; x <= W; x += 4) {
    const y = H / 2 + amp * Math.sin((x / W) * freq * Math.PI * 2 + t.value + phase)
    pts.push(x === 0 ? `M${x},${y}` : `L${x},${y}`)
  }
  return pts.join(' ')
}

let raf
function tick() {
  t.value += 0.018
  path1.value = wave(0, 18, 2.5, 0)
  path2.value = wave(0, 28, 1.8, 1.2)
  path3.value = wave(0, 12, 3.5, 0.6)
  raf = requestAnimationFrame(tick)
}

onMounted(() => { raf = requestAnimationFrame(tick) })
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

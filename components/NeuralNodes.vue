<template>
  <div class="w-full overflow-hidden" style="height: 200px;">
    <svg ref="svgRef" class="w-full h-full" :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="xMidYMid slice">
      <line
        v-for="(edge, i) in edges"
        :key="'e' + i"
        :x1="nodes[edge[0]].x" :y1="nodes[edge[0]].y"
        :x2="nodes[edge[1]].x" :y2="nodes[edge[1]].y"
        :stroke="edge[2] > 0.6 ? '#D4F53C' : '#0D2B22'"
        :stroke-width="edge[2] > 0.6 ? 1.5 : 0.8"
        :opacity="edge[2] * 0.6"
      />
      <circle
        v-for="(node, i) in nodes"
        :key="'n' + i"
        :cx="node.x" :cy="node.y"
        :r="node.r"
        :fill="node.lime ? '#D4F53C' : '#0D2B22'"
        :opacity="node.opacity"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const W = 1200
const H = 200
const NODE_COUNT = 40

const nodes = reactive(
  Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2.5 + 1,
    lime: Math.random() < 0.15,
    opacity: Math.random() * 0.5 + 0.4,
  }))
)

const edges = ref([])

function computeEdges() {
  const result = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 140) {
        result.push([i, j, 1 - dist / 140])
      }
    }
  }
  edges.value = result
}

let raf
function tick() {
  for (const n of nodes) {
    n.x += n.vx
    n.y += n.vy
    if (n.x < 0 || n.x > W) n.vx *= -1
    if (n.y < 0 || n.y > H) n.vy *= -1
  }
  computeEdges()
  raf = requestAnimationFrame(tick)
}

onMounted(() => { raf = requestAnimationFrame(tick) })
onBeforeUnmount(() => cancelAnimationFrame(raf))
</script>

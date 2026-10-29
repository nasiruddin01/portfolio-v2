<template>
    <div class="flex items-end h-32 md:h-40 gap-1 md:gap-2">
        <div v-for="(bar, i) in bars" :key="i" class="flex flex-col justify-end" :style="{ height: '100%' }">
            <div v-for="(capsule, j) in bar.capsules" :key="j" class="rounded-none mx-[1px] md:mx-0" :style="{
                width: '24px',
                height: '12px',
                marginBottom: '6px',
                background: capsule.color,
                opacity: capsule.active ? 0.8 : 0.15,
                transition: 'opacity 0.2s, background 0.2s'
            }"></div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'

    const colors = [
        'rgba(13, 43, 34, 0.85)',
        'rgba(13, 43, 34, 0.70)',
        'rgba(13, 43, 34, 0.55)',
        'rgba(13, 43, 34, 0.40)',
        'rgba(212, 245, 60, 0.80)',
        'rgba(212, 245, 60, 0.60)',
        'rgba(159, 206, 190, 0.70)',
        'rgba(13, 43, 34, 0.25)',
        'rgba(13, 43, 34, 0.15)',
        'rgba(13, 43, 34, 0.08)',
    ]

    const barCount = 84
    const maxCapsules = 8

    function randomBar() {
        const height = Math.floor(Math.random() * (maxCapsules - 3)) + 3
        return Array.from({ length: maxCapsules }, (_, i) => ({
            color: colors[(i + Math.floor(Math.random() * colors.length)) % colors.length],
            active: i >= maxCapsules - height,
        }))
    }

    const bars = ref(
        Array.from({ length: barCount }, () => ({
            capsules: randomBar(),
        }))
    )

    let interval
    onMounted(() => {
        interval = setInterval(() => {
            bars.value = Array.from({ length: barCount }, () => ({
                capsules: randomBar(),
            }))
        }, 400)
    })
    onBeforeUnmount(() => clearInterval(interval))
</script>
<template>
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b" style="background-color: rgba(255,255,255,0.95); border-color: #E8EDE6">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <NuxtLink to="/" class="text-2xl font-code font-bold" style="color: #0D2B22">
                    Nasher Uddin
                </NuxtLink>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#riverborn" class="transition-colors duration-300 font-mono text-sm hover:text-[#0D2B22]" style="color: #1A4435">Riverborn</a>
                    <a href="#projects" class="transition-colors duration-300 font-mono text-sm hover:text-[#0D2B22]" style="color: #1A4435">Projects</a>
                    <a href="#thinking" class="transition-colors duration-300 font-mono text-sm hover:text-[#0D2B22]" style="color: #1A4435">How I Think</a>
                    <a href="#contact" class="px-4 py-2 font-mono text-sm transition-colors duration-300" style="background-color: #0D2B22; color: #D4F53C;">Contact</a>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMenu" class="md:hidden p-2 transition-colors duration-300">
                    <div class="w-6 h-5 relative flex flex-col justify-between">
                        <span :class="{ 'rotate-45 translate-y-2': isMenuOpen }" class="w-full h-0.5 transition-all duration-300" style="background-color: #0D2B22"></span>
                        <span :class="{ 'opacity-0': isMenuOpen }" class="w-full h-0.5 transition-all duration-300" style="background-color: #0D2B22"></span>
                        <span :class="{ '-rotate-45 -translate-y-2': isMenuOpen }" class="w-full h-0.5 transition-all duration-300" style="background-color: #0D2B22"></span>
                    </div>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div :class="{ 'translate-y-0 opacity-100': isMenuOpen, '-translate-y-2 opacity-0 pointer-events-none': !isMenuOpen }"
                class="md:hidden absolute left-0 right-0 backdrop-blur-lg border-b transition-all duration-300"
                style="background-color: rgba(255,255,255,0.99); border-color: #E8EDE6">
                <div class="flex flex-col space-y-4 py-4 px-4">
                    <a href="#riverborn" class="hover:text-[#0D2B22] transition-colors duration-300 font-mono text-sm" style="color: #1A4435">Riverborn</a>
                    <a href="#projects" class="hover:text-[#0D2B22] transition-colors duration-300 font-mono text-sm" style="color: #1A4435">Projects</a>
                    <a href="#thinking" class="hover:text-[#0D2B22] transition-colors duration-300 font-mono text-sm" style="color: #1A4435">How I Think</a>
                    <a href="#contact" class="hover:text-[#0D2B22] transition-colors duration-300 font-mono text-sm" style="color: #1A4435">Contact</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    const isMenuOpen = ref(false)
    const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
</script>

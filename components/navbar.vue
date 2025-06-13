<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <NuxtLink to="/"
                    class="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Portfolio
                </NuxtLink>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink to="/"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/about"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        About
                    </NuxtLink>
                    <NuxtLink to="/projects"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        Projects
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        Contact
                    </NuxtLink>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMenu"
                    class="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                    <div class="w-6 h-5 relative flex flex-col justify-between">
                        <span :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
                            class="w-full h-0.5 bg-purple-400 transition-all duration-300"></span>
                        <span :class="{ 'opacity-0': isMenuOpen }"
                            class="w-full h-0.5 bg-purple-400 transition-all duration-300"></span>
                        <span :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
                            class="w-full h-0.5 bg-purple-400 transition-all duration-300"></span>
                    </div>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <div :class="{ 'translate-y-0 opacity-100': isMenuOpen, '-translate-y-2 opacity-0 pointer-events-none': !isMenuOpen }"
                class="md:hidden absolute left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 transition-all duration-300">
                <div class="flex flex-col space-y-4 py-4 px-4">
                    <NuxtLink to="/"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/about"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        About
                    </NuxtLink>
                    <NuxtLink to="/projects"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        Projects
                    </NuxtLink>
                    <NuxtLink to="/contact"
                        class="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                        Contact
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    const isMenuOpen = ref(false)

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value
    }
</script>

<style scoped>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .navbar-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
        text-decoration: none;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-link {
        color: #333;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    .nav-link:hover {
        color: #007bff;
    }

    .menu-toggle {
        display: none;
        flex-direction: column;
        gap: 6px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
    }

    .menu-toggle span {
        display: block;
        width: 25px;
        height: 2px;
        background: #333;
        transition: 0.3s;
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: flex;
        }

        .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            transition: 0.3s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-links.active {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>

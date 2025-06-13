<template>
    <div class="min-h-screen bg-black">
        <!-- Hero Section -->
        <div class=" mx-auto px-4 py-20 h-screen flex items-center justify-center relative overflow-hidden">
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div class="w-1/2 rounded-none overflow-hidden flex items-center justify-center">

                    <img src="/nasir-dotted.png" alt="Profile" class="w-[80%] h-[80%] object-cover">

                </div>

                <!-- Text content -->
                <div class="w-1/2 text-center md:text-left">
                    <h1 class="text-5xl md:text-6xl font-bold text-white font-code">
                        Hi, I'm Nasher Uddin
                    </h1>
                    <h2 class="text-4xl font-bold font-code text-white mt-2 !font-code">
                        Engineer & Entrepreneur
                    </h2>

                    <a href="https://connekt.studio/" target="_blank"
                        class="text-2xl font-bold font-code text-white mt-2 !font-['VT323']">Connekt
                        Studio</a>


                    <p class="text-white text-sm font-display mt-2">
                        I'm a software engineer and entrepreneur with a passion for building products that help people
                        live better lives.
                    </p>
                </div>



            </div>
            <!-- Equalizer Animation -->
            <div class="absolute left-0 bottom-0 w-[100vw] flex justify-center pointer-events-none z-20">
                <Equalizer />
            </div>
        </div>

        <!-- Tech Stack Grid -->

        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-12">
                <h2
                    class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                    Achievements</h2>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                    A collection of my achievements and accomplishments
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Years Active -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div
                        class="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        5+</div>
                    <div class="text-gray-300">Years Active</div>
                </div>

                <!-- Products Launched -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div
                        class="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        7+</div>
                    <div class="text-gray-300">Products Launched</div>
                </div>

                <!-- Worldwide Users -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div
                        class="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        100k+</div>
                    <div class="text-gray-300">Worldwide Users</div>
                </div>

                <!-- Rating -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div
                        class="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        4.8+</div>
                    <div class="text-gray-300">User Rating</div>
                </div>
            </div>
        </div>


        <!-- Projects Section -->
        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Projects</h2>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                    A collection of my work, showcasing my skills and expertise
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Vocalo.ai -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3
                        class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        Vocalo.ai</h3>
                    <p class="text-gray-300 mb-4">Gamify language learning with immersive AI conversations,
                        personalised
                        curriculum, and real-time comprehensive feedback.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">LLM</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">OpenAI</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">TTS</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-300">STT</span>
                    </div>
                </div>

                <!-- SketchToImage -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3
                        class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        SketchToImage</h3>
                    <p class="text-gray-300 mb-4">Turn simple sketches into stunning, photorealistic artwork using
                        AI
                        diffusion models.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">Stable
                            Diffusion</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">ControlNet</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">Image To
                            Video</span>
                    </div>
                </div>

                <!-- HeyLuna.ai -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3
                        class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        HeyLuna.ai</h3>
                    <p class="text-gray-300 mb-4">Experience natural conversations with an expressive 3D AI
                        assistant
                        that sees, hears, and understands.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">LLM</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">RAG</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">Vector DB</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-300">Chatbot</span>
                    </div>
                </div>

                <!-- PhotoFoxAI -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3
                        class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        PhotoFoxAI</h3>
                    <p class="text-gray-300 mb-4">Generate professional-quality product photography and content
                        without
                        traditional photography equipment.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">Flux</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">Diffusion</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">Image To
                            Image</span>
                    </div>
                </div>

                <!-- AiStoryGen -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3
                        class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        AiStoryGen</h3>
                    <p class="text-gray-300 mb-4">Craft immersive stories with AI-generated narratives, visuals, and
                        audio experiences.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">LLM</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">Diffusion</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">Synthetix</span>
                    </div>
                </div>

                <!-- Wordrocket.ai -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3
                        class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        Wordrocket.ai</h3>
                    <p class="text-gray-300 mb-4">Create professional content across text, image, video, and audio
                        with
                        one powerful AI platform.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">LLM</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">OpenAI</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">Claude</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-300">Content
                            Engine</span>
                    </div>
                </div>

                <!-- InvoiceAgent.ai -->
                <div
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3
                        class="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                        InvoiceAgent.ai</h3>
                    <p class="text-gray-300 mb-4">AI-powered invoice automation tool that extracts, processes, and
                        manages invoices from emails and manual uploads with 99.9% accuracy.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300">OpenAI</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300">OAuth2</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-300">VectorDB</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-yellow-500/20 text-yellow-300">NLP
                            Search</span>
                        <span class="px-3 py-1 rounded-full text-sm bg-pink-500/20 text-pink-300">Real-time</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 py-16">
            <!-- Title and Subtitle -->
            <div class="text-center mb-12">
                <h2
                    class="text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                    Tech Stack
                </h2>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                    Technologies I use to bring ideas to life
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="(tech, index) in techStack" :key="index"
                    class="group relative p-6 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    </div>
                    <div class="relative z-10">
                        <div class="flex items-center gap-3 mb-3">
                            <component :is="tech.icon" class="w-6 h-6 text-purple-400" />
                            <h3 class="text-xl font-semibold">{{ tech.name }}</h3>
                        </div>
                        <p class="text-gray-400 text-sm">{{ tech.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    const techStack = ref([
        {
            name: 'Nuxt.js',
            description: 'Modern Vue.js framework for server-side rendering and static site generation',
            icon: 'RocketLaunchIcon'
        },
        {
            name: 'Express.js',
            description: 'Fast, unopinionated web framework for Node.js',
            icon: 'ServerIcon'
        },
        {
            name: 'Firebase',
            description: 'Authentication and Cloud Storage for secure user management and data persistence',
            icon: 'CloudIcon'
        },
        {
            name: 'MongoDB',
            description: 'NoSQL database for modern applications',
            icon: 'CircleStackIcon'
        },
        {
            name: 'SvelteKit',
            description: 'Next-generation web framework for building modern web applications',
            icon: 'CodeBracketIcon'
        },
        {
            name: 'OAuth2',
            description: 'Implemented Google OAuth2 for secure social authentication and user management',
            icon: 'ShieldCheckIcon'
        },
        {
            name: 'Generative AI',
            description: 'Expert in LLMs, Diffusion Models, and frameworks like Langchain & Hugging Face. Proficient with OpenAI, Anthropic, and Google AI platforms',
            icon: 'SparklesIcon'
        },
        {
            name: 'Node.js',
            description: 'JavaScript runtime for building scalable network applications',
            icon: 'CommandLineIcon'
        }
    ])
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap');

    .font-code {
        font-family: 'VT323', monospace;
    }

    .font-display {
        font-family: 'Press Start 2P', cursive;
    }

    .font-mono {
        font-family: 'Space Mono', monospace;
    }

</style>
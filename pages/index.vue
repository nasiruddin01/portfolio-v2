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
                        <span v-if="!isTypingComplete">{{ displayText }}<span class="animate-blink">|</span></span>
                        <span v-else>Hi, I'm Nasher Uddin</span>
                    </h1>
                    <h2 class="text-4xl font-bold font-code text-white mt-2 !font-code">
                        <span v-if="!isTitleComplete">{{ displayTitle }}<span class="animate-blink">|</span></span>
                        <span v-else>Engineer & Entrepreneur</span>
                    </h2>

                    <a href="https://connekt.studio/" target="_blank"
                        class="text-2xl font-bold font-code text-white mt-2 !font-['VT323']">
                        <span v-if="!isLinkComplete">{{ displayLink }}<span class="animate-blink">|</span></span>
                        <span v-else>Connekt Studio</span>
                    </a>


                    <p class="text-white text-sm font-display mt-2">
                        <span v-if="!isDescriptionComplete">{{ displayDescription }}<span
                                class="animate-blink">|</span></span>
                        <span v-else>I'm a software engineer and entrepreneur with a passion for building products that
                            help people live better lives.</span>
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
                <h2 class="text-4xl font-display font-bold text-white mb-4">
                    Achievements
                </h2>
                <p class="text-xl text-gray-300 font-mono max-w-2xl mx-auto">
                    A collection of my achievements and accomplishments
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <!-- Years Active -->
                <div
                    class="group relative p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div class="text-4xl font-bold font-code text-white mb-2">5+</div>
                    <div class="text-gray-300 font-mono">Years Active</div>
                </div>

                <!-- Products Launched -->
                <div
                    class="group relative p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div class="text-4xl font-bold font-code text-white mb-2">7+</div>
                    <div class="text-gray-300 font-mono">Products Launched</div>
                </div>

                <!-- Worldwide Users -->
                <div
                    class="group relative p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div class="text-4xl font-bold font-code text-white mb-2">100k+</div>
                    <div class="text-gray-300 font-mono">Worldwide Users</div>
                </div>

                <!-- Rating -->
                <div
                    class="group relative p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div class="text-4xl font-bold font-code text-white mb-2">4.8+</div>
                    <div class="text-gray-300 font-mono">User Rating</div>
                </div>
            </div>
        </div>


        <!-- Projects Section -->
        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-display font-bold text-white mb-4">Projects</h2>
                <p class="text-xl text-gray-300 font-mono max-w-2xl mx-auto">
                    A collection of my work, showcasing my skills and expertise
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="project in projects" :key="project.name"
                    class="group relative p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <h3 class="text-2xl font-bold font-code text-white mb-3">
                        {{ project.name }}
                    </h3>
                    <p class="text-gray-300 font-mono mb-4">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in project.tags" :key="tag"
                            class="px-3 py-1 rounded-none text-sm font-mono bg-purple-500/20 text-purple-300">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 py-16">
            <!-- Title and Subtitle -->
            <div class="text-center mb-12">
                <h2 class="text-4xl font-display font-bold text-white mb-4">
                    Tech Stack
                </h2>
                <p class="text-xl text-gray-400 max-w-2xl font-code mx-auto">
                    Technologies I use to bring ideas to life
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="(tech, index) in techStack" :key="index"
                    class="group relative p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    </div>
                    <div class="relative z-10">
                        <div class="flex items-center gap-3 mb-3">
                            <component :is="tech.icon" class="w-6 h-6 text-purple-400" />
                            <h3 class="text-xl font-semibold font-code text-white">{{ tech.name }}</h3>
                        </div>
                        <p class="text-gray-400 text-sm font-mono">{{ tech.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    const projects = [
        {
            name: 'Vocalo.ai',
            description: 'Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback.',
            tags: ['LLM', 'OpenAI', 'TTS', 'STT']
        },
        {
            name: 'SketchToImage',
            description: 'Turn simple sketches into stunning, photorealistic artwork using AI diffusion models.',
            tags: ['Stable Diffusion', 'ControlNet', 'Image To Video']
        },
        {
            name: 'HeyLuna.ai',
            description: 'Experience natural conversations with an expressive 3D AI assistant that sees, hears, and understands.',
            tags: ['LLM', 'RAG', 'Vector DB', 'Chatbot']
        },
        {
            name: 'PhotoFoxAI',
            description: 'Generate professional-quality product photography and content without traditional photography equipment.',
            tags: ['Flux', 'Diffusion', 'Image To Image']
        },
        {
            name: 'AiStoryGen',
            description: 'Craft immersive stories with AI-generated narratives, visuals, and audio experiences.',
            tags: ['LLM', 'Diffusion', 'Synthetix']
        },
        {
            name: 'Wordrocket.ai',
            description: 'Create professional content across text, image, video, and audio with one powerful AI platform.',
            tags: ['LLM', 'OpenAI', 'Claude', 'Content Engine']
        },
        {
            name: 'InvoiceAgent.ai',
            description: 'AI-powered invoice automation tool that extracts, processes, and manages invoices from emails and manual uploads with 99.9% accuracy.',
            tags: ['OpenAI', 'OAuth2', 'VectorDB', 'NLP Search', 'Real-time']
        }
    ];

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
    ]);

    const displayText = ref('')
    const displayDescription = ref('')
    const displayTitle = ref('')
    const displayLink = ref('')

    const isTypingComplete = ref(false)
    const isDescriptionComplete = ref(false)
    const isTitleComplete = ref(false)
    const isLinkComplete = ref(false)

    const fullText = "Hi, I'm Nasher Uddin"
    const fullDescription = "I'm a software engineer and entrepreneur with a passion for building products that help people live better lives."
    const fullTitle = "Engineer & Entrepreneur"
    const fullLink = "Connekt Studio"

    let currentIndex = 0
    let descriptionIndex = 0
    let titleIndex = 0
    let linkIndex = 0

    onMounted(() => {
        const typeText = () => {
            if (currentIndex < fullText.length) {
                displayText.value += fullText[currentIndex]
                currentIndex++
                setTimeout(typeText, 100)
            } else {
                isTypingComplete.value = true
                typeTitle()
            }
        }

        const typeTitle = () => {
            if (titleIndex < fullTitle.length) {
                displayTitle.value += fullTitle[titleIndex]
                titleIndex++
                setTimeout(typeTitle, 100)
            } else {
                isTitleComplete.value = true
                typeLink()
            }
        }

        const typeLink = () => {
            if (linkIndex < fullLink.length) {
                displayLink.value += fullLink[linkIndex]
                linkIndex++
                setTimeout(typeLink, 100)
            } else {
                isLinkComplete.value = true
                typeDescription()
            }
        }

        const typeDescription = () => {
            if (descriptionIndex < fullDescription.length) {
                displayDescription.value += fullDescription[descriptionIndex]
                descriptionIndex++
                setTimeout(typeDescription, 30)
            } else {
                isDescriptionComplete.value = true
            }
        }

        typeText()
    })
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

    @keyframes blink {

        0%,
        100% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }
    }

    .animate-blink {
        animation: blink 1s infinite;
    }
</style>
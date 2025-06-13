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
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="text-2xl font-bold font-code text-white">
                            {{ project.name }}
                        </h3>
                        <a :href="project.link" target="_blank"
                            class="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
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

        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-code text-white mb-4">My Journey</h2>
                <p class="text-xl text-gray-300 font-mono max-w-2xl mx-auto">From Civil Engineering to Tech
                    Entrepreneurship</p>
            </div>
            <div class="space-y-8">
                <!-- Civil Engineering Background -->


                <!-- Static Fit -->
                <div class="relative pl-8 border-l-2 border-purple-500/30">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div class="p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10">
                        <h3 class="text-2xl font-code text-white">Static Fit</h3>
                        <p class="text-purple-400 font-mono">2016 - 2018</p>
                        <p class="text-gray-300 font-mono mt-2">Interior Design Company - First professional role</p>
                    </div>
                </div>

                <!-- Wall Decor International -->
                <div class="relative pl-8 border-l-2 border-purple-500/30">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div class="p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10">
                        <h3 class="text-2xl font-code text-white">Wall Decor International</h3>
                        <p class="text-purple-400 font-mono">2018 - 2019</p>
                        <p class="text-gray-300 font-mono mt-2">Two years of experience in interior decoration</p>
                    </div>
                </div>

                <!-- Peace Energy -->
                <div class="relative pl-8 border-l-2 border-purple-500/30">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div class="p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10">
                        <h3 class="text-2xl font-code text-white">Peace Energy</h3>
                        <p class="text-purple-400 font-mono">2019 - 2020</p>
                        <p class="text-gray-300 font-mono mt-2">Solar Pump Projects - Last role in traditional industry
                        </p>
                    </div>
                </div>

                <!-- The Pivot -->
                <div class="relative pl-8 border-l-2 border-purple-500/30">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div class="p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10">
                        <h3 class="text-2xl font-code text-white">The Big Decision</h3>
                        <p class="text-purple-400 font-mono">Early 2020</p>
                        <p class="text-gray-300 font-mono mt-2">Resigned from traditional career to pursue coding, moved
                            to Dhaka with brother's support</p>
                    </div>
                </div>

                <!-- COVID Era -->
                <div class="relative pl-8 border-l-2 border-purple-500/30">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div class="p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10">
                        <h3 class="text-2xl font-code text-white">COVID-19 Lockdown</h3>
                        <p class="text-purple-400 font-mono">2020</p>
                        <p class="text-gray-300 font-mono mt-2">Intensive learning period in Mirpur, building projects
                            and gaining experience</p>
                    </div>
                </div>

                <!-- CONNEKT STUDIO -->
                <div class="relative pl-8 border-l-2 border-purple-500/30">
                    <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                    <div class="p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10">
                        <h3 class="text-2xl font-code text-white">CONNEKT STUDIO</h3>
                        <p class="text-purple-400 font-mono">August 2021 - Present</p>
                        <p class="text-gray-300 font-mono mt-2">Co-founded with Md Nasim Uddin and Raihan Ahmad, pivoted
                            to AI-powered solutions</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-code text-white mb-4">Testimonials</h2>
                <p class="text-xl text-gray-300 font-mono max-w-2xl mx-auto">What clients say</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="p-6 rounded-none bg-white/5 backdrop-blur-md border border-white/10">
                    <p class="text-gray-300 font-mono mb-4">"Nasher is an exceptional developer who consistently
                        delivers high-quality solutions."</p>
                    <div class="flex items-center gap-4">
                        <img src="https://api.dicebear.com/9.x/initials/svg?seed=John" alt="Client"
                            class="w-12 h-12 rounded-none">
                        <div>
                            <h4 class="text-white font-code">John Doe</h4>
                            <p class="text-purple-400 font-mono">CEO, TechCorp</p>
                        </div>
                    </div>
                </div>
                <!-- Add more testimonials -->
            </div>
        </div>

        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold font-code text-white mb-4">Get in Touch</h2>
                <p class="text-xl text-gray-300 font-mono max-w-2xl mx-auto">Let's work together</p>

                <!-- Social Media Links -->

            </div>
            <div class="max-w-2xl mx-auto">
                <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6" @submit="handleSubmit">
                    <input type="hidden" name="access_key" value="5fffc86b-15f6-4f81-9a4c-9fee9d5f4b06">

                    <div>
                        <input name="name" type="text" placeholder="Name"
                            class="w-full p-4 rounded-none bg-white/5 backdrop-blur-md border border-white/10 text-white font-mono focus:border-purple-500"
                            required>
                    </div>
                    <div>
                        <input name="email" type="email" placeholder="Email"
                            class="w-full p-4 rounded-none bg-white/5 backdrop-blur-md border border-white/10 text-white font-mono focus:border-purple-500"
                            required>
                    </div>
                    <div>
                        <textarea name="message" placeholder="Message" rows="4"
                            class="w-full p-4 rounded-none bg-white/5 backdrop-blur-md border border-white/10 text-white font-mono focus:border-purple-500"
                            required></textarea>
                    </div>
                    <button type="submit"
                        class="w-full p-4 rounded-none bg-white/10 backdrop-blur-md border border-white/20 text-white font-code hover:bg-white/20 transition-all duration-300 text-xl shadow-lg hover:shadow-xl">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
        <div class="container mx-auto px-4 py-8">
            <div class="max-w-4xl mx-auto">
                <!-- Social Links with Glassmorphism -->
                <div class="flex justify-center gap-6 mt-8">
                    <a href="https://github.com/nasiruddin01" target="_blank"
                        class="text-white hover:text-purple-500 transition-all duration-300">
                        <i class="fab fa-github text-2xl"></i>
                    </a>
                    <a href="https://linkedin.com/in/nasir01/" target="_blank"
                        class="text-white hover:text-purple-500 transition-all duration-300">

                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="https://twitter.com/nasir_uddin01" target="_blank"
                        class="text-white hover:text-purple-500 transition-all duration-300">
                        <i class="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="https://instagram.com/md.nasir.uddin1995/" target="_blank"
                        class="text-white hover:text-purple-500 transition-all duration-300">
                        <i class="fab fa-facebook text-2xl"></i>
                    </a>
                    <a href="https://instagram.com/nasiruddin.md" target="_blank"
                        class="text-white hover:text-purple-500 transition-all duration-300">
                        <i class="fab fa-instagram text-2xl"></i>
                    </a>
                </div>

                <!-- Copyright Text -->
                <div class="text-center mt-8">
                    <p class="text-gray-400 font-mono text-sm">
                        © 2025 Nasher Uddin. All rights reserved.
                    </p>
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
            tags: ['LLM', 'OpenAI', 'TTS', 'STT'],
            link: 'https://vocalo.ai'
        },
        {
            name: 'SketchToImage',
            description: 'Turn simple sketches into stunning, photorealistic artwork using AI diffusion models.',
            tags: ['Stable Diffusion', 'ControlNet', 'Image To Video'],
            link: 'https://sketchtoimage.com'
        },
        {
            name: 'HeyLuna.ai',
            description: 'Experience natural conversations with an expressive 3D AI assistant that sees, hears, and understands.',
            tags: ['LLM', 'RAG', 'Vector DB', 'Chatbot'],
            link: 'https://heyluna.ai'
        },
        {
            name: 'PhotoFoxAI',
            description: 'Generate professional-quality product photography and content without traditional photography equipment.',
            tags: ['Flux', 'Diffusion', 'Image To Image'],
            link: 'https://photofoxai.com'
        }, {
            name: "QuizMaker.ai",
            description: "Create interactive quizzes and tests with AI-powered question generation and evaluation.",
            tags: ['LLM', 'OpenAI', 'Claude', 'Content Engine'],
            link: 'https://quizmaker.ai'
        },
        {
            name: 'AiStoryGen',
            description: 'Craft immersive stories with AI-generated narratives, visuals, and audio experiences.',
            tags: ['LLM', 'Diffusion', 'Synthetix'],
            link: 'https://aistorygen.org'
        },
        {
            name: 'InvoiceAgent.ai',
            description: 'AI-powered invoice automation tool that extracts, processes, and manages invoices from emails and manual uploads with 99.9% accuracy.',
            tags: ['OpenAI', 'OAuth2', 'VectorDB', 'NLP Search', 'Real-time'],
            link: 'https://invoiceagent.ai'
        },
        {
            name: 'Wordrocket.ai',
            description: 'Create professional content across text, image, video, and audio with one powerful AI platform.',
            tags: ['LLM', 'OpenAI', 'Claude', 'Content Engine'],
            link: 'https://wordrocket.ai'
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

    const handleSubmit = async (e) => {
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Error sending message. Please try again.');
            }
        } catch (error) {
            alert('Error sending message. Please try again.');
        }
    };

    // Add this to your head section or nuxt.config.ts
    useHead({
        title: 'Nasir Uddin | Full Stack Developer & AI Enthusiast',
        meta: [
            // Primary Meta Tags
            { name: 'title', content: 'Nasir Uddin | Full Stack Developer & AI Enthusiast' },
            { name: 'description', content: 'Full Stack Developer with 3+ years of experience in AI-powered solutions. Co-founder of CONNEKT STUDIO, specializing in Vue.js, Nuxt.js, and modern web technologies. Expert in building scalable applications, AI integration, and creating innovative digital experiences. From civil engineering to tech entrepreneurship, bringing unique problem-solving perspectives to software development.' },

            // Open Graph / Facebook
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://nasheruddin.com/' },
            { property: 'og:title', content: 'Nasir Uddin | Full Stack Developer & AI Enthusiast' },
            { property: 'og:description', content: 'Full Stack Developer with 3+ years of experience in AI-powered solutions. Co-founder of CONNEKT STUDIO, specializing in Vue.js, Nuxt.js, and modern web technologies. Expert in building scalable applications, AI integration, and creating innovative digital experiences. From civil engineering to tech entrepreneurship, bringing unique problem-solving perspectives to software development.' },
            { property: 'og:image', content: 'https://nasheruddin.com/nasir-dotted.png' },

            // Twitter
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:url', content: 'https://nasheruddin.com/' },
            { property: 'twitter:title', content: 'Nasir Uddin | Full Stack Developer & AI Enthusiast' },
            { property: 'twitter:description', content: 'Full Stack Developer with 3+ years of experience in AI-powered solutions. Co-founder of CONNEKT STUDIO, specializing in Vue.js, Nuxt.js, and modern web technologies. Expert in building scalable applications, AI integration, and creating innovative digital experiences. From civil engineering to tech entrepreneurship, bringing unique problem-solving perspectives to software development.' },
            { property: 'twitter:image', content: 'https://nasheruddin.com/nasir-dotted.png' },

            // Additional Meta Tags
            { name: 'keywords', content: 'Full Stack Developer, AI Developer, Vue.js, Nuxt.js, Web Development, CONNEKT STUDIO, JavaScript, TypeScript, AI Integration, Software Development, Tech Entrepreneurship, Civil Engineering, Problem Solving, Scalable Applications, Modern Web Technologies, Frontend Development, Backend Development, AI Solutions, Digital Innovation' },
            { name: 'author', content: 'Nasher Uddin' },
            { name: 'robots', content: 'index, follow' },
            { name: 'language', content: 'English' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

            // Canonical URL
            { rel: 'canonical', href: 'https://nasheruddin.com/' }
        ],
        link: [
            // Favicon
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // Font Awesome
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }
        ]
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
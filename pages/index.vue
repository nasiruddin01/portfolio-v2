<template>
  <div class="min-h-screen overflow-x-hidden" style="background-color: #F2FFEE">
    <!-- Hero Section -->
    <div
      class="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12"
    >
        <div class="w-1/2 flex items-center justify-center">
          <img
            src="/nasher-illustrated.webp"
            alt="Nasher Uddin"
            class="w-full max-w-sm object-contain"
          />
        </div>

        <!-- Text content -->
        <div class="w-1/2 text-center md:text-left">
          <h1 class="text-5xl md:text-6xl font-bold text-[#0D2B22] font-code">
            <span v-if="!isTypingComplete"
              >{{ displayText }}<span class="animate-blink">|</span></span
            >
            <span v-else>Hi, I'm Nasher Uddin</span>
          </h1>
          <h2 class="text-4xl font-bold font-code text-[#0D2B22] mt-2 !font-code">
            <span v-if="!isTitleComplete"
              >{{ displayTitle }}<span class="animate-blink">|</span></span
            >
            <span v-else>Co-Founder & COO</span>
          </h2>

          <a
            href="https://www.riverborn.com"
            target="_blank"
            class="text-2xl font-bold font-code text-[#0D2B22] mt-2 !font-['VT323'] hover:text-[#1A4435]"
          >
            <span v-if="!isLinkComplete"
              >{{ displayLink }}<span class="animate-blink">|</span></span
            >
            <span v-else>Riverborn</span>
          </a>

          <p class="text-[#1A4435] text-sm font-mono mt-2">
            <span v-if="!isDescriptionComplete"
              >{{ displayDescription
              }}<span class="animate-blink">|</span></span
            >
            <span v-else
              >Co-Founder & COO at
              <a
                href="https://www.riverborn.com"
                target="_blank"
                rel="noopener noreferrer"
                >Riverborn</a
              >, an AI system development company building production-grade AI
              agents, voice systems, and creative AI infrastructure for startups
              and enterprises globally. We've shipped 10+ live AI products with
              100K+ users — and every system we deliver to clients is proven on
              our own products first.</span
            >
          </p>
        </div>
    </div>
    <div class="w-full overflow-hidden flex justify-center pointer-events-none z-20">
      <Equalizer />
    </div>

    <!-- Achievements -->
    <div class="container mx-auto px-4 mt-24">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display font-bold text-[#0D2B22] mb-4">
          Achievements
        </h2>
        <p class="text-xl text-[#1A4435] font-mono max-w-2xl mx-auto">
          A collection of my achievements and accomplishments
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          class="group relative p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">5+</div>
          <div class="text-[#1A4435] font-mono">Years Active</div>
        </div>

        <div
          class="group relative p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">10+</div>
          <div class="text-[#1A4435] font-mono">AI Products Shipped</div>
        </div>

        <div
          class="group relative p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">100k+</div>
          <div class="text-[#1A4435] font-mono">Worldwide Users</div>
        </div>

        <div
          class="group relative p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">10+</div>
          <div class="text-[#1A4435] font-mono">AI Engineers</div>
        </div>
      </div>
    </div>

    <!-- Riverborn Section -->
    <div id="riverborn" class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display font-bold text-[#0D2B22] mb-4">
          Riverborn
        </h2>
        <p class="text-xl text-[#1A4435] font-mono max-w-2xl mx-auto">
          AI System Development for the Real World
        </p>
      </div>

      <!-- About Riverborn -->
      <div class="max-w-3xl mx-auto mb-12">
        <div
          class="p-8 rounded-none bg-white border border-[#E8EDE6]"
        >
          <p class="text-[#1A4435] font-mono text-base leading-relaxed">
            Riverborn builds production-grade AI agents, voice systems, and
            creative AI infrastructure for startups and enterprises globally.
            Based in Bangladesh with global delivery, we work with CTOs, VPs of
            Engineering, and Heads of AI at Series A–C companies through to
            enterprise teams — at 40–60% less than US/EU agencies.
          </p>
          <p class="text-[#1A4435] font-mono text-base leading-relaxed mt-4">
            As Co-Founder & COO, I lead operations, client delivery, and product
            development. I personally make sure every client inquiry gets a real
            answer, and every system we ship is one we've already proven on our
            own products.
          </p>
          <a
            href="https://www.riverborn.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-6 px-6 py-3 bg-[#0D2B22] text-[#D4F53C] font-code text-xl hover:bg-[#1A4435] transition-all duration-300"
          >
            Visit Riverborn →
          </a>
        </div>
      </div>

      <!-- What We Build -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <h3 class="text-xl font-bold font-code text-[#0D2B22] mb-3">
            Autonomous AI Agents
          </h3>
          <p class="text-[#1A4435] font-mono text-sm">
            Multi-step planning, self-correcting pipelines, and persistent
            memory for complex business workflows.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <h3 class="text-xl font-bold font-code text-[#0D2B22] mb-3">
            Voice AI Systems
          </h3>
          <p class="text-[#1A4435] font-mono text-sm">
            Real telephony infrastructure with sub-2000ms latency. LLM-native
            voice for live call centers and agent assist.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <h3 class="text-xl font-bold font-code text-[#0D2B22] mb-3">
            LLM Chatbots & RAG
          </h3>
          <p class="text-[#1A4435] font-mono text-sm">
            Retrieval-augmented chatbots across voice and text, trained on your
            data and integrated into your stack.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <h3 class="text-xl font-bold font-code text-[#0D2B22] mb-3">
            Generative AI
          </h3>
          <p class="text-[#1A4435] font-mono text-sm">
            Text, image, audio, and video generation pipelines — from creative
            tooling to enterprise content automation.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <h3 class="text-xl font-bold font-code text-[#0D2B22] mb-3">
            Multi-Agent Systems
          </h3>
          <p class="text-[#1A4435] font-mono text-sm">
            Orchestrated agent networks for complex workflows — planning,
            execution, and feedback loops working in concert.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <h3 class="text-xl font-bold font-code text-[#0D2B22] mb-3">
            Enterprise Integration
          </h3>
          <p class="text-[#1A4435] font-mono text-sm">
            AI connected into CRM, ERP, and HRIS via standard APIs. On-premise
            and private cloud deployments for regulated industries.
          </p>
        </div>
      </div>
    </div>

    <!-- Values & Philosophy Section -->
    <div id="thinking" class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display font-bold text-[#0D2B22] mb-4">
          How I Think
        </h2>
        <p class="text-xl text-[#1A4435] font-mono max-w-2xl mx-auto">
          The principles I keep coming back to
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">01</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Prove it on yourself first</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            If we haven't run it on our own products, we don't sell it.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">02</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Ship, then improve</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Real usage teaches more in a week than six months of planning ever could.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">03</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Say what you actually think</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Honest feedback early costs less than polite silence later.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">04</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Curiosity over credentials</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            The best work comes from wanting to understand, not just wanting to qualify.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">05</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Consistency is the skill</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Showing up when it's slow matters more than performing when conditions are good.
          </p>
        </div>

        <div
          class="group p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">06</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Context changes everything</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            The right solution depends on the actual problem — there are no universal answers.
          </p>
        </div>
      </div>
    </div>

    <!-- Beyond the Screen Section -->
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display font-bold text-[#0D2B22] mb-4">
          Beyond the Screen
        </h2>
        <p class="text-xl text-[#1A4435] font-mono max-w-2xl mx-auto">
          What drives me when I step away from the keyboard
        </p>
      </div>

      <div class="max-w-3xl mx-auto mb-16">
        <div class="p-8 rounded-none bg-white border border-[#E8EDE6]">
          <p class="text-[#1A4435] font-mono text-base leading-relaxed">
            I haven't left Bangladesh yet — but I've been exploring it properly, and there's
            more here than most people realise. Hill tracks in Bandarban, rivers that cut
            through everything, ancient mosques and ruins that most people drive past without
            stopping. I'm still working through what's on my doorstep before I move further.
          </p>
          <p class="text-[#1A4435] font-mono text-base leading-relaxed mt-4">
            But the list is building. Mountains, ancient civilizations, coastlines of other
            seas — the world has a lot of places I intend to get to. I'm drawn to nature
            that makes you feel small and history that makes you feel connected to something
            much longer than your own lifetime. The two together are hard to beat.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Travel -->
        <div
          class="group p-8 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div class="text-5xl mb-5">✈️</div>
          <h3 class="text-2xl font-bold font-code text-[#0D2B22] mb-3">Travel</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Haven't gone international yet, but it's coming. I've been exploring Bangladesh
            first — and it's a bigger country than most people give it credit for. The plan
            is to keep moving outward from here: neighbouring countries, then further. I'm
            not interested in the obvious tourist circuit. I want to find the places one stop
            further down the line, the regions most people skip, the towns that still feel
            like themselves. Those are usually where the real character is.
          </p>
        </div>

        <!-- Ancient History -->
        <div
          class="group p-8 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div class="text-5xl mb-5">🏛️</div>
          <h3 class="text-2xl font-bold font-code text-[#0D2B22] mb-3">Ancient History</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            This one started close to home. Bangladesh has Mahasthangarh — one of the oldest
            archaeological sites in the subcontinent, dating back to the 3rd century BC.
            The Mosque City of Bagerhat, a UNESCO site with sixty domes. Paharpur, a Buddhist
            monastery that's been here since the 8th century. Sonargaon, an ancient capital
            most people have never heard of — that one is on my list. I want to get to all
            of these properly, not just pass through. And beyond Bangladesh — the Middle East,
            Central Asia, the ancient world — that's further down the list but it's there.
          </p>
        </div>

        <!-- Hills & Mountains -->
        <div
          class="group p-8 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div class="text-5xl mb-5">⛰️</div>
          <h3 class="text-2xl font-bold font-code text-[#0D2B22] mb-3">Hills & Mountains</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            The Chittagong Hill Tracts pull me in — Bandarban, Rangamati, those long roads
            that go into the hills and keep going. Keokradong, the highest accessible peak
            in Bangladesh, and Sajek Valley are both on my list. There's a specific quality
            of silence you find only at elevation: no traffic, no notifications, just wind
            and distance. It resets something. The Himalayas are a bigger ambition for later.
            The Sylhet tea gardens are also somewhere I want to get to — a different kind
            of landscape but the same pull.
          </p>
        </div>

        <!-- Seas & Rivers -->
        <div
          class="group p-8 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <div class="text-5xl mb-5">🌊</div>
          <h3 class="text-2xl font-bold font-code text-[#0D2B22] mb-3">Seas & Rivers</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Growing up in Bangladesh means growing up alongside rivers — the Padma, the Meghna,
            the Jamuna. Water is in the DNA of this landscape. Cox's Bazar has the longest
            natural sea beach in the world and it's right here. Kuakata — where you can watch
            both sunrise and sunset over the sea — is on the list. Rivers and coastlines have
            a pace that's completely different from cities or mountains. They remind you that
            the world keeps moving whether you're watching or not. I find that useful.
          </p>
        </div>
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display font-bold text-[#0D2B22] mb-4">
          Projects
        </h2>
        <p class="text-xl text-[#1A4435] font-mono max-w-2xl mx-auto">
          A collection of my work, showcasing my skills and expertise
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.name"
          class="group relative p-6 rounded-none bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
        >
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-2xl font-bold font-code text-[#0D2B22]">
              {{ project.name }}
            </h3>
            <a
              :href="project.link"
              target="_blank"
              class="text-[#0D2B22] hover:text-[#D4F53C] hover:bg-[#0D2B22] transition-colors duration-300 rounded p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <p class="text-[#1A4435] font-mono mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-3 py-1 rounded-none text-sm font-mono bg-[#F2FFEE] border border-[#E8EDE6] text-[#0D2B22]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold font-code text-[#0D2B22] mb-4">
          Get in Touch
        </h2>
        <p class="text-xl text-[#1A4435] font-mono max-w-2xl mx-auto">
          Let's work together
        </p>
      </div>
      <div class="max-w-2xl mx-auto">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          class="space-y-6"
          @submit="handleSubmit"
        >
          <input
            type="hidden"
            name="access_key"
            value="5fffc86b-15f6-4f81-9a4c-9fee9d5f4b06"
          />

          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              class="w-full p-4 rounded-none bg-white border border-[#E8EDE6] text-[#0D2B22] font-mono placeholder-[#9FCEBE] focus:border-[#0D2B22] focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              class="w-full p-4 rounded-none bg-white border border-[#E8EDE6] text-[#0D2B22] font-mono placeholder-[#9FCEBE] focus:border-[#0D2B22] focus:outline-none"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              class="w-full p-4 rounded-none bg-white border border-[#E8EDE6] text-[#0D2B22] font-mono placeholder-[#9FCEBE] focus:border-[#0D2B22] focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full p-4 rounded-none bg-[#0D2B22] border border-[#0D2B22] text-[#D4F53C] font-code hover:bg-[#1A4435] transition-all duration-300 text-xl shadow-sm hover:shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/nasiruddin01"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
          >
            <i class="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/nasir01/"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
          >
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/nasir_uddin01"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
          >
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://instagram.com/md.nasir.uddin1995/"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
          >
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="https://instagram.com/nasiruddin.md"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
          >
            <i class="fab fa-instagram text-2xl"></i>
          </a>
        </div>

        <div class="text-center mt-8">
          <p class="text-[#1A4435] font-mono text-sm">
            © {{ new Date().getFullYear() }} Nasher Uddin. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "Vocalo.ai",
    description:
      "Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback.",
    tags: ["LLM", "OpenAI", "TTS", "STT"],
    link: "https://vocalo.ai",
  },
  {
    name: "SketchToImage",
    description:
      "Turn simple sketches into stunning, photorealistic artwork using AI diffusion models.",
    tags: ["Stable Diffusion", "ControlNet", "Image To Video"],
    link: "https://sketchtoimage.com",
  },
  {
    name: "HeyLuna.ai",
    description:
      "Experience natural conversations with an expressive 3D AI assistant that sees, hears, and understands.",
    tags: ["LLM", "RAG", "Vector DB", "Chatbot"],
    link: "https://heyluna.ai",
  },
  {
    name: "PhotoFoxAI",
    description:
      "Generate professional-quality product photography and content without traditional photography equipment.",
    tags: ["Flux", "Diffusion", "Image To Image"],
    link: "https://photofoxai.com",
  },
  {
    name: "QuizMaker.ai",
    description:
      "Create interactive quizzes and tests with AI-powered question generation and evaluation.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
    link: "https://quizmaker.ai",
  },
  {
    name: "AiStoryGen",
    description:
      "Craft immersive stories with AI-generated narratives, visuals, and audio experiences.",
    tags: ["LLM", "Diffusion", "Synthetix"],
    link: "https://aistorygen.org",
  },
  {
    name: "InvoiceAgent.ai",
    description:
      "AI-powered invoice automation tool that extracts, processes, and manages invoices from emails and manual uploads with 99.9% accuracy.",
    tags: ["OpenAI", "OAuth2", "VectorDB", "NLP Search", "Real-time"],
    link: "https://invoiceagent.ai",
  },
  {
    name: "Wordrocket.ai",
    description:
      "Create professional content across text, image, video, and audio with one powerful AI platform.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
    link: "https://wordrocket.ai",
  },
];

const displayText = ref("");
const displayDescription = ref("");
const displayTitle = ref("");
const displayLink = ref("");

const isTypingComplete = ref(false);
const isDescriptionComplete = ref(false);
const isTitleComplete = ref(false);
const isLinkComplete = ref(false);

const fullText = "Hi, I'm Nasher Uddin";
const fullDescription =
  "Co-Founder & COO at Riverborn, an AI system development company building production-grade AI agents, voice systems, and creative AI infrastructure for startups and enterprises globally. We've shipped 10+ live AI products with 100K+ users — and every system we deliver to clients is proven on our own products first.";

const fullTitle = "Co-Founder & COO";
const fullLink = "Riverborn";

let currentIndex = 0;
let descriptionIndex = 0;
let titleIndex = 0;
let linkIndex = 0;

onMounted(() => {
  const typeText = () => {
    if (currentIndex < fullText.length) {
      displayText.value += fullText[currentIndex];
      currentIndex++;
      setTimeout(typeText, 30);
    } else {
      isTypingComplete.value = true;
      typeTitle();
    }
  };

  const typeTitle = () => {
    if (titleIndex < fullTitle.length) {
      displayTitle.value += fullTitle[titleIndex];
      titleIndex++;
      setTimeout(typeTitle, 30);
    } else {
      isTitleComplete.value = true;
      typeLink();
    }
  };

  const typeLink = () => {
    if (linkIndex < fullLink.length) {
      displayLink.value += fullLink[linkIndex];
      linkIndex++;
      setTimeout(typeLink, 30);
    } else {
      isLinkComplete.value = true;
      typeDescription();
    }
  };

  const typeDescription = () => {
    if (descriptionIndex < fullDescription.length) {
      displayDescription.value += fullDescription[descriptionIndex];
      descriptionIndex++;
      setTimeout(typeDescription, 30);
    } else {
      isDescriptionComplete.value = true;
    }
  };

  typeText();
});

const handleSubmit = async (e) => {
  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (error) {
    alert("Error sending message. Please try again.");
  }
};

useHead({
  title: "Nasher Uddin | Co-Founder & COO at Riverborn",
  meta: [
    {
      name: "title",
      content: "Nasher Uddin | Co-Founder & COO at Riverborn",
    },
    {
      name: "description",
      content:
        "Co-Founder & COO at Riverborn — an AI system development company building production-grade AI agents, voice systems, and creative AI infrastructure for startups and enterprises globally. 10+ live AI products, 100K+ users.",
    },

    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://nasheruddin.com/" },
    {
      property: "og:title",
      content: "Nasher Uddin | Co-Founder & COO at Riverborn",
    },
    {
      property: "og:description",
      content:
        "Co-Founder & COO at Riverborn — an AI system development company building production-grade AI agents, voice systems, and creative AI infrastructure for startups and enterprises globally. 10+ live AI products, 100K+ users.",
    },
    {
      property: "og:image",
      content: "https://nasheruddin.com/nasir-dotted.png",
    },

    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://nasheruddin.com/" },
    {
      property: "twitter:title",
      content: "Nasher Uddin | Co-Founder & COO at Riverborn",
    },
    {
      property: "twitter:description",
      content:
        "Co-Founder & COO at Riverborn — an AI system development company building production-grade AI agents, voice systems, and creative AI infrastructure for startups and enterprises globally. 10+ live AI products, 100K+ users.",
    },
    {
      property: "twitter:image",
      content: "https://nasheruddin.com/nasir-dotted.png",
    },

    {
      name: "keywords",
      content:
        "Nasher Uddin, Riverborn, AI Agents, Voice AI, LLM, RAG, Generative AI, Multi-Agent Systems, AI Development, Co-Founder, COO, Full Stack Developer, AI Solutions, Enterprise AI, Bangladesh",
    },
    { name: "author", content: "Nasher Uddin" },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "English" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },

    { rel: "canonical", href: "https://nasheruddin.com/" },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
    },
  ],
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=VT323&display=swap");

.font-code {
  font-family: "VT323", monospace;
}

.font-display {
  font-family: "Press Start 2P", cursive;
}

.font-mono {
  font-family: "Space Mono", monospace;
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

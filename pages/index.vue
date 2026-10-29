<template>
  <div class="min-h-screen overflow-x-hidden" style="background-color: #F2FFEE">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <!-- Neural Nodes background -->
      <div class="absolute inset-0 pointer-events-none">
        <NeuralNodes />
      </div>

      <div
        class="relative z-10 container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div class="w-1/2 flex items-center justify-center">
          <img
            src="/nasher-illustrated.webp"
            alt="Nasher Uddin"
            class="w-full max-w-sm object-contain rounded-2xl"
          />
        </div>

        <!-- Text content -->
        <div class="w-1/2 text-center md:text-left">
          <h1 class="text-5xl md:text-6xl font-display text-[#0D2B22] leading-tight">
            Nasher Uddin
          </h1>
          <p class="text-lg font-mono text-[#1A4435] mt-4 mb-6 leading-relaxed max-w-lg">
            I've spent 5 years figuring out how to make AI work in the real world — not demos, not prototypes, but live systems that handle real users every day.
          </p>
          <p class="text-base font-mono text-[#1A4435] leading-relaxed max-w-lg">
            I think in systems. I move fast. I care about what actually ships, not what sounds good in a pitch deck.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <span class="px-4 py-2 bg-[#0D2B22] text-[#D4F53C] font-mono text-sm">5 years building</span>
            <span class="px-4 py-2 bg-[#0D2B22] text-[#D4F53C] font-mono text-sm">10+ products live</span>
            <span class="px-4 py-2 bg-[#0D2B22] text-[#D4F53C] font-mono text-sm">100K+ users</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Achievements -->
    <div class="container mx-auto px-4 mt-24">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display text-[#0D2B22] mb-4">
          By the numbers
        </h2>
        <p class="text-lg text-[#1A4435] font-mono max-w-2xl mx-auto">
          Not milestones I planned — things that happened because I kept showing up.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          class="group relative p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">5+</div>
          <div class="text-[#1A4435] font-mono">Years Active</div>
        </div>

        <div
          class="group relative p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">10+</div>
          <div class="text-[#1A4435] font-mono">AI Products Shipped</div>
        </div>

        <div
          class="group relative p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">100k+</div>
          <div class="text-[#1A4435] font-mono">Worldwide Users</div>
        </div>

        <div
          class="group relative p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-4xl font-bold font-code text-[#0D2B22] mb-2">10+</div>
          <div class="text-[#1A4435] font-mono">AI Engineers</div>
        </div>
      </div>
    </div>

    <!-- What I Do Section -->
    <div id="work" class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display text-[#0D2B22] mb-4">
          What I do
        </h2>
        <p class="text-lg text-[#1A4435] font-mono max-w-2xl mx-auto">
          I build AI systems — and I've been doing it long enough to know what actually works and what doesn't.
        </p>
      </div>

      <div class="max-w-3xl mx-auto mb-12">
        <div class="p-8 rounded-2xl bg-white border border-[#E8EDE6] shadow-[0_1px_8px_rgba(13,43,34,0.07)]">
          <p class="text-[#1A4435] font-mono text-base leading-relaxed">
            I co-founded <a href="https://www.riverborn.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#0D2B22] border-b border-[#0D2B22]/30 hover:border-[#0D2B22] transition-all">Riverborn</a> because I wanted to build AI that earns its keep — systems that run in production, handle real load, and actually solve the problem they were built for.
          </p>
          <p class="text-[#1A4435] font-mono text-base leading-relaxed mt-4">
            I run operations, drive product decisions, stay close to clients, and personally make sure nothing ships unless it's ready. The rule I hold myself to: if I haven't run it on something we own first, it doesn't go to a client.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1">
          <h3 class="text-xl font-code text-[#0D2B22] mb-3">AI Agents</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Multi-step reasoning, self-correction, persistent memory. I've shipped agents that run autonomously across real business workflows.
          </p>
        </div>
        <div class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1">
          <h3 class="text-xl font-code text-[#0D2B22] mb-3">Voice AI</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            LLM-native voice on real telephony. Sub-2s latency. I built Vocalo.ai from scratch — I know this space from the inside.
          </p>
        </div>
        <div class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1">
          <h3 class="text-xl font-code text-[#0D2B22] mb-3">RAG & Chatbots</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Retrieval systems that actually retrieve the right thing. I've built and maintained these across multiple live products.
          </p>
        </div>
        <div class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1">
          <h3 class="text-xl font-code text-[#0D2B22] mb-3">Generative AI</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Image, audio, video generation pipelines. I've shipped creative AI products to tens of thousands of users.
          </p>
        </div>
        <div class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1">
          <h3 class="text-xl font-code text-[#0D2B22] mb-3">Multi-Agent Systems</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Orchestrated agent networks where planning, execution, and feedback work together. I architect these end to end.
          </p>
        </div>
        <div class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1">
          <h3 class="text-xl font-code text-[#0D2B22] mb-3">Operations & Delivery</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Not just building — running. I manage teams, set delivery standards, and stay in the room until the thing actually works.
          </p>
        </div>
      </div>
    </div>

    <!-- Values & Philosophy Section -->
    <div id="thinking" class="container mx-auto px-4 py-16">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-display text-[#0D2B22] mb-4">
          How I think
        </h2>
        <p class="text-lg text-[#1A4435] font-mono max-w-2xl mx-auto">
          These aren't frameworks I read somewhere. They're what I've learned from actually building things.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">01</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Prove it on yourself first</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            If we haven't run it on our own products, we don't sell it.
          </p>
        </div>

        <div
          class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">02</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Ship, then improve</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Real usage teaches more in a week than six months of planning ever could.
          </p>
        </div>

        <div
          class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">03</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Say what you actually think</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Honest feedback early costs less than polite silence later.
          </p>
        </div>

        <div
          class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">04</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Curiosity over credentials</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            The best work comes from wanting to understand, not just wanting to qualify.
          </p>
        </div>

        <div
          class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <div class="text-2xl font-bold font-code text-[#D4F53C] bg-[#0D2B22] inline-block px-2 mb-3">05</div>
          <h3 class="text-lg font-bold font-code text-[#0D2B22] mb-2">Consistency is the skill</h3>
          <p class="text-[#1A4435] font-mono text-sm leading-relaxed">
            Showing up when it's slow matters more than performing when conditions are good.
          </p>
        </div>

        <div
          class="group p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
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
        <p class="text-lg text-[#1A4435] font-mono max-w-2xl mx-auto">
          What I actually think about when I'm not building things
        </p>
      </div>

      <div class="max-w-3xl mx-auto mb-16">
        <div class="p-8 rounded-2xl bg-white border border-[#E8EDE6] shadow-[0_1px_8px_rgba(13,43,34,0.07)]">
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
          class="group p-8 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
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
          class="group p-8 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
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
          class="group p-8 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
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
          class="group p-8 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
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
        <h2 class="text-4xl font-display text-[#0D2B22] mb-4">
          Things I've built
        </h2>
        <p class="text-lg text-[#1A4435] font-mono max-w-2xl mx-auto">
          Every one of these is live, used by real people, and something I personally had a hand in shipping.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.name"
          class="group relative p-6 rounded-2xl bg-white border border-[#E8EDE6] hover:border-[#0D2B22]/30 transition-all duration-300 shadow-[0_1px_8px_rgba(13,43,34,0.07)] hover:shadow-[0_8px_24px_rgba(13,43,34,0.12)] hover:-translate-y-1"
        >
          <!-- Logo -->
          <div class="mb-4">
            <img
              v-if="project.logo"
              :src="project.logo"
              :alt="project.name + ' logo'"
              class="h-10 w-auto max-w-[7rem] rounded-lg object-contain"
            />
            <div
              v-else
              class="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-code"
              style="background-color: #0D2B22; color: #D4F53C;"
            >
              {{ project.name[0] }}
            </div>
          </div>
          <div class="flex justify-between items-start mb-3">
            <h3 class="text-xl font-bold font-code text-[#0D2B22]">
              {{ project.name }}
            </h3>
            <a
              :href="project.link"
              target="_blank"
              class="text-[#0D2B22] hover:text-[#D4F53C] hover:bg-[#0D2B22] transition-colors duration-300 rounded p-1"
              @click="trackEvent('project_click', { project_name: project.name, project_url: project.link })"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
        <h2 class="text-4xl font-display text-[#0D2B22] mb-4">
          Say hello
        </h2>
        <p class="text-lg text-[#1A4435] font-mono max-w-2xl mx-auto">
          I read every message. If something I've built or written resonates with you — I'd genuinely like to hear it.
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
              class="w-full p-4 rounded-xl bg-white border border-[#E8EDE6] text-[#0D2B22] font-mono placeholder-[#9FCEBE] focus:border-[#0D2B22] focus:outline-none transition-colors duration-200"
              required
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              class="w-full p-4 rounded-xl bg-white border border-[#E8EDE6] text-[#0D2B22] font-mono placeholder-[#9FCEBE] focus:border-[#0D2B22] focus:outline-none transition-colors duration-200"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              class="w-full p-4 rounded-xl bg-white border border-[#E8EDE6] text-[#0D2B22] font-mono placeholder-[#9FCEBE] focus:border-[#0D2B22] focus:outline-none transition-colors duration-200"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full p-4 rounded-none bg-[#0D2B22] border border-[#0D2B22] text-[#D4F53C] font-code hover:bg-[#1A4435] transition-all duration-300 text-xl shadow-sm hover:shadow-md"
            @click="trackEvent('cta_click', { cta_label: 'Send Message' })"
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
            @click="trackEvent('social_click', { platform: 'github' })"
          >
            <i class="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/nasir01/"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
            @click="trackEvent('social_click', { platform: 'linkedin' })"
          >
            <i class="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/nasir_uddin01"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
            @click="trackEvent('social_click', { platform: 'twitter' })"
          >
            <i class="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://instagram.com/md.nasir.uddin1995/"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
            @click="trackEvent('social_click', { platform: 'facebook' })"
          >
            <i class="fab fa-facebook text-2xl"></i>
          </a>
          <a
            href="https://instagram.com/nasiruddin.md"
            target="_blank"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
            @click="trackEvent('social_click', { platform: 'instagram' })"
          >
            <i class="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.youtube.com/@nasheruddinofficial"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#0D2B22] hover:text-[#1A4435] transition-all duration-300"
            @click="trackEvent('social_click', { platform: 'youtube' })"
          >
            <i class="fab fa-youtube text-2xl"></i>
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
import { ref } from 'vue'

const projects = [
  {
    name: "Vocalo.ai",
    logo: "/logos/vocalo.svg",
    description:
      "Gamify language learning with immersive AI conversations, personalised curriculum, and real-time comprehensive feedback.",
    tags: ["LLM", "OpenAI", "TTS", "STT"],
    link: "https://vocalo.ai",
  },
  {
    name: "SketchToImage",
    logo: "/logos/sketchtoimage.svg",
    description:
      "Turn simple sketches into stunning, photorealistic artwork using AI diffusion models.",
    tags: ["Stable Diffusion", "ControlNet", "Image To Video"],
    link: "https://sketchtoimage.com",
  },
  {
    name: "HeyLuna.ai",
    logo: "/logos/heyluna.svg",
    description:
      "Experience natural conversations with an expressive 3D AI assistant that sees, hears, and understands.",
    tags: ["LLM", "RAG", "Vector DB", "Chatbot"],
    link: "https://heyluna.ai",
  },
  {
    name: "PhotoFoxAI",
    logo: "/logos/photofoxai.svg",
    description:
      "Generate professional-quality product photography and content without traditional photography equipment.",
    tags: ["Flux", "Diffusion", "Image To Image"],
    link: "https://photofoxai.com",
  },
  {
    name: "QuizMaker.ai",
    logo: "/logos/quizmaker.png",
    description:
      "Create interactive quizzes and tests with AI-powered question generation and evaluation.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
    link: "https://quizmaker.ai",
  },
  {
    name: "AiStoryGen",
    logo: "/logos/aistorygen.png",
    description:
      "Craft immersive stories with AI-generated narratives, visuals, and audio experiences.",
    tags: ["LLM", "Diffusion", "Synthetix"],
    link: "https://aistorygen.org",
  },
  {
    name: "InvoiceAgent.ai",
    logo: "/logos/invoiceagent.png",
    description:
      "AI-powered invoice automation tool that extracts, processes, and manages invoices from emails and manual uploads with 99.9% accuracy.",
    tags: ["OpenAI", "OAuth2", "VectorDB", "NLP Search", "Real-time"],
    link: "https://invoiceagent.ai",
  },
  {
    name: "Wordrocket.ai",
    logo: "/logos/wordrocket.png",
    description:
      "Create professional content across text, image, video, and audio with one powerful AI platform.",
    tags: ["LLM", "OpenAI", "Claude", "Content Engine"],
    link: "https://wordrocket.ai",
  },
];


const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()
  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      trackEvent('form_submit', { form_name: 'contact' })
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (error) {
    alert("Error sending message. Please try again.");
  }
};

const description = "Co-Founder & COO at Riverborn — an AI system development company building production-grade AI agents, voice systems, and creative AI infrastructure for startups and enterprises globally. 10+ live AI products, 100K+ users."

useHead({
  htmlAttrs: { lang: "en" },
  title: "Nasher Uddin | Co-Founder & COO at Riverborn",
  meta: [
    { name: "title", content: "Nasher Uddin | Co-Founder & COO at Riverborn" },
    { name: "description", content: description },
    { name: "keywords", content: "Nasher Uddin, Riverborn, AI Agents, Voice AI, LLM, RAG, Generative AI, Multi-Agent Systems, AI Development, Co-Founder, COO, AI Solutions, Enterprise AI, Bangladesh, AI Infrastructure" },
    { name: "author", content: "Nasher Uddin" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "language", content: "English" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },

    // Open Graph
    { property: "og:type", content: "profile" },
    { property: "og:url", content: "https://nasheruddin.com/" },
    { property: "og:site_name", content: "Nasher Uddin" },
    { property: "og:locale", content: "en_US" },
    { property: "og:title", content: "Nasher Uddin | Co-Founder & COO at Riverborn" },
    { property: "og:description", content: description },
    { property: "og:image", content: "https://nasheruddin.com/nasher-illustrated.webp" },
    { property: "og:image:alt", content: "Nasher Uddin — Co-Founder & COO at Riverborn" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "profile:first_name", content: "Nasher" },
    { property: "profile:last_name", content: "Uddin" },
    { property: "profile:username", content: "nasir01" },

    // Twitter / X
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@nasir_uddin01" },
    { name: "twitter:creator", content: "@nasir_uddin01" },
    { name: "twitter:title", content: "Nasher Uddin | Co-Founder & COO at Riverborn" },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: "https://nasheruddin.com/nasher-illustrated.webp" },
    { name: "twitter:image:alt", content: "Nasher Uddin — Co-Founder & COO at Riverborn" },
  ],
  link: [
    { rel: "canonical", href: "https://nasheruddin.com/" },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
    },
  ],
  script: [
    // JSON-LD: Person — primary entity (most important for AEO)
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://nasheruddin.com/#person",
        name: "Nasher Uddin",
        alternateName: "Md. Nasher Uddin",
        url: "https://nasheruddin.com",
        image: {
          "@type": "ImageObject",
          url: "https://nasheruddin.com/nasher-illustrated.webp",
          width: 800,
          height: 800,
        },
        jobTitle: "Co-Founder & COO",
        worksFor: {
          "@type": "Organization",
          "@id": "https://www.riverborn.com/#organization",
          name: "Riverborn",
          url: "https://www.riverborn.com",
        },
        description: description,
        knowsAbout: [
          "AI Systems",
          "Voice AI",
          "Large Language Models",
          "Retrieval-Augmented Generation",
          "Generative AI",
          "Multi-Agent Systems",
          "AI Infrastructure",
          "Product Strategy",
          "Startup Operations",
          "AI Product Development",
        ],
        sameAs: [
          "https://linkedin.com/in/nasir01/",
          "https://github.com/nasiruddin01",
          "https://twitter.com/nasir_uddin01",
          "https://instagram.com/nasiruddin.md",
          "https://www.youtube.com/@nasheruddinofficial",
          "https://www.riverborn.com",
        ],
      }),
    },
    // JSON-LD: Organization
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.riverborn.com/#organization",
        name: "Riverborn",
        url: "https://www.riverborn.com",
        founder: { "@type": "Person", name: "Nasher Uddin", url: "https://nasheruddin.com" },
        description: "AI system development company building production-grade AI agents, voice systems, and creative AI infrastructure for startups and enterprises globally.",
        knowsAbout: ["AI Agents", "Voice AI Systems", "LLM Infrastructure", "Creative AI", "Enterprise AI"],
      }),
    },
    // JSON-LD: WebSite
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://nasheruddin.com/#website",
        name: "Nasher Uddin",
        url: "https://nasheruddin.com",
        description: "Personal portfolio of Nasher Uddin, Co-Founder & COO at Riverborn — AI systems builder.",
        author: { "@id": "https://nasheruddin.com/#person" },
      }),
    },
  ],
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap");

.font-display {
  font-family: "Besley", serif;
  font-weight: 700;
}

.font-code {
  font-family: "Besley", serif;
  font-weight: 600;
}

.font-mono {
  font-family: "Geist", sans-serif;
}
</style>

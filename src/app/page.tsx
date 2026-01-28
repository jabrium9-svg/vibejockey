export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <HeroSection />
      <HowItWorks />
      <WhoAreVibeJockeys />
      <AgenciesSection />
      <TheDifference />
      <VBSTPSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Wordmark */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
          <span className="gradient-text">Vibe</span>
          <span className="text-white ml-2 sm:ml-4">Jockey</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 font-light mb-4 tracking-wide">
          Your project. Your pace. Your vibe jockey.
        </p>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-[#94A3B8] mb-12 max-w-2xl leading-relaxed">
          Expert human help, delivered through conversation. Connect with skilled individuals or agencies who understand your field and can build what you need.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center">
          <a
            href="https://app.jabrium.com"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-105"
          >
            <span>Tell us what you need</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-[#64748B]">
            Our agents do the matchmaking. You just talk.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      description: "Have a conversation with our agent. Voice or text — just describe your project. No forms, no browsing. The agent listens, asks questions, and understands.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Get matched",
      description: "Our agent introduces you to the right vibe jockey or agency for your project. They reach out when they're ready to help.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Work together",
      description: "Conversation that never dies. Pick up where you left off, whenever you're ready. No lost context, no pressure. Your pace.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Getting expert help should be as easy as having a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-[#3B82F6]/50 to-transparent" />
              )}

              <div className="gradient-border p-8 h-full transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center text-[#60A5FA]">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-[#1E293B]">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoAreVibeJockeys() {
  const vibeJockeys = [
    {
      name: "Marco V.",
      specialty: "Mobile Apps & Automation",
      bio: "10 years building apps that ship. Former gardener who learned to code — now builds tools for landscaping businesses. Flutter, React Native, backend automation.",
      avatar: "MV",
      color: "#3B82F6",
    },
    {
      name: "Priya S.",
      specialty: "Brand Identity & Web Design",
      bio: "Fitness coach turned designer. Helps wellness brands find their voice. Knows the industry inside out. Figma to production.",
      avatar: "PS",
      color: "#8B5CF6",
    },
    {
      name: "Jordan K.",
      specialty: "E-commerce & Integrations",
      bio: "Ran an online store for 5 years. Now builds them for others. Shopify, WooCommerce, payment integrations, inventory systems.",
      avatar: "JK",
      color: "#06B6D4",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Who are vibe jockeys?
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            The coder of the future isn&apos;t just an IT person. Vibe jockeys are <span className="text-white font-medium">domain experts</span> who use AI tools to build things. They understand your field <em>and</em> can deliver what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vibeJockeys.map((vj, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: vj.color }}
                >
                  {vj.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{vj.name}</h4>
                  <p className="text-[#60A5FA] text-sm font-medium">{vj.specialty}</p>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{vj.bio}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[#475569] text-sm">
          Example profiles. Real vibe jockeys coming soon.
        </p>
      </div>
    </section>
  );
}

function AgenciesSection() {
  const agencies = [
    {
      name: "Greenline Digital",
      specialty: "Full-Stack Development",
      bio: "A team of 8 engineers. From idea to launch. Satisfaction guaranteed — we keep working until it's right.",
      initials: "GD",
      color: "#10B981",
    },
    {
      name: "Coral Creative Agency",
      specialty: "Design to Deployment",
      bio: "End-to-end product design and build. Branding, UX, development — we handle everything so you don't have to.",
      initials: "CC",
      color: "#F59E0B",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Want a team with guarantees?
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Agencies offer team support and quality guarantees. They handle everything so you don&apos;t have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agencies.map((agency, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#8B5CF6]/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]" />

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: agency.color }}
                  >
                    {agency.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-semibold text-lg">{agency.name}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#8B5CF6]/20 text-[#A78BFA] font-medium">
                        Agency
                      </span>
                    </div>
                    <p className="text-[#60A5FA] text-sm font-medium">{agency.specialty}</p>
                  </div>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{agency.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-[#475569] text-sm">
          Example agencies. Real partners coming soon.
        </p>
      </div>
    </section>
  );
}

function TheDifference() {
  const benefits = [
    {
      title: "No forms, no browsing",
      description: "Just tell us what you need. Our agents understand context and nuance — things forms can't capture.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Agents do the matchmaking",
      description: "You don't browse profiles hoping for the best. Our agents understand your needs and introduce you to the right people.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Conversation never dies",
      description: "Full context, always. Pick up exactly where you left off — days, weeks, or months later.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Your pace",
      description: "Async communication. No scheduling pressure. Respond when you can. Life happens — your project doesn't have to stop.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#020617]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The difference
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Getting help shouldn&apos;t mean endless forms, lost threads, or starting from scratch every time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 flex gap-4 transition-all duration-300 hover:border-[#3B82F6]/20"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center text-[#60A5FA] shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VBSTPSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#94A3B8] mb-3 text-lg">
          Just want it built without the back-and-forth?
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Try <span className="gradient-text">Vibesetup</span>.
        </h3>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          If you already know exactly what you need and want it handled start to finish, Vibesetup is the faster path.
        </p>
        <a
          href="https://vbstp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 border border-white/10 hover:border-white/20"
        >
          <span>Go to Vibesetup</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#020617] border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-white mb-1">
              <span className="gradient-text">Vibe</span> Jockey
            </p>
            <p className="text-sm text-[#475569]">
              A Jabrium Engage Property
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-[#64748B]">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1E293B] text-center">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} Jabrium. Your project. Your pace. Your vibe jockey.
          </p>
        </div>
      </div>
    </footer>
  );
}

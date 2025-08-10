"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeDemo, setActiveDemo] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const demoScreens = [
    {
      title: "Split a dinner bill",
      subtitle: "Everyone pays their fair share",
      image: "💰",
      action: "Add $87.50 dinner expense"
    },
    {
      title: "Track who did dishes",
      subtitle: "Photo proof, no arguments",
      image: "📸",
      action: "Mark chore complete ✅"
    },
    {
      title: "Manage Netflix subscription",
      subtitle: "Auto-split every month",
      image: "📺",
      action: "$15.99 split 4 ways = $4.00 each"
    }
  ];

  const testimonials = [
    {
      text: "Bondi killed the awkward money talk in our flat. Now we just log and move on.",
      author: "Amira",
      role: "Roommate, Tunis",
      avatar: "🙋‍♀️"
    },
    {
      text: "Chore leaderboard actually works — our living room has never been cleaner.",
      author: "Tom",
      role: "Graduate Student",
      avatar: "👨‍🎓"
    },
    {
      text: "We tracked a 10-person trip in minutes and settled in two clicks. Game changer.",
      author: "Priya",
      role: "Travel Group Leader",
      avatar: "✈️"
    }
  ];

  const faqs = [
    {
      question: "Is Bondi a bank?",
      answer: "No. Bondi tracks and calculates. You can settle via wallet or export a settlement file for external payments."
    },
    {
      question: "Do I need crypto to use Bondi?",
      answer: "No. You can try the demo. For full immutability and one-click settling we use wallets, but we also support exportable settlement reports."
    },
    {
      question: "Where are receipts stored?",
      answer: "Receipts/images are stored on IPFS and referenced by an on-chain hash—so they're tamper-evident."
    },
    {
      question: "How do I invite members?",
      answer: "Create a group and share the invite link. Members sign in with their wallet or join as guests."
    },
    {
      question: "What if someone refuses to pay?",
      answer: "Bondi is a record-keeping and settlement tool. It provides transparent evidence and suggested actions — enforcement is outside the app."
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);

      // Intersection observer for sections
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleSections(prev => new Set([...prev, section.getAttribute('data-section') || '']));
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demoScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [demoScreens.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const NetworkBackground = () => {
    return (
      <div className="network-bg">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="network-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="network-line"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: `${100 + Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 180}deg)`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Scroll Progress */}
      <div 
        className="scroll-progress fixed top-0 left-0 h-1 bg-gradient-to-r from-coral to-accent z-50 transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div className="min-h-screen bg-gradient-to-br from-warm-white via-orange-50 to-red-50">
        {/* Hero Section */}
        <main ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <NetworkBackground />
          
          {/* Floating elements */}
          <div className="floating-element top-20 left-20 w-24 h-24 bg-gradient-to-r from-coral/20 to-accent/20 rounded-full blur-sm"></div>
          <div className="floating-element top-40 right-32 w-16 h-16 bg-gradient-to-r from-sage/20 to-emerald-400/20 rounded-2xl blur-sm"></div>
          <div className="floating-element bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-primary/20 rounded-full blur-sm"></div>

          <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
            {/* Hero Badge */}
            <div className="hero-badge">
              <span className="text-lg">✨</span>
              <span>No more awkward &quot;who owes who?&quot; moments</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="gradient-text">Simplify shared living.</span><br />
              <span className="gradient-coral">Split bills, chores, and subscriptions — fairly.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Bondi makes group life easy and transparent. One shared ledger, clear responsibilities, 
              zero awkward money conversations.
            </p>

            {/* Hero Microcopy */}
            <p className="hero-microcopy">
              No accounts to argue over. Connect a wallet, invite your group, and start sharing honestly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="#"
                className="btn-primary group"
                style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}
              >
                <span>Get started — it&apos;s free</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#demo"
                className="btn-secondary group"
                style={{ animation: 'fadeInUp 1s ease-out 1s both' }}
              >
                <span>See demo</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col items-center" style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}>
              <p className="text-sm text-secondary mb-6">Used in dorms, co-living spaces, and travel squads</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-primary rounded-2xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">🏠</div>
                  <span className="font-medium text-sm">Roommates</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-coral to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">🎓</div>
                  <span className="font-medium text-sm">Students</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-sage to-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">✈️</div>
                  <span className="font-medium text-sm">Travel Groups</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">👥</div>
                  <span className="font-medium text-sm">Co-living</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-coral rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </main>

        {/* Problem Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50" data-section="problem">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">
                <span className="text-red-600">Tired</span> of this?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-100">
                  <div className="text-4xl mb-4">😤</div>
                  <h3 className="font-bold mb-3 text-red-700">Awkward Money Talks</h3>
                  <p className="text-secondary">&quot;Um, you still owe me for groceries last week...&quot;</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-100">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="font-bold mb-3 text-red-700">Messy Spreadsheets</h3>
                  <p className="text-secondary">Complex formulas, outdated totals, and nobody wants to be the accountant.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-red-100">
                  <div className="text-4xl mb-4">🤷‍♂️</div>
                  <h3 className="font-bold mb-3 text-red-700">Unfair Splits</h3>
                  <p className="text-secondary">&quot;I barely ate anything!&quot; vs &quot;You used all the toilet paper!&quot;</p>
                </div>
              </div>
              <p className="text-xl text-secondary">
                There&apos;s got to be a better way... 💡
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-24 section-warm" data-section="demo">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6">
                  Meet <span className="gradient-text">Bondi</span>
                </h2>
                <p className="text-xl text-secondary max-w-3xl mx-auto">
                  Watch how Sarah&apos;s group uses Bondi for everything from pizza nights to monthly utilities
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Interactive Demo */}
                <div className="relative">
                  <div className="demo-phone w-full max-w-sm mx-auto relative">
                    <div className="p-8">
                      <div className="bg-white rounded-2xl p-6 shadow-inner">
                        <div className="text-center mb-6">
                          <div className="text-6xl mb-4">{demoScreens[activeDemo].image}</div>
                          <h3 className="font-bold text-lg text-primary">{demoScreens[activeDemo].title}</h3>
                          <p className="text-secondary text-sm">{demoScreens[activeDemo].subtitle}</p>
                        </div>
                        <div className="bg-soft-gray p-4 rounded-xl text-center">
                          <p className="text-sm font-medium text-primary">{demoScreens[activeDemo].action}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo Controls */}
                  <div className="flex justify-center gap-3 mt-8">
                    {demoScreens.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeDemo === index ? 'bg-coral scale-125' : 'bg-gray-300'
                        }`}
                        onClick={() => setActiveDemo(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Demo Benefits */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-coral to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">💰</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Auto-Split Everything</h3>
                      <p className="text-secondary">Bills, groceries, subscriptions — split equally, by usage, or custom ratios. Bondi does the math.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-sage to-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">✅</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Chore Proof System</h3>
                      <p className="text-secondary">Upload photos, set deadlines, track completion. No more &quot;I did it last week&quot; debates.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">⚡</div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Instant Settlements</h3>
                      <p className="text-secondary">Pay through wallets or get export summaries for bank transfers. Fair and fast.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="py-24 bg-white" data-section="timeline">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">How Sarah&apos;s Group Uses Bondi</h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                Follow along as a typical 4-person apartment navigates bills, chores, and subscriptions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Sarah creates the group",
                  description: "Connect wallet, name it 'Maple Street Apt', invite 3 roommates with a link",
                  detail: "Takes 90 seconds. Everyone gets notifications and can join as guests or with wallets.",
                  icon: "👥"
                },
                {
                  step: "2", 
                  title: "Tom logs the electricity bill",
                  description: "Uploads the $120 electric bill receipt, splits it 4 ways equally",
                  detail: "Receipt hashed to IPFS, everyone owes $30. Automatic notifications sent.",
                  icon: "⚡"
                },
                {
                  step: "3",
                  title: "Lisa adds Netflix subscription", 
                  description: "Sets up recurring $15.99/month, auto-split between 4 people",
                  detail: "Bondi tracks each billing cycle and reminds everyone when payment is due.",
                  icon: "📺"
                },
                {
                  step: "4",
                  title: "Everyone settles up",
                  description: "One-click wallet payments or export settlement summary for bank transfers",
                  detail: "Transparent ledger shows who paid what. No arguments, no confusion.",
                  icon: "✨"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`timeline-step relative mb-16 ${visibleSections.has('timeline') ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="bg-gradient-to-br from-white to-soft-gray p-8 rounded-3xl shadow-xl border border-gray-100 interactive-card">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-coral to-accent rounded-2xl flex items-center justify-center text-white font-bold">
                            {item.step}
                          </div>
                          <span className="text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                        <p className="text-lg mb-4 text-secondary">{item.description}</p>
                        <p className="text-sm text-secondary/80 italic">{item.detail}</p>
                      </div>
                    </div>
                    <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} text-center`}>
                      <div className="text-8xl opacity-20 font-bold text-coral">
                        {item.step}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Deep Dive */}
        <section className="py-24 section-soft" data-section="features">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Built for Real Life</h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                Every feature designed to eliminate friction and build trust in your group
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-6 gradient-text">Auto-Split Options</h3>
                <p className="text-lg mb-6 text-secondary">
                  Split evenly, by percentage, or per-person. Apply per-item overrides — split rental utilities equally but groceries by usage.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full"></div>
                    <span>Equal splits for shared expenses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full"></div>
                    <span>Usage-based for personal items</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral rounded-full"></div>
                    <span>Custom ratios for income-based sharing</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-coral/10">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧮</div>
                  <div className="space-y-3">
                    <div className="bg-soft-gray p-4 rounded-xl">
                      <p className="font-medium">Groceries: $80.00</p>
                      <p className="text-sm text-secondary">Split by usage: Sarah 40%, Tom 30%, Lisa 20%, Mike 10%</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-secondary">Sarah owes: </span>
                      <span className="font-bold text-xl text-coral">$32.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold mb-6 gradient-text">Chores with Proof</h3>
                <p className="text-lg mb-6 text-secondary">
                  Upload a quick photo or a short note to confirm a chore is done. Chore completions are recorded and visible — no more &quot;I did it last week&quot; debates.
                </p>
                <div className="bg-gradient-to-r from-sage/10 to-emerald-100/50 p-6 rounded-2xl border border-sage/20">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🏆</span>
                    <span className="font-bold">This Week&apos;s Chore Champion</span>
                  </div>
                  <div className="text-lg font-medium text-sage">Lisa: 4 chores completed</div>
                </div>
              </div>
              <div className="lg:order-1 bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-sage/10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-soft-gray rounded-xl">
                    <span>🧽 Clean bathroom</span>
                    <span className="text-sage font-medium">✅ Done</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-soft-gray rounded-xl">
                    <span>🗑️ Take out trash</span>
                    <span className="text-coral font-medium">📸 Pending</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-soft-gray rounded-xl">
                    <span>🍽️ Do dishes</span>
                    <span className="text-secondary">Due tomorrow</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 gradient-text">Smart Recurring Charges</h3>
                <p className="text-lg mb-6 text-secondary">
                  Add subscriptions once and Bondi will track each billing cycle, remind delinquent payers, and roll up totals automatically.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">📺</div>
                    <div className="font-medium">Netflix</div>
                    <div className="text-sm text-secondary">$4.00/month</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl mb-2">🎵</div>
                    <div className="font-medium">Spotify</div>
                    <div className="text-sm text-secondary">$2.50/month</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-accent/10">
                <h4 className="font-bold mb-4">Monthly Subscriptions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Netflix Premium</span>
                    <span className="font-bold">$15.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Spotify Family</span>
                    <span className="font-bold">$9.99</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-bold">
                    <span>Your share:</span>
                    <span className="text-coral text-xl">$6.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-16 bg-primary text-white" data-section="stats">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Happy Groups</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$50K+</div>
                <div className="text-blue-200">Bills Split</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3min</div>
                <div className="text-blue-200">Setup Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-blue-200">Hidden Fees</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 section-warm" data-section="testimonials">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Real Stories from Real Users</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="testimonial-card">
                <div className="text-center">
                  <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
                  <blockquote className="text-2xl font-medium mb-6 italic leading-relaxed">
                    &quot;{testimonials[currentTestimonial].text}&quot;
                  </blockquote>
                  <div className="font-bold text-primary text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-secondary">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-coral scale-125' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white" data-section="pricing">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Plans that fit roommates and teams</h2>
              <p className="text-xl text-secondary">Start free, upgrade when you need more power</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative interactive-card">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-bold mb-4">Free</div>
                <p className="text-secondary mb-6">Perfect for small groups and demos</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>Up to 3 groups</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>Unlimited expenses & chores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>IPFS receipts (limited monthly)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>Basic support</span>
                  </li>
                </ul>
                <button className="w-full bg-soft-gray text-primary py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                  Get Started Free
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gradient-to-br from-coral to-pink-500 p-8 rounded-3xl shadow-2xl text-white relative interactive-card transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-4">$4<span className="text-xl">/month per group</span></div>
                <p className="text-pink-100 mb-6">For busy households and active groups</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">✓</span>
                    <span>All Starter features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">✓</span>
                    <span>Recurring subscription automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">✓</span>
                    <span>Exportable settlement reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-yellow-300">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-coral py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Start Pro Trial
                </button>
              </div>

              {/* Campus Plan */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative interactive-card">
                <h3 className="text-2xl font-bold mb-2">Campus</h3>
                <div className="text-4xl font-bold mb-4">Custom</div>
                <p className="text-secondary mb-6">For universities, dorms, and large communities</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>Volume pricing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>Single sign-on integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sage">✓</span>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <button className="w-full border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all">
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-secondary">
                🎓 <strong>Students get 50% off year 1</strong> with promo code <code className="bg-accent/20 px-2 py-1 rounded">STUDENT50</code>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 section-soft" data-section="faq">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Questions? We&apos;ve got answers.</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div 
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-primary via-navy to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-coral/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8">
              Ready to make group life simple?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of roommates, students, and travel groups who&apos;ve ditched the spreadsheets and awkward conversations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="#"
                className="bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-3"
              >
                <span>Start a group in 90 seconds</span>
                <span className="text-2xl">🚀</span>
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>Try interactive demo</span>
                <span className="text-2xl">▶️</span>
              </a>
            </div>

            <div className="text-center">
              <p className="text-blue-200 mb-4">🔒 Records anchored on Polygon • 🔐 We don&apos;t sell your data</p>
              <div className="flex justify-center items-center gap-6 text-sm text-blue-300">
                <span>✨ Setup in under 3 minutes</span>
                <span>•</span>
                <span>💳 No credit card required</span>
                <span>•</span>
                <span>🤝 Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-charcoal text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold mb-4 gradient-text">Bondi</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Keep it fair, keep it friendly. The blockchain-powered app that makes shared living simple and transparent.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-coral rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="sr-only">Twitter</span>
                    🐦
                  </a>
                  <a href="#" className="w-10 h-10 bg-coral rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="sr-only">Discord</span>
                    💬
                  </a>
                  <a href="#" className="w-10 h-10 bg-coral rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="sr-only">GitHub</span>
                    📱
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Platform</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">Features</a>
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">How It Works</a>
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">Pricing</a>
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">Security</a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Support</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">Docs</a>
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">Terms</a>
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">Privacy</a>
                  <a href="#" className="block text-gray-400 hover:text-coral transition-colors">Contact</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Bondi — Keep it fair, keep it friendly. 🤝
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
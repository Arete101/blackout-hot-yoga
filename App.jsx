import React, { useState } from 'react';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);

const FlameIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const ShieldAlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0-1.275-1.275L12 3Z"/></svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quizSelection, setQuizSelection] = useState('strength');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', experience: 'all', message: '' });
  const [bookingStatus, setBookingStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setFeedbackMsg("Your spot near the radiant panels is secured. Welcome to the dark.");
      setNewsletterEmail('');
      setTimeout(() => setFeedbackMsg(''), 5000);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setBookingStatus("Thermal alignment complete. Our practitioners will reach out within 12 hours.");
      setContactForm({ name: '', email: '', experience: 'all', message: '' });
      setTimeout(() => setBookingStatus(''), 6000);
    }
  };

  const scientificBenefits = [
    {
      title: "Vasodilation & Cardiovascular Efficiency",
      tag: "Vascular",
      desc: "Practicing in our signature 104°F (40°C) far-infrared heat triggers profound vasodilation. Blood vessels expand, significantly reducing cardiac workload while increasing stroke volume and systemic oxygen transport to oxygen-depleted muscle fibers.",
      evidence: "Source: Journal of Applied Physiology (Infrared Thermoregulation Studies, 2021)"
    },
    {
      title: "Myofascial Plasticity & Elasticity",
      tag: "Physiological",
      desc: "High ambient temperature temporarily alters the viscoelastic properties of collagenous tissues. This increases muscle and ligament elasticity, reducing physical resistance during deep extension sequences and lessening the risk of micro-tearing.",
      evidence: "Source: Clinical Biomechanics (Heat & Collagen Elasticity Research)"
    },
    {
      title: "Detoxification & Heavy Metal Excretion",
      tag: "Biochemical",
      desc: "Perspiration induced by radiant infrared heat differs from normal sweat. Studies show a higher concentration of heavy metals (nickel, lead, copper, and arsenic) is excreted via sweat glands during deep-heat exposure compared to physical exercise in temperate climates.",
      evidence: "Source: Archives of Environmental and Contamination Toxicology"
    },
    {
      title: "Cortisol Suppression & Stress Relief",
      tag: "Neurological",
      desc: "Radiant heat triggers the release of Heat Shock Proteins (HSP70) and stimulates sensory nerve fibers, triggering a parasympathetic shift. This downsizes salivary cortisol levels and enhances neural serotonin production.",
      evidence: "Source: Harvard Medical Health (Thermotherapy & Depressive Disorders)"
    }
  ];

  const triadFocus = {
    strength: {
      title: "Pure Isometric Strength",
      subtitle: "Power in the Stillness",
      description: "Under the deep infrared panels, muscles are warmed quickly to their optimal operating range. Holding prolonged asanas in high heat triggers intense isometric contractions. This maximizes motor unit recruitment, building absolute core power, shoulder stabilization, and lower body muscular endurance.",
      temperature: "105°F / 41°C",
      humidity: "40% RH",
      intensity: "High (Level 4/5)",
      pose: "Warrior III to Crescent Lunge Holds"
    },
    balance: {
      title: "Vestibular & Core Alignment",
      subtitle: "Center of Gravity in the Dark",
      description: "Balance in the dark is a sensory experience. Eliminating visual noise forces your nervous system to rely strictly on proprioception and vestibular alignment. The hot environment adds a physiological stressor that demands absolute presence of mind and micro-adjustments in your stabilization chains.",
      temperature: "102°F / 39°C",
      humidity: "35% RH",
      intensity: "Medium-High (Level 3.5/5)",
      pose: "Eagle Pose & Standing Bow Pulling Sequence"
    },
    flexibility: {
      title: "Deep Elastic Release",
      subtitle: "Myofascial Decompression",
      description: "Our far-infrared heat mimics the natural radiation spectrum of the sun, directly warming the deep muscle tissue up to 3 inches deep. This thermal penetration increases the stretch threshold of ligaments, tendons, and joint capsules, allowing safe, deep, and lasting fascial release.",
      temperature: "104°F / 40°C",
      humidity: "45% RH",
      intensity: "Medium (Level 3/5)",
      pose: "Prone Pigeon & Extended Lizard Pose"
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans antialiased selection:bg-[#ff3c00] selection:text-white flex flex-col justify-between overflow-x-hidden">
      <div className="absolute top-0 left-1/4 w-[30vw] h-[30vw] bg-[#ff3c00] opacity-[0.06] rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-10 w-[25vw] h-[25vw] bg-[#ff3c00] opacity-[0.04] rounded-full blur-[140px] pointer-events-none z-0"></div>

      <header className="border-b border-zinc-900 sticky top-0 bg-black/85 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 border border-zinc-700 rounded-lg flex items-center justify-center bg-black hover:border-[#ff3c00] transition-colors duration-300">
                <span className="font-bold text-white tracking-widest text-xs">B</span>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3c00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff3c00]"></span>
              </span>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-[0.25em] text-white uppercase">Blackout</h1>
              <p className="text-[10px] tracking-[0.4em] text-zinc-500 uppercase">Hot Yoga</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider font-medium">
            <button onClick={() => setActiveTab('home')} className={`hover:text-white transition-colors duration-200 ${activeTab === 'home' ? 'text-white border-b-2 border-[#ff3c00] pb-1' : 'text-zinc-400'}`}>Home</button>
            <button onClick={() => setActiveTab('about')} className={`hover:text-white transition-colors duration-200 ${activeTab === 'about' ? 'text-white border-b-2 border-[#ff3c00] pb-1' : 'text-zinc-400'}`}>About</button>
            <button onClick={() => setActiveTab('wellbeing')} className={`hover:text-white transition-colors duration-200 ${activeTab === 'wellbeing' ? 'text-white border-b-2 border-[#ff3c00] pb-1' : 'text-zinc-400'}`}>Wellbeing</button>
            <button onClick={() => setActiveTab('contact')} className={`hover:text-white transition-colors duration-200 ${activeTab === 'contact' ? 'text-white border-b-2 border-[#ff3c00] pb-1' : 'text-zinc-400'}`}>Contact</button>
          </nav>

          <button onClick={() => setActiveTab('contact')} className="px-5 py-2.5 border border-[#ff3c00] text-[#ff3c00] hover:bg-[#ff3c00] hover:text-white rounded-lg text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,60,0,0.1)] hover:shadow-[0_0_25px_rgba(255,60,0,0.3)]">
            Reserve Session
          </button>
        </div>
      </header>

      <main className="flex-grow z-10">
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#ff3c00] rounded-full animate-pulse"></span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Pure Infrared Radiant Heat Studio</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white uppercase leading-none">
                  Strength <span className="text-zinc-600">·</span> Balance <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-[#ff3c00] animate-pulse">
                    Flexibility
                  </span>
                </h1>

                <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                  A premium sensory deprivation hot yoga experience. In absolute darkness, heated purely by state-of-the-art infrared radiant panels, we focus on the fundamental triad of physical evolution. No mirrors, no distractions—only pure performance.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button onClick={() => setActiveTab('wellbeing')} className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-lg text-xs uppercase tracking-widest font-bold transition-all duration-200">Explore Science</button>
                  <button onClick={() => setActiveTab('contact')} className="px-8 py-4 bg-[#121212] border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#ff3c00] rounded-lg text-xs uppercase tracking-widest font-bold transition-all duration-200">Book Class Intro</button>
                </div>
              </div>

              <div className="mt-16 bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-6 md:p-10 max-w-5xl mx-auto relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff3c00] opacity-10 rounded-full blur-[40px] pointer-events-none"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-900">
                  <div className="pt-4 md:pt-0">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">Optimum Temperature</p>
                    <p className="text-3xl font-extrabold text-white mt-2">104°F <span className="text-xs text-[#ff3c00]">40°C</span></p>
                    <p className="text-[10px] text-zinc-400 mt-1">Direct tissue heating</p>
                  </div>
                  <div className="pt-4 md:pt-0">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">Therapeutic Focus</p>
                    <p className="text-3xl font-extrabold text-white mt-2">Triad</p>
                    <p className="text-[10px] text-zinc-400 mt-1">Strength. Balance. Flex.</p>
                  </div>
                  <div className="pt-4 md:pt-0">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">Ambient Lighting</p>
                    <p className="text-3xl font-extrabold text-white mt-2">Darkness</p>
                    <p className="text-[10px] text-zinc-400 mt-1">Zero distraction focus</p>
                  </div>
                  <div className="pt-4 md:pt-0">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">Far Infrared</p>
                    <p className="text-3xl font-extrabold text-white mt-2">9.4 microns</p>
                    <p className="text-[10px] text-zinc-400 mt-1">Optimal cell absorption</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-b from-black to-zinc-950 py-20 border-t border-zinc-900 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-[#ff3c00]">The Core Architecture</p>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">The Foundational Focus</h2>
                  <p className="max-w-xl mx-auto text-sm text-zinc-400">Every posture, heat setting, and sensory design element is fine-tuned to unlock three specific bodily capabilities.</p>
                </div>

                <div className="flex justify-center space-x-2 sm:space-x-4 mb-10 max-w-md mx-auto bg-[#0a0a0a] p-1.5 rounded-xl border border-zinc-900">
                  {Object.keys(triadFocus).map((key) => (
                    <button key={key} onClick={() => setQuizSelection(key)} className={`flex-1 py-3 text-xs uppercase tracking-widest font-bold rounded-lg transition-all duration-300 ${quizSelection === key ? 'bg-[#161616] text-white border-b-2 border-[#ff3c00]' : 'text-zinc-500 hover:text-zinc-300'}`}>{key}</button>
                  ))}
                </div>

                <div className="bg-[#0f0f0f] border border-zinc-900 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#ff3c00]"></div>
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono">Foundational Target</span>
                      <h3 className="text-3xl font-bold text-white uppercase tracking-tight">{triadFocus[quizSelection].title}</h3>
                      <p className="text-sm italic text-[#ff3c00] font-light">{triadFocus[quizSelection].subtitle}</p>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{triadFocus[quizSelection].description}</p>
                    <div className="pt-4 border-t border-zinc-900 grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Recommended Pose</span>
                        <span className="text-xs font-semibold text-white">{triadFocus[quizSelection].pose}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Relative Heat Level</span>
                        <span className="text-xs font-semibold text-white">{triadFocus[quizSelection].temperature}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-[#070707] border border-zinc-800/60 rounded-2xl p-6 space-y-5">
                    <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold border-b border-zinc-900 pb-3 flex items-center gap-2"><FlameIcon /> Class Environment Metrics</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center"><span className="text-zinc-500">Target Temp</span><span className="text-white font-mono">{triadFocus[quizSelection].temperature}</span></div>
                      <div className="flex justify-between items-center"><span className="text-zinc-500">Humidity Level</span><span className="text-white font-mono">{triadFocus[quizSelection].humidity}</span></div>
                      <div className="flex justify-between items-center"><span className="text-zinc-500">Neurological Demand</span><span className="text-[#ff3c00] font-mono">{triadFocus[quizSelection].intensity}</span></div>
                    </div>
                    <button onClick={() => { setContactForm(prev => ({ ...prev, message: `I am highly interested in attending a specialized session centered on ${triadFocus[quizSelection].title}.` })); setActiveTab('contact'); }} className="w-full py-3 bg-zinc-900 hover:bg-[#ff3c00] text-zinc-300 hover:text-white rounded-lg text-xs uppercase tracking-widest font-bold transition-all duration-300 border border-zinc-800 hover:border-transparent mt-2">Book This Focus</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block py-1 px-3 bg-[#ff3c00]/10 border border-[#ff3c00]/20 rounded-full text-[10px] uppercase tracking-widest text-[#ff3c00]">Clinically Validated Mechanics</div>
                  <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white">The Healing Science of Radiant Infrared Heat</h2>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">Unlike standard forced-air heat which merely warms the surface of the skin and makes breathing challenging, our studio utilizes specialized infrared radiant heat panels.</p>
                  <button onClick={() => setActiveTab('wellbeing')} className="text-xs uppercase tracking-wider font-bold text-white hover:text-[#ff3c00] flex items-center gap-2 group transition-colors">Read full scientific benefits report <span className="transform group-hover:translate-x-1 transition-transform">→</span></button>
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="bg-[#0a0a0a] border border-zinc-900 rounded-xl p-6 relative overflow-hidden"><div className="absolute top-0 right-0 p-3 text-[#ff3c00]/20"><SunIcon /></div><span className="text-3xl font-extrabold text-white block">3x Deep</span><span className="text-xs uppercase tracking-widest text-zinc-400 block mt-2">Dermal Penetration</span></div>
                  <div className="bg-[#0a0a0a] border border-zinc-900 rounded-xl p-6 relative overflow-hidden"><div className="absolute top-0 right-0 p-3 text-[#ff3c00]/20"><ActivityIcon /></div><span className="text-3xl font-extrabold text-white block">40°C</span><span className="text-xs uppercase tracking-widest text-zinc-400 block mt-2">Critical Vasodilation</span></div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
            <div className="text-center space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-[#ff3c00] font-mono">Our Heritage & Design</span>
              <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white">The Architecture of Sensory Darkness</h2>
              <p className="text-sm text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">Blackout Hot Yoga was born from a desire to strip away the vanity, visual fatigue, and performative nature of traditional fitness spaces.</p>
            </div>
          </div>
        )}

        {activeTab === 'wellbeing' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.35em] text-[#ff3c00] font-mono">The Physiology Lab</span>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">The Science of Far-Infrared Therapy</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {scientificBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-widest text-[#ff3c00] bg-[#ff3c00]/10 px-3 py-1 rounded-full font-mono">{benefit.tag}</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">{benefit.title}</h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="bg-[#0c0c0c] border border-zinc-900 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-6">Request Private Pass</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <input type="text" required placeholder="Name" className="w-full px-4 py-3 bg-black border border-zinc-800 text-zinc-100 rounded-lg text-xs focus:outline-none focus:border-[#ff3c00]" />
                <input type="email" required placeholder="Email" className="w-full px-4 py-3 bg-black border border-zinc-800 text-zinc-100 rounded-lg text-xs focus:outline-none focus:border-[#ff3c00]" />
                <button type="submit" className="w-full py-4 bg-[#ff3c00] text-white rounded-lg text-xs uppercase tracking-widest font-extrabold">Submit</button>
              </form>
              {bookingStatus && <p className="text-xs text-[#ff3c00] mt-4 text-center">{bookingStatus}</p>}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-900 bg-black py-8 text-center text-[10px] text-zinc-600 uppercase tracking-widest">
        © {new Date().getFullYear()} Blackout Hot Yoga. Pure Darkness.
      </footer>
    </div>
  );
}

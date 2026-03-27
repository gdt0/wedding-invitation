'use client'

// V3: Dark Luxury - Deep burgundy, gold, moody elegant
export default function V3() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e8e8e8]">
      {/* Top Nav */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 py-5 backdrop-blur-md bg-[#0d0d0d]/95 z-50 border-b border-[#d4af37]/10">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-serif text-[#d4af37] tracking-wider">Zara</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {['Home', 'Events', 'Venue', 'Family'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="font-sans text-xs uppercase tracking-[0.2em] text-[#d4af37]/50 hover:text-[#d4af37] transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-24 pb-24">
        {/* Hero */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-[#0d0d0d]" />

          {/* Subtle gold lines */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

          {/* Content */}
          <div className="relative z-10">
            {/* Om */}
            <div className="text-5xl text-[#d4af37] mb-10 opacity-60">🙏</div>

            {/* Decorative lines */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#d4af37]/50" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/60">Save the Date</span>
              <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#d4af37]/50" />
            </div>

            {/* Names */}
            <h1 className="font-serif text-8xl md:text-[10rem] font-bold text-[#f5f5f5] tracking-tighter leading-none mb-4">
              A
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-[#d4af37]/30" />
              <span className="font-sans text-sm uppercase tracking-[0.5em] text-[#d4af37]">yushi</span>
              <div className="w-16 h-px bg-[#d4af37]/30" />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-px bg-[#d4af37]/30" />
              <span className="font-sans text-sm uppercase tracking-[0.5em] text-[#d4af37]">weds</span>
              <div className="w-16 h-px bg-[#d4af37]/30" />
            </div>
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-px bg-[#d4af37]/30" />
              <span className="font-sans text-sm uppercase tracking-[0.5em] text-[#d4af37]">Kuldeep</span>
              <div className="w-16 h-px bg-[#d4af37]/30" />
            </div>
            <h1 className="font-serif text-8xl md:text-[10rem] font-bold text-[#f5f5f5] tracking-tighter leading-none">
              K
            </h1>

            {/* Date */}
            <div className="mt-16 inline-block">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-serif text-[#d4af37]">20</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#d4af37]/60 mt-1">April</div>
                </div>
                <div className="w-px h-12 bg-[#d4af37]/30" />
                <div className="text-center">
                  <div className="text-4xl font-serif text-[#d4af37]">2026</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#d4af37]/60 mt-1">Year</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#d4af37]/30 text-xs uppercase tracking-widest animate-pulse">
            Scroll
          </div>
        </section>

        {/* Events */}
        <section id="events" className="py-32 bg-[#0d0d0d] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent h-32 top-0" />
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/60 block mb-4">The Celebrations</span>
              <h2 className="font-serif text-5xl text-[#f5f5f5]">Events</h2>
            </div>

            <div className="space-y-1">
              {[
                { name: 'Matrapujan', date: '18 April', time: 'Evening', desc: 'Seeking blessings of the Divine Mother', num: '01' },
                { name: 'Shubh Vivah', date: '20 April', time: 'Morning', desc: 'The sacred union', num: '02', highlight: true },
                { name: 'Bhigi Palke', date: '21 April', time: 'Morning', desc: 'A tender farewell', num: '03' },
              ].map((event) => (
                <div key={event.name} className={`flex items-center gap-8 p-8 border-l-2 ${event.highlight ? 'bg-[#1a1a1a] border-l-[#d4af37]' : 'border-l-[#d4af37]/20 hover:bg-[#0f0f0f]'}`}>
                  <div className={`font-sans text-5xl font-bold ${event.highlight ? 'text-[#d4af37]' : 'text-[#d4af37]/20'}`}>{event.num}</div>
                  <div className="flex-1">
                    <h3 className={`font-serif text-3xl mb-1 ${event.highlight ? 'text-[#f5f5f5]' : 'text-[#d4af37]/80'}`}>{event.name}</h3>
                    <p className="text-sm text-[#888]">{event.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#d4af37] font-sans text-sm">{event.date}</div>
                    <div className="text-[#888] text-xs">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="venue" className="py-32 bg-[#0d0d0d]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-16 p-12 border border-[#d4af37]/10">
              <div className="flex-1 text-center md:text-left">
                <div className="text-6xl mb-8 opacity-40">📍</div>
                <h2 className="font-serif text-4xl text-[#f5f5f5] mb-6">Venue</h2>
                <p className="font-sans text-[#888] text-lg mb-2">Klavati Marriage Lawn</p>
                <address className="not-italic text-[#666] leading-relaxed mb-8">
                  Hardoi Road, Near Indira Gandhi Rajkiya Mahavidyalaya<br />
                  Bangarmau - Unnao
                </address>
                <a href="https://maps.app.goo.gl/cq1YbbG78fWuT2GG9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d4af37] text-sm hover:gap-4 transition-all">
                  Open in Maps →
                </a>
              </div>
              <div className="w-full md:w-80 h-64 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#d4af37]/10 flex items-center justify-center">
                <span className="text-8xl opacity-10">🗺️</span>
              </div>
            </div>
          </div>
        </section>

        {/* Family */}
        <section id="family" className="py-32 bg-[#0d0d0d]">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="text-[#d4af37]/30 text-6xl mb-12">❦</div>
            <p className="font-serif text-xl text-[#e8e8e8] italic leading-relaxed mb-12">
              "Your presence will add to the joy and auspiciousness of the occasion. We look forward to welcoming you."
            </p>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37]/60">The Nishad Family</p>
          </div>
        </section>
      </main>

      {/* Bottom Nav - Mobile */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 bg-[#0d0d0d]/95 backdrop-blur-xl z-50 border-t border-[#d4af37]/10 md:hidden">
        {['Home', 'Events', 'Venue', 'Family'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="flex flex-col items-center text-[#d4af37]/50 text-[10px] uppercase">
            <span className="text-xl mb-1">{item === 'Home' ? '◈' : item === 'Events' ? '◇' : item === 'Venue' ? '◆' : '❖'}</span>
            {item}
          </a>
        ))}
      </footer>
    </div>
  )
}

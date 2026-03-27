'use client'

import Image from 'next/image'

// V1: Royal Mughal - Deep reds, gold, ornate patterns
export default function V1() {
  return (
    <div className="min-h-screen bg-[#1a0a0a] text-[#f5e6d3]">
      {/* Top Nav */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 py-6 backdrop-blur-md bg-[#1a0a0a]/90 z-50 border-b border-[#d4af37]/20">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-serif font-bold text-[#d4af37] tracking-wider">Mithila</span>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          {['Home', 'Events', 'Venue', 'Family'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="font-sans text-sm uppercase tracking-[0.2em] text-[#d4af37]/70 hover:text-[#d4af37] transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-24 pb-24">
        {/* Hero */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
          {/* Gold pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />

          {/* Ornate top border */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-16" />

          {/* Om Symbol */}
          <div className="text-7xl text-[#d4af37] mb-8 opacity-80">ॐ</div>

          {/* Main Title */}
          <div className="relative mb-12">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#dc143c] tracking-tight leading-none">
              Ayushi
            </h1>
            <div className="flex items-center justify-center gap-6 my-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <span className="font-serif text-2xl text-[#d4af37] italic">weds</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#dc143c] tracking-tight leading-none">
              Kuldeep
            </h1>
          </div>

          {/* Tagline */}
          <p className="font-sans text-lg text-[#f5e6d3]/70 max-w-xl italic tracking-wide mb-12">
            Where tradition meets timeless elegance in a celebration of love
          </p>

          <div className="inline-block px-10 py-3 border border-[#d4af37] text-[#d4af37] font-sans text-xs uppercase tracking-[0.3em]">
            20 April 2026
          </div>

          {/* Ornate bottom border */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-16" />

          {/* Corner Flourishes */}
          <div className="absolute top-32 left-8 w-16 h-16 border-l-2 border-t-2 border-[#d4af37]/30" />
          <div className="absolute top-32 right-8 w-16 h-16 border-r-2 border-t-2 border-[#d4af37]/30" />
          <div className="absolute bottom-32 left-8 w-16 h-16 border-l-2 border-b-2 border-[#d4af37]/30" />
          <div className="absolute bottom-32 right-8 w-16 h-16 border-r-2 border-b-2 border-[#d4af37]/30" />
        </section>

        {/* Events */}
        <section id="events" className="py-24 bg-[#1a0a0a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl text-[#d4af37] italic mb-4">Sacred Ceremonies</h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Matrapujan', date: '18 April 2026', time: 'Saturday Evening', desc: 'Seeking the blessings of the Divine Mother' },
                { name: 'Shubh Vivah', date: '20 April 2026', time: 'Monday', desc: 'The sacred union around the holy fire', highlight: true },
                { name: 'Bhigi Palke', date: '21 April 2026', time: 'Tuesday Morning', desc: 'A tender farewell to the bride' },
              ].map((event) => (
                <div key={event.name} className={`p-10 text-center border ${event.highlight ? 'bg-[#dc143c] border-[#d4af37]' : 'bg-[#2a1515] border-[#d4af37]/30'} relative`}>
                  {event.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4af37] text-[#1a0a0a] text-xs uppercase tracking-wider">Main Event</div>}
                  <h3 className={`font-serif text-3xl mb-4 ${event.highlight ? 'text-[#f5e6d3]' : 'text-[#d4af37]'}`}>{event.name}</h3>
                  <p className={`font-sans text-sm mb-4 ${event.highlight ? 'text-[#f5e6d3]/80' : 'text-[#f5e6d3]/60'}`}>{event.desc}</p>
                  <div className={`font-sans text-xs tracking-wider ${event.highlight ? 'text-[#d4af37]' : 'text-[#d4af37]/70'}`}>
                    {event.date} • {event.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="venue" className="py-24 bg-[#2a1515]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-stretch border border-[#d4af37]/30 overflow-hidden">
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="text-[#d4af37] text-5xl mb-6">📍</div>
                <h2 className="font-serif text-4xl text-[#d4af37] mb-6">The Venue</h2>
                <address className="not-italic font-sans text-lg text-[#f5e6d3]/70 leading-relaxed mb-8">
                  Klavati Marriage Lawn<br />
                  Hardoi Road, Near Indira Gandhi<br />
                  Rajkiya Mahavidyalaya<br />
                  Bangarmau - Unnao
                </address>
                <a href="https://maps.app.goo.gl/cq1YbbG78fWuT2GG9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#d4af37] font-sans text-sm uppercase tracking-wider hover:gap-4 transition-all">
                  View on Maps →
                </a>
              </div>
              <div className="md:w-1/2 min-h-[400px] relative bg-[#1a0a0a] flex items-center justify-center">
                <div className="text-[#d4af37]/20 text-9xl">💒</div>
              </div>
            </div>
          </div>
        </section>

        {/* Family */}
        <section id="family" className="py-24 bg-[#1a0a0a]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-16" />
            <p className="font-serif text-2xl text-[#f5e6d3] italic leading-relaxed mb-8">
              "Your presence will add to the joy and auspiciousness of the occasion. We look forward to welcoming you."
            </p>
            <p className="font-sans text-sm text-[#d4af37] uppercase tracking-[0.4em]">The Nishad Family</p>
          </div>
        </section>
      </main>

      {/* Bottom Nav - Mobile */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 bg-[#1a0a0a]/95 backdrop-blur-xl z-50 border-t border-[#d4af37]/20 md:hidden">
        {['Home', 'Events', 'Venue', 'RSVP'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="flex flex-col items-center text-[#d4af37]/60 text-[10px] uppercase tracking-tighter">
            <span className="text-xl mb-1">{item === 'Home' ? '🏠' : item === 'Events' ? '📅' : item === 'Venue' ? '📍' : '💝'}</span>
            {item}
          </a>
        ))}
      </footer>
    </div>
  )
}

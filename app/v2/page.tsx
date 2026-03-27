'use client'

// V2: Soft Pastel - Blush pinks, sage greens, minimal elegant
export default function V2() {
  return (
    <div className="min-h-screen bg-[#fdf8f5] text-[#3d3d3d]">
      {/* Top Nav */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 py-5 backdrop-blur-md bg-[#fdf8f5]/90 z-50">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl text-[#c9a87c] tracking-widest">Ananya</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {['Home', 'Events', 'Venue', 'Family'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="font-sans text-xs uppercase tracking-[0.15em] text-[#8b7355]/70 hover:text-[#c9a87c] transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="pt-24 pb-24">
        {/* Hero */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
          {/* Subtle floral pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a87c\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          {/* Lotus Icon */}
          <div className="text-6xl mb-8 text-[#c9a87c]">🪷</div>

          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-px bg-[#c9a87c]/40" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a87c]">Wedding Invitation</span>
            <div className="w-16 h-px bg-[#c9a87c]/40" />
          </div>

          {/* Names */}
          <h1 className="font-serif text-7xl md:text-9xl text-[#b8860b] font-light tracking-tight mb-2">Ayushi</h1>
          <p className="font-serif text-xl text-[#c9a87c] italic my-6">&</p>
          <h1 className="font-serif text-7xl md:text-9xl text-[#b8860b] font-light tracking-tight mb-12">Kuldeep</h1>

          {/* Date Badge */}
          <div className="inline-block px-8 py-4 bg-[#f5ebe0] rounded-full shadow-sm">
            <span className="font-sans text-sm text-[#8b7355] tracking-wider">20 . 04 . 2026</span>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#c9a87c]/50 animate-bounce">
            ↓
          </div>
        </section>

        {/* Events */}
        <section id="events" className="py-24 bg-[#f5ebe0]/50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a87c] block mb-4">Celebrations</span>
              <h2 className="font-serif text-4xl text-[#8b7355]">Our Ceremonies</h2>
            </div>

            <div className="space-y-6">
              {[
                { name: 'Matrapujan', date: '18 April 2026', time: 'Evening', desc: 'Seeking the blessings of the Divine Mother', emoji: '🌸' },
                { name: 'Shubh Vivah', date: '20 April 2026', time: 'Morning', desc: 'The sacred wedding ceremony', emoji: '💍', highlight: true },
                { name: 'Bhigi Palke', date: '21 April 2026', time: 'Morning', desc: 'Bidding farewell to the bride', emoji: '🌺' },
              ].map((event, i) => (
                <div key={event.name} className={`flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl ${event.highlight ? 'bg-[#c9a87c] text-white shadow-lg' : 'bg-white shadow-sm'}`}>
                  <div className={`text-4xl ${event.highlight ? '' : 'opacity-60'}`}>{event.emoji}</div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className={`font-serif text-2xl mb-1 ${event.highlight ? 'text-white' : 'text-[#8b7355]'}`}>{event.name}</h3>
                    <p className={`text-sm ${event.highlight ? 'text-white/80' : 'text-[#8b7355]/60'}`}>{event.desc}</p>
                  </div>
                  <div className={`text-center md:text-right ${event.highlight ? 'text-white/90' : 'text-[#8b7355]'}`}>
                    <div className="font-sans text-sm font-medium">{event.date}</div>
                    <div className="text-xs opacity-70">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="venue" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 p-12 bg-[#fdf8f5] rounded-3xl">
              <div className="flex-1 text-center md:text-left">
                <div className="text-5xl mb-6">🏛️</div>
                <h2 className="font-serif text-3xl text-[#8b7355] mb-4">Klavati Marriage Lawn</h2>
                <address className="not-italic font-sans text-[#8b7355]/70 leading-relaxed mb-6">
                  Hardoi Road, Near Indira Gandhi Rajkiya Mahavidyalaya<br />
                  Bangarmau - Unnao
                </address>
                <a href="https://maps.app.goo.gl/cq1YbbG78fWuT2GG9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c9a87c] font-sans text-sm hover:gap-3 transition-all">
                  Get Directions →
                </a>
              </div>
              <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-[#f5ebe0] to-[#e8d5c4] rounded-2xl flex items-center justify-center">
                <span className="text-6xl opacity-30">📍</span>
              </div>
            </div>
          </div>
        </section>

        {/* Family */}
        <section id="family" className="py-24 bg-[#f5ebe0]/50">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="text-4xl mb-8">✨</div>
            <p className="font-serif text-xl text-[#8b7355] italic leading-relaxed mb-8">
              "Your presence will add to the joy and auspiciousness of the occasion. We look forward to welcoming you."
            </p>
            <p className="font-sans text-sm text-[#c9a87c] uppercase tracking-[0.3em]">The Nishad Family</p>
          </div>
        </section>
      </main>

      {/* Bottom Nav - Mobile */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 bg-white/95 backdrop-blur-xl z-50 border-t border-[#e8d5c4] md:hidden">
        {['Home', 'Events', 'Venue', 'Family'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="flex flex-col items-center text-[#c9a87c] text-[10px] uppercase">
            <span className="text-xl mb-1">{item === 'Home' ? '🏠' : item === 'Events' ? '📅' : item === 'Venue' ? '📍' : '👨‍👩‍👧'}</span>
            {item}
          </a>
        ))}
      </footer>
    </div>
  )
}

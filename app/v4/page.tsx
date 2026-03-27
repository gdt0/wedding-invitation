'use client'

export default function V4() {
  return (
    <div className="min-h-screen bg-[#fbf4e8] text-[#3a2314] overflow-x-hidden">
      <div className="fixed inset-0 opacity-[0.035] pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 20%, #b68a35 1px, transparent 1px), radial-gradient(circle at 80% 30%, #b68a35 1px, transparent 1px), radial-gradient(circle at 40% 80%, #b68a35 1px, transparent 1px)', backgroundSize:'44px 44px'}} />
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#fbf4e8]/85 border-b border-[#d8c2a3]/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-headline text-[#7a1f1f] text-2xl italic tracking-wide">The Grand Invitation</div>
          <nav className="hidden md:flex gap-8 font-label text-xs uppercase tracking-[0.25em] text-[#8a6738]">
            <a href="#home">Home</a>
            <a href="#story">Story</a>
            <a href="#events">Events</a>
            <a href="#venue">Venue</a>
          </nav>
        </div>
      </header>

      <main className="pt-20 pb-24">
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8eedf] via-[#fbf4e8] to-[#f5e4ca]" />
          <div className="relative w-full max-w-6xl mx-auto border border-[#d8c2a3] bg-[#fffaf2]/80 shadow-[0_20px_80px_rgba(58,35,20,0.12)]">
            <div className="absolute top-5 left-5 w-24 h-24 border-l-2 border-t-2 border-[#b68a35]" />
            <div className="absolute top-5 right-5 w-24 h-24 border-r-2 border-t-2 border-[#b68a35]" />
            <div className="absolute bottom-5 left-5 w-24 h-24 border-l-2 border-b-2 border-[#b68a35]" />
            <div className="absolute bottom-5 right-5 w-24 h-24 border-r-2 border-b-2 border-[#b68a35]" />

            <div className="grid md:grid-cols-2 min-h-[820px]">
              <div className="relative p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e5d2b7]">
                <div className="text-[#b68a35] text-6xl mb-6">॥शुभ विवाह॥</div>
                <p className="font-label text-xs uppercase tracking-[0.35em] text-[#8a6738] mb-6">Together with their families</p>
                <h1 className="font-headline text-6xl md:text-7xl text-[#7a1f1f] italic leading-none">Ayushi</h1>
                <div className="flex items-center gap-4 my-6">
                  <div className="h-px flex-1 bg-[#d8c2a3]" />
                  <span className="font-headline text-2xl text-[#b68a35] italic">weds</span>
                  <div className="h-px flex-1 bg-[#d8c2a3]" />
                </div>
                <h1 className="font-headline text-6xl md:text-7xl text-[#7a1f1f] italic leading-none">Kuldeep</h1>
                <p className="mt-8 font-body text-xl text-[#6b4b2a] italic max-w-xl leading-relaxed">
                  request the honour of your presence to bless their union and celebrate an evening woven with tradition, music, rituals, flowers and love.
                </p>
                <div className="mt-10 inline-flex self-start px-6 py-3 bg-gradient-to-r from-[#9b6b20] to-[#d6b15b] text-white font-label text-xs uppercase tracking-[0.3em] shadow-lg">
                  20 April 2026
                </div>
              </div>

              <div className="relative p-10 md:p-16 flex flex-col justify-center bg-[linear-gradient(135deg,#fff8ef,#f7ead7)]">
                <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'conic-gradient(from 90deg at 1px 1px, #b68a35 90deg, transparent 0)', backgroundSize:'22px 22px'}} />
                <div className="relative text-center">
                  <div className="text-8xl mb-8 text-[#b68a35]">🪔</div>
                  <div className="space-y-6">
                    <div>
                      <p className="font-label text-xs uppercase tracking-[0.3em] text-[#8a6738] mb-2">Main Ceremony</p>
                      <h2 className="font-headline text-4xl text-[#7a1f1f] italic">Shubh Vivah</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#e5d2b7]">
                      <div><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8a6738] mb-2">Date</p><p className="font-body text-lg">20 April</p></div>
                      <div><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8a6738] mb-2">Day</p><p className="font-body text-lg">Monday</p></div>
                      <div><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8a6738] mb-2">Time</p><p className="font-body text-lg">Evening</p></div>
                    </div>
                    <p className="font-body text-lg text-[#6b4b2a] leading-relaxed">
                      Amid marigold blooms, sacred chants, and the warmth of loved ones, we invite you to share in the joy of this timeless celebration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-label text-xs uppercase tracking-[0.35em] text-[#8a6738] mb-4">A handcrafted editorial layout</p>
            <h2 className="font-headline text-5xl text-[#7a1f1f] italic mb-8">An Invitation Meant to Feel Like a Heirloom</h2>
            <p className="font-body text-2xl text-[#6b4b2a] italic leading-relaxed max-w-4xl mx-auto">
              Inspired by traditional Indian wedding cards, this version uses layered cream paper tones, ceremonial reds, embossed-gold details, and generous spacing to evoke a premium printed invitation rather than a standard landing page.
            </p>
          </div>
        </section>

        <section id="events" className="py-24 bg-[#f6ead7] px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-5xl text-[#7a1f1f] italic mb-3">Ceremony Timeline</h2>
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#b68a35] to-transparent mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ['Matrapujan','18 April 2026','Saturday • Evening','A prayerful beginning seeking divine blessings for the couple and both families.'],
                ['Shubh Vivah','20 April 2026','Monday • Evening','The sacred vows, the fire, the rituals, and the moment two lives are tied together forever.'],
                ['Bhigi Palke','21 April 2026','Tuesday • Morning','A tender farewell wrapped in gratitude, emotion, and beautiful new beginnings.'],
              ].map(([title,date,time,desc],i)=>(
                <div key={title} className={`${i===1?'bg-[#7a1f1f] text-white scale-[1.02]':'bg-[#fffaf2]'} p-10 border border-[#dcc6a7] shadow-[0_14px_40px_rgba(58,35,20,0.08)]`}>
                  <p className={`font-label text-[10px] uppercase tracking-[0.35em] mb-4 ${i===1?'text-[#f3d48a]':'text-[#8a6738]'}`}>Celebration 0{i+1}</p>
                  <h3 className={`font-headline text-4xl italic mb-5 ${i===1?'text-white':'text-[#7a1f1f]'}`}>{title}</h3>
                  <p className={`font-body text-lg leading-relaxed mb-8 ${i===1?'text-white/85':'text-[#6b4b2a]'}`}>{desc}</p>
                  <div className={`pt-6 border-t ${i===1?'border-white/20':'border-[#ead8bf]'}`}>
                    <p className="font-label uppercase tracking-[0.2em] text-xs mb-2">{date}</p>
                    <p className="font-body italic text-lg">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="venue" className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-[#fffaf2] border border-[#dcc6a7] shadow-[0_20px_60px_rgba(58,35,20,0.08)] grid md:grid-cols-2 overflow-hidden">
            <div className="p-12 md:p-14 flex flex-col justify-center">
              <p className="font-label text-xs uppercase tracking-[0.3em] text-[#8a6738] mb-3">Venue</p>
              <h2 className="font-headline text-4xl text-[#7a1f1f] italic mb-6">Klavati Marriage Lawn</h2>
              <address className="not-italic font-body text-xl text-[#6b4b2a] leading-relaxed mb-8">
                Hardoi Road, Near Indira Gandhi Rajkiya Mahavidyalaya<br/>Bangarmau - Unnao
              </address>
              <a href="https://maps.app.goo.gl/cq1YbbG78fWuT2GG9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[#9b6b20] font-label text-xs uppercase tracking-[0.28em] hover:gap-5 transition-all">
                View on Google Maps →
              </a>
            </div>
            <div className="min-h-[360px] bg-[radial-gradient(circle_at_top,#d9b776,#9b6b20_30%,#7a1f1f_75%)] flex items-center justify-center">
              <div className="text-[10rem] opacity-20 text-white">✦</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

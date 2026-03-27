'use client'

export default function V6() {
  return (
    <div className="min-h-screen bg-[#120b10] text-[#f8efe3] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.045]" style={{backgroundImage:'radial-gradient(circle at 25% 25%, #d4af37 1px, transparent 1px), radial-gradient(circle at 75% 75%, #d4af37 1px, transparent 1px)', backgroundSize:'36px 36px'}} />
      <header className="fixed top-0 w-full z-50 bg-[#120b10]/88 backdrop-blur-md border-b border-[#7b2431]/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-headline text-2xl italic text-[#d4af37]">Noor</div>
          <nav className="hidden md:flex gap-8 font-label text-xs uppercase tracking-[0.28em] text-[#d9c0a3]/70">
            <a href="#home">Home</a>
            <a href="#details">Details</a>
            <a href="#events">Events</a>
            <a href="#venue">Venue</a>
          </nav>
        </div>
      </header>

      <main className="pt-20 pb-24">
        <section id="home" className="px-6 py-16 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid xl:grid-cols-[1fr_1fr] gap-10">
            <div className="relative border border-[#6c2230] bg-[linear-gradient(180deg,#1a0f16,#120b10)] shadow-[0_30px_90px_rgba(0,0,0,0.4)] p-10 md:p-16 overflow-hidden min-h-[820px] flex flex-col justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(123,36,49,0.25),transparent_35%)]" />
              <div className="relative">
                <p className="font-label text-xs uppercase tracking-[0.35em] text-[#d4af37]/80 mb-5">A ceremonial evening</p>
                <div className="inline-flex px-5 py-2 border border-[#d4af37]/40 text-[#d4af37] font-label text-[10px] uppercase tracking-[0.35em] mb-8">Luxury dark editorial</div>
                <h1 className="font-headline text-7xl md:text-8xl italic text-white leading-none">Ayushi</h1>
                <div className="my-6 flex items-center gap-4 max-w-sm">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
                  <span className="font-headline text-3xl italic text-[#d4af37]">weds</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
                </div>
                <h1 className="font-headline text-7xl md:text-8xl italic text-white leading-none">Kuldeep</h1>
                <p className="mt-8 font-body text-2xl italic text-[#ead8c5] leading-relaxed max-w-2xl">
                  A rich, jewel-toned interpretation inspired by velvet invitation boxes, candlelit mandaps, antique gold detailing, and the drama of an opulent Indian wedding night.
                </p>
                <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
                  <div className="bg-[#1f121a] border border-[#6c2230] p-5"><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-2">Date</p><p className="font-body text-xl">20 April</p></div>
                  <div className="bg-[#1f121a] border border-[#6c2230] p-5"><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-2">Time</p><p className="font-body text-xl">Evening</p></div>
                  <div className="bg-[#1f121a] border border-[#6c2230] p-5"><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-2">Mood</p><p className="font-body text-xl">Regal</p></div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[820px] border border-[#6c2230] bg-[linear-gradient(145deg,#2a111a,#7b2431_55%,#d4af37_140%)] shadow-[0_30px_90px_rgba(0,0,0,0.35)] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.11]" style={{backgroundImage:'linear-gradient(45deg, transparent 48%, #fff 49%, transparent 51%), linear-gradient(-45deg, transparent 48%, #fff 49%, transparent 51%)', backgroundSize:'60px 60px'}} />
              <div className="relative text-center px-10">
                <div className="text-[9rem] text-white/20 leading-none mb-4">✧</div>
                <h2 className="font-headline text-6xl italic text-white mb-6">A Night of Gold & Crimson</h2>
                <p className="font-body text-2xl italic text-white/85 leading-relaxed max-w-lg mx-auto">
                  Designed to feel cinematic, ceremonial, and deeply festive — ideal if you want something far more luxurious than a standard wedding microsite.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-label text-xs uppercase tracking-[0.35em] text-[#d4af37]/75 mb-4">Design Direction</p>
            <h2 className="font-headline text-5xl italic text-white mb-8">Highly Detailed, Rich, Ceremonial</h2>
            <p className="font-body text-2xl italic text-[#ead8c5] leading-relaxed">
              This concept amplifies contrast, mood, and richness — dark jewel backgrounds, premium serif drama, metallic highlights, deep maroon surfaces, and layered textures that feel closer to a luxury event brand than a simple invite page.
            </p>
          </div>
        </section>

        <section id="events" className="py-24 px-6 bg-[#170d13]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-5xl italic text-white mb-3">Wedding Functions</h2>
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                ['Matrapujan','18 April 2026','Prayer, blessings, sacred beginnings.'],
                ['Shubh Vivah','20 April 2026','The main vows, rituals, and celebration.'],
                ['Bhigi Palke','21 April 2026','An emotional farewell and new start.'],
              ].map(([title,date,desc],i)=>(
                <div key={title} className={`${i===1?'bg-[linear-gradient(180deg,#7b2431,#531723)] border-[#d4af37]/45':'bg-[#1f121a] border-[#6c2230]'} border p-10 shadow-[0_18px_55px_rgba(0,0,0,0.26)]`}>
                  <p className={`font-label text-[10px] uppercase tracking-[0.35em] mb-4 ${i===1?'text-[#f1cf83]':'text-[#d4af37]/75'}`}>Function 0{i+1}</p>
                  <h3 className="font-headline text-4xl italic mb-4 text-white">{title}</h3>
                  <p className="font-label text-xs uppercase tracking-[0.25em] mb-5 text-[#ead8c5]/75">{date}</p>
                  <p className="font-body text-lg leading-relaxed text-[#ead8c5]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="venue" className="py-24 px-6">
          <div className="max-w-6xl mx-auto border border-[#6c2230] overflow-hidden grid md:grid-cols-[1.1fr_0.9fr] shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
            <div className="p-12 md:p-14 bg-[#1a0f16]">
              <p className="font-label text-xs uppercase tracking-[0.35em] text-[#d4af37]/75 mb-3">Venue</p>
              <h2 className="font-headline text-4xl italic text-white mb-6">Klavati Marriage Lawn</h2>
              <address className="not-italic font-body text-xl leading-relaxed text-[#ead8c5] mb-8">
                Hardoi Road, Near Indira Gandhi Rajkiya Mahavidyalaya<br/>Bangarmau - Unnao
              </address>
              <a href="https://maps.app.goo.gl/cq1YbbG78fWuT2GG9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-label text-xs uppercase tracking-[0.28em] text-[#f1cf83] hover:gap-5 transition-all">
                View Google Maps →
              </a>
            </div>
            <div className="min-h-[360px] bg-[radial-gradient(circle_at_center,#d4af37_0,#7b2431_35%,#170d13_80%)] flex items-center justify-center">
              <div className="text-[11rem] opacity-20 text-white">✦</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

'use client'

export default function V5() {
  return (
    <div className="min-h-screen bg-[#f3ede2] text-[#27211d] overflow-x-hidden">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage:'linear-gradient(30deg,#6b705c 12%,transparent 12.5%,transparent 87%,#6b705c 87.5%,#6b705c),linear-gradient(150deg,#6b705c 12%,transparent 12.5%,transparent 87%,#6b705c 87.5%,#6b705c),linear-gradient(30deg,#6b705c 12%,transparent 12.5%,transparent 87%,#6b705c 87.5%,#6b705c),linear-gradient(150deg,#6b705c 12%,transparent 12.5%,transparent 87%,#6b705c 87.5%,#6b705c)', backgroundSize:'80px 140px', backgroundPosition:'0 0,0 0,40px 70px,40px 70px'}} />
      <header className="fixed top-0 w-full z-50 bg-[#f3ede2]/88 backdrop-blur-md border-b border-[#cbbda9]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-headline text-2xl text-[#4e342e] italic">Shehnai</div>
          <nav className="hidden md:flex gap-8 font-label text-xs uppercase tracking-[0.25em] text-[#7d6d5f]">
            <a href="#home">Home</a>
            <a href="#invite">Invite</a>
            <a href="#functions">Functions</a>
            <a href="#venue">Venue</a>
          </nav>
        </div>
      </header>

      <main className="pt-20 pb-24">
        <section id="home" className="px-6 py-16 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
            <div className="bg-[#fffaf4] border border-[#d9cbbb] shadow-[0_25px_80px_rgba(39,33,29,0.08)] p-10 md:p-16 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#d9c4a1]/25" />
              <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#a97c50]/12" />
              <p className="font-label text-xs uppercase tracking-[0.35em] text-[#8d6e63] mb-6">Wedding Invitation</p>
              <div className="inline-block px-5 py-2 border border-[#ccb89a] text-[#8f6a3c] font-label text-[10px] uppercase tracking-[0.35em] mb-8">With blessings and joy</div>
              <h1 className="font-headline text-6xl md:text-8xl italic text-[#4e342e] leading-none">Ayushi</h1>
              <div className="my-6 flex items-center gap-4 max-w-md">
                <div className="h-px flex-1 bg-[#d9cbbb]" />
                <span className="font-headline text-3xl text-[#b68a35] italic">weds</span>
                <div className="h-px flex-1 bg-[#d9cbbb]" />
              </div>
              <h1 className="font-headline text-6xl md:text-8xl italic text-[#4e342e] leading-none">Kuldeep</h1>
              <p className="mt-8 font-body text-2xl italic text-[#6d5b4d] leading-relaxed max-w-2xl">
                A softly luxurious invitation inspired by handcrafted floral stationery, woven fabrics, muted gold foil, and the warm quietness of an intimate Indian celebration.
              </p>
              <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
                <div className="bg-[#f5ede3] p-5 border border-[#e2d5c6]"><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8d6e63] mb-2">Date</p><p className="font-body text-xl">20 April 2026</p></div>
                <div className="bg-[#f5ede3] p-5 border border-[#e2d5c6]"><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8d6e63] mb-2">Day</p><p className="font-body text-xl">Monday</p></div>
                <div className="bg-[#f5ede3] p-5 border border-[#e2d5c6]"><p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#8d6e63] mb-2">Style</p><p className="font-body text-xl">Elegant</p></div>
              </div>
            </div>

            <div className="relative bg-[linear-gradient(160deg,#5d4037,#8d6e63,#d7b98e)] min-h-[760px] border border-[#ccb89a] shadow-[0_25px_80px_rgba(39,33,29,0.12)] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'radial-gradient(circle at center,#fff 1px,transparent 1px)', backgroundSize:'26px 26px'}} />
              <div className="relative text-center px-8">
                <div className="text-white/80 text-8xl mb-6">❁</div>
                <h2 className="font-headline text-5xl text-white italic mb-6">A Day of Grace</h2>
                <p className="font-body text-2xl text-white/90 italic leading-relaxed max-w-md mx-auto">
                  Join us for rituals, flowers, music, and the sacred celebration of two lives becoming one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="invite" className="px-6 py-24">
          <div className="max-w-5xl mx-auto text-center">
            <p className="font-label text-xs uppercase tracking-[0.35em] text-[#8d6e63] mb-4">Editorial Note</p>
            <h2 className="font-headline text-5xl text-[#4e342e] italic mb-8">Warm, Layered, Detailed</h2>
            <p className="font-body text-2xl italic text-[#6d5b4d] leading-relaxed">
              This concept leans into muted bridal luxury — antique gold, sandalwood browns, parchment creams, and floral softness — so the site feels more like a bespoke invitation suite than a product template.
            </p>
          </div>
        </section>

        <section id="functions" className="py-24 px-6 bg-[#ece1d3]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              ['Matrapujan','18 April 2026','Sacred blessings for a beautiful beginning.'],
              ['Shubh Vivah','20 April 2026','The central ceremony, vows, rituals, and celebration.'],
              ['Bhigi Palke','21 April 2026','A heartfelt farewell and a graceful new chapter.'],
            ].map(([title,date,desc],i)=>(
              <div key={title} className={`${i===1?'bg-[#4e342e] text-white':'bg-[#fffaf4]'} border border-[#d7c4ae] p-10 shadow-[0_16px_45px_rgba(39,33,29,0.08)]`}>
                <div className={`text-5xl mb-5 ${i===1?'text-[#d9c4a1]':'text-[#b68a35]'}`}>{i===0?'✿':i===1?'✦':'❋'}</div>
                <h3 className="font-headline text-4xl italic mb-4">{title}</h3>
                <p className={`font-label text-xs uppercase tracking-[0.28em] mb-5 ${i===1?'text-white/70':'text-[#8d6e63]'}`}>{date}</p>
                <p className={`font-body text-lg leading-relaxed ${i===1?'text-white/85':'text-[#6d5b4d]'}`}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="venue" className="py-24 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[0.95fr_1.05fr] border border-[#d7c4ae] overflow-hidden shadow-[0_20px_70px_rgba(39,33,29,0.08)]">
            <div className="bg-[#4e342e] p-12 md:p-14 text-white flex flex-col justify-center">
              <p className="font-label text-xs uppercase tracking-[0.35em] text-[#d9c4a1] mb-3">Venue</p>
              <h2 className="font-headline text-4xl italic mb-6">Klavati Marriage Lawn</h2>
              <address className="not-italic font-body text-xl leading-relaxed text-white/85 mb-8">
                Hardoi Road, Near Indira Gandhi Rajkiya Mahavidyalaya<br/>Bangarmau - Unnao
              </address>
              <a href="https://maps.app.goo.gl/cq1YbbG78fWuT2GG9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-label text-xs uppercase tracking-[0.28em] text-[#f1d7a0] hover:gap-5 transition-all">
                Open Google Maps →
              </a>
            </div>
            <div className="min-h-[360px] bg-[linear-gradient(145deg,#f7ecdd,#d9c4a1)] flex items-center justify-center">
              <div className="text-[10rem] opacity-20 text-[#6d4c41]">✺</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

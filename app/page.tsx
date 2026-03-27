'use client'

import Head from 'next/head'
import Image from 'next/image'

const GaneshaMotif = () => (
  <div className="mb-8 opacity-90">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtsvA32itpWchK6o3NoqcjjXWmu-E7HJLQd7xXvWdkFdIWgypQdq-G4pNiuic6ZYNli4JxuBwyQL0dSsQqPVyRs8ejy_jT1PcN-hJWjgacK3rPMqjqWl8g7EPXRJ3JD9DmvCUlLYowbwDB9zpPEyYRi1xwlSyc17waod2IZiAL0OR4SCM9WVbu1gCJ_qrDCoI0tar8i52JBUxGvDhhvy6C6CKccci7pGOOSElIBUUQO_kFRO3zhB_kL2FQpKrvsYZtQrf_QBtOqMY"
      alt="Intricate golden Ganesha silhouette icon centerpiece with traditional Indian wedding motifs around it"
      className="w-24 h-24 mx-auto"
    />
    <p className="font-headline italic text-primary mt-4 tracking-widest text-center">
      || Shree Ganeshay Namah ||
    </p>
  </div>
)

const LotusMotif = () => (
  <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6LgmJwELKJBVVkEqcHXariM52ZdRiTrCrORlCzv37NA9kC_P9aT3CT8WJqCh2yByahzi19jtKrlK5rFKKHKpPocFRHhnBCcxgQNupRiCjGtyMenwGPX2XrnCweNpQ3oGXO4NV7YSFwK4Gszhns3CaAMH5BdWYeFbaZe8uQ1iSgJYuJ5onuHYR5KpaD1FpX8LpuCBN9pgruh5I1MKxBuOSpzksttTlOoAVt-EHbigL7U8iPwCTKqEV--lYMfTLUbmyPgzJEX7Iq6s"
      alt="Abstract floral henna pattern with swirling lines and dots in deep gold color on cream background"
      className="w-full h-full"
    />
  </div>
)

const MaterialIcon = ({ icon, filled = false }: { icon: string; filled?: boolean }) => {
  const style = filled ? "{ fontVariationSettings: 'FILL' 1 }" : "{}"
  return (
    <span className="material-symbols-outlined" style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}>
      {icon}
    </span>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-[#fefccf]/80 z-50 shadow-[0px_4px_12px_rgba(29,29,3,0.06)]">
        <div className="flex items-center gap-2">
          <MaterialIcon icon="settings_heart" />
          <span className="text-2xl font-headline font-bold text-primary tracking-widest">
            The Timeless Invitation
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="font-label text-sm uppercase tracking-widest text-primary border-b-2 border-secondary" href="#home">
            Home
          </a>
          <a className="font-label text-sm uppercase tracking-widest text-secondary/70 hover:text-primary transition-colors duration-300" href="#events">
            Events
          </a>
          <a className="font-label text-sm uppercase tracking-widest text-secondary/70 hover:text-primary transition-colors duration-300" href="#venue">
            Venue
          </a>
          <a className="font-label text-sm uppercase tracking-widest text-secondary/70 hover:text-primary transition-colors duration-300" href="#family">
            Family
          </a>
        </nav>
        <div className="flex gap-4">
          <MaterialIcon icon="share" />
          <MaterialIcon icon="calendar_add_on" />
        </div>
      </header>

      <main className="pt-24 pb-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 py-12 text-center overflow-hidden" id="home">
          <div className="absolute inset-0 mandala-bg -z-10"></div>

          <GaneshaMotif />

          {/* Couple Names */}
          <div className="mb-12 space-y-4">
            <h1 className="font-headline text-5xl md:text-7xl text-primary font-bold italic tracking-tight">
              Ayushi Kumari
            </h1>
            <p className="font-headline text-2xl text-secondary flex items-center justify-center gap-4 before:h-px before:w-12 before:bg-outline-variant after:h-px after:w-12 after:bg-outline-variant">
              Weds
            </p>
            <h1 className="font-headline text-5xl md:text-7xl text-primary font-bold italic tracking-tight">
              Kuldeep Kumar
            </h1>
          </div>

          <div className="max-w-xl mx-auto space-y-6">
            <p className="font-body text-xl italic text-on-surface-variant">
              We cordially invite you to celebrate the union of two souls as they embark on their beautiful journey of togetherness.
            </p>
            <div className="inline-block px-8 py-2 bg-gradient-to-r from-secondary to-secondary-container rounded-sm shadow-md">
              <span className="font-label text-on-secondary-fixed font-bold tracking-[0.2em] uppercase text-xs">
                A Celebration of Love
              </span>
            </div>
          </div>

          <LotusMotif />
        </section>

        {/* Events Bento Grid */}
        <section className="py-20 bg-surface-container-low" id="events">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
              <h2 className="font-headline text-4xl text-primary italic mb-2">
                Sacred Ceremonies
              </h2>
              <div className="h-1 w-24 bg-secondary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Matrapujan */}
              <div className="bg-surface p-8 ornate-border editorial-shadow flex flex-col justify-between min-h-[350px]">
                <div>
                  <span className="font-label text-secondary text-xs tracking-[0.3em] uppercase block mb-4">
                    Celebration One
                  </span>
                  <h3 className="font-headline text-3xl text-primary font-bold mb-4">
                    Matrapujan
                  </h3>
                  <p className="font-body text-lg italic text-on-surface-variant mb-6">
                    Seeking the blessings of the Divine Mother to grace our homes and hearts.
                  </p>
                </div>
                <div className="border-t border-outline-variant/30 pt-6">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <MaterialIcon icon="calendar_month" />
                    <span className="font-label font-semibold">18 April 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary">
                    <MaterialIcon icon="schedule" />
                    <span className="font-label">Saturday • Evening</span>
                  </div>
                </div>
              </div>

              {/* Shubh Vivah (Highlighted) */}
              <div className="bg-primary text-on-primary p-8 ornate-border editorial-shadow flex flex-col justify-between min-h-[400px] md:-mt-8 md:mb-8">
                <div>
                  <span className="font-label text-on-primary/60 text-xs tracking-[0.3em] uppercase block mb-4">
                    The Main Event
                  </span>
                  <h3 className="font-headline text-4xl font-bold mb-4 italic">
                    Shubh Vivah
                  </h3>
                  <p className="font-body text-xl italic opacity-90 mb-6">
                    The auspicious circumambulation around the sacred fire, binding two hearts for eternity.
                  </p>
                </div>
                <div className="border-t border-on-primary/20 pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MaterialIcon icon="favorite" filled />
                    <span className="font-label font-bold text-xl">20 April 2026</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-80">
                    <MaterialIcon icon="event_note" />
                    <span className="font-label uppercase tracking-widest">Monday&nbsp;&nbsp;</span>
                  </div>
                </div>
              </div>

              {/* Bhigi Palke */}
              <div className="bg-surface p-8 ornate-border editorial-shadow flex flex-col justify-between min-h-[350px]">
                <div>
                  <span className="font-label text-secondary text-xs tracking-[0.3em] uppercase block mb-4">
                    Celebration Three
                  </span>
                  <h3 className="font-headline text-3xl text-primary font-bold mb-4">
                    Bhigi Palke
                  </h3>
                  <p className="font-body text-lg italic text-on-surface-variant mb-6">
                    A tender farewell as the bride steps into her new home with sweet memories.
                  </p>
                </div>
                <div className="border-t border-outline-variant/30 pt-6">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <MaterialIcon icon="history_edu" />
                    <span className="font-label font-semibold">21 April 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary">
                    <MaterialIcon icon="schedule" />
                    <span className="font-label">Tuesday • Morning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Section */}
        <section className="py-20 bg-surface" id="venue">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl shadow-xl bg-surface-container-lowest">
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <MaterialIcon icon="location_on" filled />
                <h2 className="font-headline text-4xl text-primary font-bold mb-6 mt-6">
                  The Wedding Venue
                </h2>
                <address className="not-italic font-body text-xl text-on-surface-variant mb-8 leading-relaxed">
                  Klavati Marriage Lawn<br />
                  Hardoi Road, Near Indira Gandhi Rajkiya Mahavidyalaya<br />
                  Bangarmau - Unnao
                </address>
                <a
                  className="inline-flex items-center gap-2 font-label text-secondary font-bold hover:gap-4 transition-all duration-300"
                  href="https://maps.app.goo.gl/cq1YbbG78fWuT2GG9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW ON GOOGLE MAPS
                  <MaterialIcon icon="arrow_forward" />
                </a>
              </div>
              <div className="md:w-1/2 min-h-[400px] relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTcX3gITapOwVvDsB2jBZvNRSZgsC8-Xp27zL4-wi7VqHwA3xN_aOoKgO-3BQVlhcVGhCC6kwAmUkTqDJYl2NdYUhJezHOS72V9ihutpYLYQDo4X80UMnWyr5x89FMjnPQwba2k1nfNOXNFdwSCTKL770G57bEJxNKNQzHW70xZ_gsgm2e_QCcQRMbs5vkOswoabKsF4CGyE7p1MSqXoiIZ92V3i_JP6VgSQECYKUZgrWtXQwFVq_GB-sadmIegZz32500nON5qiI"
                  alt="Luxurious open-air Indian wedding lawn at night with grand floral entrance, hanging marigold decorations, and soft warm ambient lighting"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Family Section */}
        <section className="py-20 bg-surface-container-low relative overflow-hidden" id="family">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-surface to-transparent"></div>
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-16">
              <h2 className="font-headline text-4xl text-primary italic mb-2">
                <br />
              </h2>
              <div className="h-1 w-24 bg-secondary"></div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
              <div className="space-y-6">
                <h3 className="font-headline text-2xl text-secondary italic">
                  <br />
                </h3>
                <ul className="font-body text-lg space-y-2 text-on-surface">
                  <li><br /></li>
                  <li><br /></li>
                  <li><br /></li>
                  <li><br /></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="font-headline text-2xl text-secondary italic">
                  <br />
                </h3>
                <ul className="font-body text-lg space-y-2 text-on-surface">
                  <li><br /></li>
                  <li><br /></li>
                  <li><br /></li>
                  <li><br /></li>
                </ul>
              </div>
            </div>

            <div className="mt-20 text-center max-w-2xl mx-auto p-12 border-y border-outline-variant/30">
              <p className="font-headline text-2xl text-primary italic leading-relaxed">
                "Your presence will add to the joy and auspiciousness of the occasion. We look forward to welcoming you."
              </p>
              <p className="mt-8 font-label text-secondary text-sm tracking-[0.4em] uppercase">
                The Nishad Family
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar - Mobile */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 pb-safe backdrop-blur-xl bg-[#fefccf]/90 z-50 border-t border-[#e3beb8]/20 shadow-[0_-4px_20px_rgba(29,29,3,0.04)] md:hidden">
        <a className="flex flex-col items-center justify-center text-primary font-bold scale-110 transition-transform duration-300" href="#home">
          <MaterialIcon icon="home" />
          <span className="font-label text-[10px] uppercase tracking-tighter">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary/60 transition-transform duration-300" href="#events">
          <MaterialIcon icon="event_note" />
          <span className="font-label text-[10px] uppercase tracking-tighter">Events</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary/60 transition-transform duration-300" href="#venue">
          <MaterialIcon icon="location_on" />
          <span className="font-label text-[10px] uppercase tracking-tighter">Venue</span>
        </a>
        <button
          className="flex flex-col items-center justify-center text-secondary/60 transition-transform duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <MaterialIcon icon="favorite" />
          <span className="font-label text-[10px] uppercase tracking-tighter">RSVP</span>
        </button>
      </footer>
    </>
  )
}

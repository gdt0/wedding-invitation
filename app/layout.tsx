import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayushi Weds Kuldeep | Wedding Invitation',
  description: 'We cordially invite you to celebrate the union of two souls.',
  openGraph: {
    title: 'Ayushi Weds Kuldeep | Wedding Invitation',
    description: 'We cordially invite you to celebrate the union of two souls.',
    images: [{ url: '/api/og', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayushi Weds Kuldeep | Wedding Invitation',
    images: ['/api/og'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body text-on-background selection:bg-secondary-fixed">
        {/* Version Selector */}
        <div className="fixed top-4 right-4 z-[100] flex gap-2">
          <Link href="/" className="px-4 py-2 bg-surface border border-outline-variant text-xs font-label uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-colors">
            V1
          </Link>
          <Link href="/v2" className="px-4 py-2 bg-surface border border-outline-variant text-xs font-label uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-colors">
            V2
          </Link>
          <Link href="/v3" className="px-4 py-2 bg-surface border border-outline-variant text-xs font-label uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-colors">
            V3
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}

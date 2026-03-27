import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Timeless Invitation | Ayushi Weds Kuldeep',
  description: 'We cordially invite you to celebrate the union of two souls as they embark on their beautiful journey of togetherness.',
  openGraph: {
    title: 'The Timeless Invitation | Ayushi Weds Kuldeep',
    description: 'We cordially invite you to celebrate the union of two souls as they embark on their beautiful journey of togetherness.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Ayushi weds Kuldeep - Wedding Invitation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Timeless Invitation | Ayushi Weds Kuldeep',
    description: 'We cordially invite you to celebrate the union of two souls.',
    images: ['/api/og'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body text-on-background selection:bg-secondary-fixed">
        {children}
      </body>
    </html>
  )
}

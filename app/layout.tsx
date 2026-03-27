import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Timeless Invitation | Ayushi & Kuldeep',
  description: 'We cordially invite you to celebrate the union of two souls as they embark on their beautiful journey of togetherness.',
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

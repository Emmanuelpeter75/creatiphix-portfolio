import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Creatiphix Design | E-commerce & Shopify Development Agency',
  description: 'We build, optimize, and scale high-converting Shopify stores. From custom store design to SEO and paid ads, we handle everything to grow your e-commerce brand.',
  keywords: ['Shopify', 'E-commerce', 'Dropshipping', 'SEO', 'Store Design', 'Ads Marketing'],
  authors: [{ name: 'Peter Emmanuel', url: 'https://creatiphixdesign.com' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

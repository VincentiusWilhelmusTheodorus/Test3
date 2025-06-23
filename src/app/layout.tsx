import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HBO Sportkunde Leiderschap Academy - Leer Leiderschap, Groepsvorming & Motivatie',
  description: 'Uitgebreide leerplatform voor HBO sportkunde studenten over leiderschap in sport, groepsvorming, teambuilding en motivatietechnieken. Met AI-ondersteuning en praktische tools.',
  keywords: [
    'sportkunde',
    'leiderschap',
    'groepsvorming',
    'motivatie',
    'teambuilding',
    'sportpsychologie',
    'HBO',
    'sport management',
    'coaching',
    'teamdynamiek'
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Anime Quiz',
  description: "Test your anime knowledge with our fun and challenging quiz! From classic series to the latest releases, our quiz covers a wide range of popular anime titles. Challenge yourself and your friends to see who can get the highest score. Take the quiz now and prove you're a true anime fan!",
  icons: {
    icon: {
      url: '/favicon.svg',
      type: 'image/svg+xml'
    }
  },
  openGraph: {
    title: 'Anime Quiz',
    description: "Test your anime knowledge with our fun and challenging quiz! From classic series to the latest releases, our quiz covers a wide range of popular anime titles. Challenge yourself and your friends to see who can get the highest score. Take the quiz now and prove you're a true anime fan!",
    siteName: 'Anime Quiz',
    images: [{ url: 'https://anime-quiz-pro.vercel.app/og.jpg' }],
    type: 'website',
    url: 'https://anime-quiz-pro.vercel.app'
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-[#333]`}>{children}</body>
    </html>
  )
}

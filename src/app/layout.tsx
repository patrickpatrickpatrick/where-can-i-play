import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Where Can I Play",
  description: "It's... Where Can I Play",
}

export const BodyLayout = ({
  children,
}: {
  children: React.ReactNode
}) => <div className={inter.className}>
  {children}
</div>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BodyLayout>
          {children}
        </BodyLayout>
      </body>
    </html>
  )
}

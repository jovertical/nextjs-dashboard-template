import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { MSWProvider } from './msw-provider'

if (process.env.NEXT_RUNTIME === 'nodejs') {
  console.log('SERVER LISTEN')

  const { server } = require('@/mocks/node')

  server.listen()

  Reflect.set(fetch, '__FOO', 'YES')
}

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">
        <MSWProvider>{children}</MSWProvider>
      </body>
      <Analytics />
    </html>
  )
}

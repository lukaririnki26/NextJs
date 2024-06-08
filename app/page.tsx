import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (
    <div>
      <Link href="/dashboard" scroll={false}>Dashboard</Link>
      <Link href="/dashboard#settings" scroll={false}>Dashboard</Link>
    </div>
  )
    
}
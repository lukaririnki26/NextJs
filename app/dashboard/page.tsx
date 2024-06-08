'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
 
export default function Page() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

 
    function updateSorting(sortOrder: string) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
    }

    function switchLocale(locale: string) {
        // e.g. '/en/about' or '/fr/contact'
        const newPath = `/${locale}${pathname}`
        window.history.replaceState(null, '', newPath)
      }
      
    return (
        <>
            <button type="button" onClick={() => router.push('/')}>
                Back
            </button>
            <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
            <button onClick={() => updateSorting('desc')}>Sort Descending</button>
            <button onClick={() => switchLocale('en')}>English</button>
            <button onClick={() => switchLocale('fr')}>French</button>
        </>
    )
}
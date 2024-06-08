import useSWR from 'swr'
import Navbar from './navbar'
import Footer from './footer'

const fetcher = (url) => fetch(url).then((res) => res.json());
 
export default function Layout({ children }) {
    const { data, error } = useSWR('/api/healthcheck', fetcher)
 
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <>
        <Navbar/>
        <main>{children}</main>
        <Footer />
        </>
    )
}
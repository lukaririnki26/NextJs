import { useRouter } from 'next/router'

export default function AboutDetails(){
    const router = useRouter()

    return <div>
        About Detail of {router.query.slug}
    </div>
}
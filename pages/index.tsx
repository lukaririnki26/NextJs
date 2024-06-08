import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
 
const Page: NextPageWithLayout = () => {
  return (
    <>
        <div>
            This is mainpage for pages router
        </div>

        <div className='mt-3'>
            <Link href='/about'>About</Link>
        </div>
    </>
  )

}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
        {page}
    </Layout>
  )
}
 
export default Page
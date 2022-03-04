import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

const PricingPage = () => {
    return (
        <>
            <h1>PricingPage</h1>

            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/pricing/index.js</code>
            </p>
        </>
    )
}

PricingPage.getLayout = function getLayout(page: JSX.Element){
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default PricingPage
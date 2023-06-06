import Head from 'next/head'

const GuestLayout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{`NextLava - ${title}`}</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
        </div>
    )
}

export default GuestLayout

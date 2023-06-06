import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import Head from 'next/head'
import { useState, useEffect } from 'react'

const Home = () => {

    const [articles, setArticles] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const getArticles = async () => {
        const response = await axios.get("/api/v1/articles")
        const _articles = await response.data.data

        setArticles(_articles)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true);
        getArticles()
    }, []);

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Articles
                </h2>
            }>
            <Head>
                <title> NextLava - Articles</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-4">
                               Latest Articles:
                            </h3>
                            {isLoading ? (<p className='text-indigo-800 p-8 text-center mx-auto text-xl'>Loading...</p>):(
                                <div className='flex flex-col justify-center'>
                                {!articles && (<p>No Articles</p>)}
                                {articles?.map((article, index) => (
                                    <div key={index} className='bg-slate-300 rounded-md p-3 my-2'>
                                        <div className='flex flex-col gap-2'>
                                            <h2 className='font-semibold text-slate-900'>
                                                {article.title}
                                            </h2>
                                            <p className='text-sm tracking-wider text-slate-800 ml-1 whitespace-break-spaces'>
                                                {article.body}
                                            </p>
                                            <span className='text-slate-500 font-medium italic flex justify-end'>
                                                Written by: {article.author.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Home

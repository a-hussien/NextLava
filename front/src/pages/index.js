import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>NextLava</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-slate-800 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm text-gray-200 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm text-gray-200 underline">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-sm text-gray-200 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex mt-4 items-center justify-between gap-4">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <Link
                                href="/"
                                className="mx-4 text-center text-xl tracking-wider text-indigo-400"
                            >
                                NextLava
                            </Link>
                        </div>

                        <div className="ml-4 mt-1 text-center text-sm text-indigo-200 sm:text-right sm:ml-0">
                            Build with Laravel Breeze + Next.js
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

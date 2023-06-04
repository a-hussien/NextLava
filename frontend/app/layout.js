import Navigations from '@/components/Navigations';
import 'tailwindcss/tailwind.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0'>
        <Navigations />
        {children}
        </div>
      </body>
    </html>
  );
}
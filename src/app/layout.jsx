import './globals.css';

// Components
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Google Clone Next13',
  description: 'Google clone created by Next js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}

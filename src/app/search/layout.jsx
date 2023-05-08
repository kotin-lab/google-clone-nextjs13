import '@/app/globals.css';

// Components
import SearchHeader from '@/components/SearchHeader';

export const metadata = {
  title: 'Google Clone Next13',
  description: 'Google clone created by Next js 13',
}

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}

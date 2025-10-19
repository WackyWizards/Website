import { Metadata } from 'next';
import { organization } from '@/constants';
import Home from './components/home';

export const metadata: Metadata = {
  title: organization.name,
  description: organization.description,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  openGraph: {
    title: organization.name,
    description: organization.description,
    url: organization.website,
    siteName: organization.name,
    images: [],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: organization.name,
    description: organization.description
  }
};

export default function HomePage() {
  return <Home />;
}

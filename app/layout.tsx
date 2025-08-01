import '../global.css';
import { Inter } from '@next/font/google';
import LocalFont from '@next/font/local';
import type { Metadata } from 'next';
import { Analytics } from './components/analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://naktor.com'),
  title: {
    default: 'naktor.com',
    template: '%s | naktor.com',
  },
  description: 'Personal website and portfolio',
  openGraph: {
    title: 'naktor.com',
    description: 'Personal website and portfolio',
    url: 'https://naktor.com',
    siteName: 'naktor.com',
    images: [
      {
        url: 'https://naktor.com/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Naktor',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.png',
  },
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={[inter.variable, calSans.variable].join(' ')} lang="en">
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}

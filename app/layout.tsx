import './globals.css';
import type { Metadata } from 'next';
import { Inter_Tight, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const sans = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rohit Aggarwal — Senior Software Engineer',
  description:
    'Rohit Aggarwal is a Senior Software Engineer in Delhi with 6+ years building production mobile and web apps in React Native, React, Next.js and TypeScript.',
  authors: [{ name: 'Rohit Aggarwal' }],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF9' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0B' },
  ],
  openGraph: {
    title: 'Rohit Aggarwal — Senior Software Engineer',
    description:
      'Production mobile and web apps in React Native, React, Next.js and TypeScript.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <head>
        {/* Lets CSS hide reveal-on-scroll content only when JS can reveal it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

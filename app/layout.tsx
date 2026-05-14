import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GDP Talks — World Models :: AI · 17 May 2026',
  description:
    'A gathering where participants share their views, ongoing research, and ideas they found too interesting to keep to themselves.',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Syne:wght@400;500;600;700;800&family=Syne+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

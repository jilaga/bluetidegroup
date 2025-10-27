import { Metadata } from 'next'

// Google Search Console verification meta tag
export const searchConsoleMetadata: Metadata = {
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID || '',
  },
  other: {
    // Alternative verification methods
    'google-site-verification': process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID || '',
    // Bing webmaster verification
    'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION_ID || '',
    // Yandex verification
    'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION_ID || '',
  }
}

// Component for adding search console verification
export function GoogleSearchConsoleVerification() {
  const verificationId = process.env.NEXT_PUBLIC_GSC_VERIFICATION_ID

  if (!verificationId) {
    return null
  }

  return (
    <meta name="google-site-verification" content={verificationId} />
  )
}
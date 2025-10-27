'use client'

import Script from 'next/script'
import { useEffect } from 'react'

interface GoogleAnalyticsProps {
  gaId: string
}

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
    dataLayer: any[]
  }
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Core Web Vitals monitoring
    const sendToAnalytics = ({ name, delta, value, id }: any) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', name, {
          event_category: 'Web Vitals',
          event_label: id,
          value: Math.round(name === 'CLS' ? delta * 1000 : delta),
          non_interaction: true,
          custom_map: {
            metric_id: 'dimension1',
            metric_value: 'metric1',
            metric_delta: 'metric2'
          }
        })
      }
    }

    // Import and measure Core Web Vitals
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(sendToAnalytics)
      // FID removed - replaced by INP in 2024
      onFCP(sendToAnalytics)
      onLCP(sendToAnalytics)
      onTTFB(sendToAnalytics)
      // New INP metric for 2025
      onINP(sendToAnalytics)
    })

    // Enhanced ecommerce tracking for marine services
    if (typeof window !== 'undefined' && window.gtag) {
      // Track service page views
      const trackServiceView = (serviceName: string) => {
        window.gtag('event', 'view_item', {
          event_category: 'Services',
          event_label: serviceName,
          currency: 'NGN',
          value: 0
        })
      }

      // Track contact form interactions
      const trackContactInteraction = (action: string) => {
        window.gtag('event', 'generate_lead', {
          event_category: 'Contact',
          event_label: action,
          value: 1
        })
      }

      // Make functions available globally for use in components
      ;(window as any).trackServiceView = trackServiceView
      ;(window as any).trackContactInteraction = trackContactInteraction
    }
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
            // Enhanced measurement for Core Web Vitals
            custom_map: {
              'custom_parameter_1': 'dimension1',
              'custom_parameter_2': 'dimension2'
            },
            // Conversion linker for cross-domain tracking
            linker: {
              domains: ['bluetidegroup.com', 'wa.me']
            },
            // Enhanced ecommerce for service tracking
            send_page_view: true,
            // Privacy settings
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });

          // Track external links (WhatsApp, social media)
          gtag('config', '${gaId}', {
            custom_map: {'metric_1': 'page_load_time'}
          });

          // Enhanced measurement events
          gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            user_agent: navigator.userAgent,
            screen_resolution: screen.width + 'x' + screen.height
          });
        `}
      </Script>
    </>
  )
}
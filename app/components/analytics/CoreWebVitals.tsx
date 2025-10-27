'use client'

import { useEffect } from 'react'

export function CoreWebVitalsMonitoring() {
  useEffect(() => {
    // Import web-vitals library dynamically
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      // Function to send metrics to multiple endpoints
      const sendToAnalytics = ({ name, delta, value, id, navigationType }: any) => {
        // Send to Google Analytics if available
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', name, {
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

        // Send to console for development monitoring
        if (process.env.NODE_ENV === 'development') {
          console.group(`📊 Core Web Vital: ${name}`)
          console.log(`Value: ${value}`)
          console.log(`Delta: ${delta}`)
          console.log(`ID: ${id}`)
          console.log(`Navigation Type: ${navigationType}`)
          console.groupEnd()
        }

        // Send to custom analytics endpoint (optional)
        if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
          fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              metric: name,
              value,
              delta,
              id,
              navigationType,
              url: window.location.href,
              timestamp: Date.now(),
              userAgent: navigator.userAgent
            }),
          }).catch(console.error)
        }
      }

      // Monitor all Core Web Vitals
      onCLS(sendToAnalytics)  // Cumulative Layout Shift
      // FID removed - replaced by INP in 2024
      onFCP(sendToAnalytics)  // First Contentful Paint
      onLCP(sendToAnalytics)  // Largest Contentful Paint
      onTTFB(sendToAnalytics) // Time to First Byte
      onINP(sendToAnalytics)  // Interaction to Next Paint (2025 standard)

      // Additional performance monitoring
      if (typeof window !== 'undefined') {
        // Monitor navigation timing
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

          if (navigation) {
            const metrics = {
              dns: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcp: navigation.connectEnd - navigation.connectStart,
              request: navigation.responseStart - navigation.requestStart,
              response: navigation.responseEnd - navigation.responseStart,
              dom: navigation.domContentLoadedEventEnd - navigation.fetchStart,
              load: navigation.loadEventEnd - navigation.fetchStart,
            }

            sendToAnalytics({
              name: 'navigation_timing',
              value: metrics.load,
              delta: metrics.load,
              id: 'navigation-' + Date.now(),
              navigationType: 'load'
            })
          }
        })

        // Monitor resource loading issues
        window.addEventListener('error', (event) => {
          if (event.target && event.target !== window) {
            const element = event.target as HTMLElement
            sendToAnalytics({
              name: 'resource_error',
              value: 1,
              delta: 1,
              id: 'error-' + Date.now(),
              navigationType: 'error',
              details: {
                tagName: element.tagName,
                src: (element as any).src || (element as any).href,
                message: event.message
              }
            })
          }
        })
      }
    }).catch((error) => {
      console.warn('Failed to load web-vitals library:', error)
    })
  }, [])

  return null // This component only monitors, no UI
}

// Performance budget alerts for development
export function PerformanceBudgetMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const budgets = {
        LCP: 2500,  // 2.5 seconds
        // FID: 100,   // Removed in 2024
        CLS: 0.1,   // 0.1
        INP: 200,   // 200ms (2025 standard)
        FCP: 1800,  // 1.8 seconds
        TTFB: 800   // 800ms
      }

      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        const checkBudget = ({ name, value }: any) => {
          const budget = budgets[name as keyof typeof budgets]
          if (budget && value > budget) {
            console.warn(
              `⚠️ Performance Budget Exceeded!\n` +
              `Metric: ${name}\n` +
              `Value: ${value}\n` +
              `Budget: ${budget}\n` +
              `Overage: ${value - budget}`
            )
          }
        }

        onCLS(checkBudget)
        // onFID(checkBudget) // Removed in 2024
        onFCP(checkBudget)
        onLCP(checkBudget)
        onTTFB(checkBudget)
        onINP(checkBudget)
      })
    }
  }, [])

  return null
}
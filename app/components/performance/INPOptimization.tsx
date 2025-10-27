'use client'

import { useEffect } from 'react'

// Interaction to Next Paint (INP) optimization for 2025 standards
export function INPOptimization() {
  useEffect(() => {
    // 1. Optimize click handlers with debouncing
    const optimizeClickHandlers = () => {
      const buttons = document.querySelectorAll('button, [role="button"], a[href]')

      buttons.forEach((button) => {
        const htmlButton = button as HTMLElement
        const originalHandler = htmlButton.onclick

        if (originalHandler) {
          // Add debouncing to prevent rapid clicks
          let timeoutId: NodeJS.Timeout
          htmlButton.onclick = (event) => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
              originalHandler.call(htmlButton, event)
            }, 50)
          }
        }
      })
    }

    // 2. Preload critical resources on hover (for better perceived performance)
    const preloadOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]')

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = (link as HTMLAnchorElement).href
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const preloadLink = document.createElement('link')
            preloadLink.rel = 'prefetch'
            preloadLink.href = href
            document.head.appendChild(preloadLink)
          }
        }, { once: true })
      })
    }

    // 3. Optimize form interactions
    const optimizeFormInteractions = () => {
      const forms = document.querySelectorAll('form')

      forms.forEach((form) => {
        const inputs = form.querySelectorAll('input, textarea, select')

        inputs.forEach((input) => {
          // Debounce validation
          let validationTimeout: NodeJS.Timeout
          input.addEventListener('input', () => {
            clearTimeout(validationTimeout)
            validationTimeout = setTimeout(() => {
              // Custom validation logic here
              const event = new CustomEvent('debouncedInput', { detail: input })
              input.dispatchEvent(event)
            }, 300)
          })
        })
      })
    }

    // 4. Optimize scroll handlers
    const optimizeScrollHandlers = () => {
      let scrollTimeout: NodeJS.Timeout
      let isScrolling = false

      const optimizedScrollHandler = () => {
        if (!isScrolling) {
          requestAnimationFrame(() => {
            // Scroll logic here
            isScrolling = false
          })
        }
        isScrolling = true
      }

      window.addEventListener('scroll', optimizedScrollHandler, { passive: true })

      return () => {
        window.removeEventListener('scroll', optimizedScrollHandler)
      }
    }

    // 5. Monitor INP and provide feedback
    const monitorINP = () => {
      import('web-vitals').then(({ onINP }) => {
        onINP((metric) => {
          // INP target for 2025: < 200ms for 75% of interactions
          if (metric.value > 200) {
            console.warn(`🚨 INP Performance Issue: ${metric.value}ms (Target: <200ms)`)

            // Send to analytics
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'inp_performance_issue', {
                event_category: 'Performance',
                event_label: 'INP Threshold Exceeded',
                value: Math.round(metric.value),
                custom_map: {
                  metric_id: 'dimension1',
                  metric_value: 'metric1'
                }
              })
            }
          }
        })
      })
    }

    // 6. Reduce layout shifts during interactions
    const preventLayoutShifts = () => {
      // Reserve space for dynamic content
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as HTMLElement

                // Add smooth transitions to prevent jarring shifts
                if (!element.style.transition) {
                  element.style.transition = 'all 0.2s ease-in-out'
                }
              }
            })
          }
        })
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      return () => observer.disconnect()
    }

    // 7. Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical third-party scripts
      const scripts = document.querySelectorAll('script[src*="gtag"], script[src*="analytics"]')

      scripts.forEach((script) => {
        if (script.getAttribute('strategy') !== 'afterInteractive') {
          // Ensure scripts don't block user interactions
          script.setAttribute('defer', '')
        }
      })
    }

    // Initialize all optimizations
    const cleanup = [
      optimizeClickHandlers(),
      preloadOnHover(),
      optimizeFormInteractions(),
      optimizeScrollHandlers(),
      preventLayoutShifts(),
      optimizeThirdPartyScripts()
    ].filter(Boolean)

    monitorINP()

    // Cleanup function
    return () => {
      cleanup.forEach((cleanupFn) => {
        if (typeof cleanupFn === 'function') {
          cleanupFn()
        }
      })
    }
  }, [])

  return null
}

// Component to add visual feedback for slow interactions
export function InteractionFeedback() {
  useEffect(() => {
    let interactionStartTime: number
    let feedbackElement: HTMLElement | null = null

    const showInteractionFeedback = () => {
      interactionStartTime = performance.now()

      // Create visual feedback element
      feedbackElement = document.createElement('div')
      feedbackElement.className = 'interaction-feedback'
      feedbackElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 103, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 10000;
        display: none;
        transition: opacity 0.2s ease;
      `
      feedbackElement.textContent = 'Processing...'
      document.body.appendChild(feedbackElement)

      // Show feedback after 100ms if interaction hasn't completed
      setTimeout(() => {
        if (feedbackElement && document.body.contains(feedbackElement)) {
          feedbackElement.style.display = 'block'
        }
      }, 100)
    }

    const hideInteractionFeedback = () => {
      if (feedbackElement && document.body.contains(feedbackElement)) {
        const duration = performance.now() - interactionStartTime

        if (duration > 200) {
          feedbackElement.style.background = 'rgba(244, 67, 54, 0.9)'
          feedbackElement.textContent = `Slow interaction: ${Math.round(duration)}ms`

          setTimeout(() => {
            if (feedbackElement && document.body.contains(feedbackElement)) {
              document.body.removeChild(feedbackElement)
            }
          }, 2000)
        } else {
          document.body.removeChild(feedbackElement)
        }
      }
      feedbackElement = null
    }

    // Add event listeners for interactions
    const eventTypes = ['click', 'keydown', 'pointerdown']

    eventTypes.forEach((eventType) => {
      document.addEventListener(eventType, showInteractionFeedback, { passive: true })
    })

    document.addEventListener('transitionend', hideInteractionFeedback)
    document.addEventListener('animationend', hideInteractionFeedback)

    // Cleanup
    return () => {
      eventTypes.forEach((eventType) => {
        document.removeEventListener(eventType, showInteractionFeedback)
      })
      document.removeEventListener('transitionend', hideInteractionFeedback)
      document.removeEventListener('animationend', hideInteractionFeedback)

      if (feedbackElement && document.body.contains(feedbackElement)) {
        document.body.removeChild(feedbackElement)
      }
    }
  }, [])

  return null
}
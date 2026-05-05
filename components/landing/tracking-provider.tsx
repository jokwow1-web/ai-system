"use client"

import { useEffect } from "react"
import type { LPPage } from "@/lib/wa-link"

interface TrackingProviderProps {
  page: LPPage
}

/**
 * Pushes event to GTM dataLayer.
 * Safe to call before GTM loads — events are queued.
 */
function pushDataLayer(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dl = (window as any).dataLayer || []
  dl.push({ event, ...data, page_type: data.page_type || undefined })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).dataLayer = dl
}

/**
 * Fire Meta Pixel event via fbq.
 * Safe to call before Pixel loads — fbq queues events.
 */
function pushFbq(event: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fbq = (window as any).fbq
  if (typeof fbq === "function") {
    fbq("track", event, data)
  }
}

/**
 * TrackingProvider — client component that sets up scroll, click, and form event tracking.
 * Pushes all events to window.dataLayer for GTM to pick up.
 *
 * Events tracked:
 * - page_view (on mount)
 * - scroll_50 (50% scroll depth)
 * - scroll_75 (75% scroll depth)
 * - wa_click (WhatsApp button click)
 * - form_start (first form field change)
 * - form_submit (form submission)
 */
export function TrackingProvider({ page }: TrackingProviderProps) {
  useEffect(() => {
    // Page view
    pushDataLayer("page_view", {
      page_path: window.location.pathname,
      page_type: page,
    })
    pushFbq("PageView", { page_type: page })

    // Scroll depth tracking
    const scrollMilestones = new Set<number>()
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent >= 50 && !scrollMilestones.has(50)) {
        scrollMilestones.add(50)
        pushDataLayer("scroll_50", { page_type: page })
      }
      if (scrollPercent >= 75 && !scrollMilestones.has(75)) {
        scrollMilestones.add(75)
        pushDataLayer("scroll_75", { page_type: page })
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    // WA click tracking
    const handleWAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a[href*='wa.me']")
      if (anchor) {
        pushDataLayer("wa_click", {
          page_type: page,
          link_url: (anchor as HTMLAnchorElement).href,
        })
        pushFbq("Contact", { page_type: page })
      }
    }
    document.addEventListener("click", handleWAClick)

    // Form interaction tracking
    let formStarted = false
    const handleFormStart = () => {
      if (!formStarted) {
        formStarted = true
        pushDataLayer("form_start", { page_type: page })
      }
    }

    const selects = document.querySelectorAll("[data-radix-collection-item]")
    // Also track by placeholder text in select triggers
    const selectTriggers = document.querySelectorAll('[role="combobox"], button[data-state]')
    selectTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handleFormStart, { once: true })
    })

    // Form submit tracking — observe WhatsApp button clicks that indicate form submission
    const formButtons = document.querySelectorAll('button')
    const formSubmitHandler = () => {
      pushDataLayer("form_submit", { page_type: page })
      pushFbq("Lead", { content_name: "SBU Form", page_type: page })
    }
    formButtons.forEach((btn) => {
      if (btn.textContent?.includes("Konsultasi via WhatsApp")) {
        btn.addEventListener("click", formSubmitHandler)
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleWAClick)
      selectTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleFormStart)
      })
      formButtons.forEach((btn) => {
        if (btn.textContent?.includes("Konsultasi via WhatsApp")) {
          btn.removeEventListener("click", formSubmitHandler)
        }
      })
    }
  }, [page])

  return null
}
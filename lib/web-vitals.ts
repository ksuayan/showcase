import { onCLS, onFID, onFCP, onLCP, onTTFB, type Metric } from "web-vitals"

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals"

function getConnectionSpeed() {
  return "connection" in navigator && navigator["connection"] && "effectiveType" in navigator["connection"]
    ? navigator["connection"]["effectiveType"]
    : ""
}

export function sendVitals({ id, name, label, value }: Metric) {
  const body = {
    id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: name,
    value: Math.round(name === "CLS" ? value * 1000 : value),
    speed: getConnectionSpeed(),
  }

  const blob = new Blob([JSON.stringify(body)], { type: "application/json" })
  const sendBeacon = navigator.sendBeacon && navigator.sendBeacon.bind(navigator)

  if (sendBeacon) {
    sendBeacon(vitalsUrl, blob)
  } else {
    fetch(vitalsUrl, {
      body: JSON.stringify(body),
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

export function reportWebVitals() {
  onFID((metric) => sendVitals(metric))
  onTTFB((metric) => sendVitals(metric))
  onLCP((metric) => sendVitals(metric))
  onCLS((metric) => sendVitals(metric))
  onFCP((metric) => sendVitals(metric))
}

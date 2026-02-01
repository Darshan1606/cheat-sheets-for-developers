import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST;

export const initPostHog = () => {
  if (!POSTHOG_KEY) {
    console.warn("PostHog key not found. Analytics disabled.");
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST || "https://app.posthog.com",
    capture_pageview: false, // We handle this manually for SPA
    capture_pageleave: true,
    persistence: "localStorage",
    autocapture: {
      dom_event_allowlist: ["click", "submit"],
      element_allowlist: ["button", "a", "input"],
    },
  });
};

export { posthog };

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { initPostHog } from "@utils/posthog";
import PostHogPageView from "@components/PostHogPageView";

// Initialize PostHog analytics
initPostHog();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PostHogPageView />
      <App />
    </BrowserRouter>
  </StrictMode>
);

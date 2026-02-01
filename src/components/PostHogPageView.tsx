import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { posthog } from "@utils/posthog";

/**
 * Component that tracks page views for SPA navigation
 * Place this inside BrowserRouter to track route changes
 */
const PostHogPageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    posthog.capture("$pageview", {
      $current_url: window.location.href,
      path: location.pathname,
    });
  }, [location.pathname]);

  return null;
};

export default PostHogPageView;

import { useCallback } from "react";
import { posthog } from "../lib/posthog";

/**
 * Custom hook for tracking analytics events
 * Provides type-safe event tracking methods for the cheat sheets app
 */
export const useAnalytics = () => {
  // Track when a command/snippet is copied
  const trackCommandCopy = useCallback((properties) => {
    posthog.capture("command_copied", {
      sheet: properties.sheet, // e.g., "git", "docker", "sql"
      section: properties.section, // e.g., "Basic Commands", "Branching"
      command: properties.command?.slice(0, 100), // Truncate for privacy
      category: properties.category, // e.g., "DevOps", "Databases"
    });
  }, []);

  // Track category filter changes on Hero
  const trackCategoryFilter = useCallback((category) => {
    posthog.capture("category_filtered", {
      category,
    });
  }, []);

  // Track cheat sheet card click from Hero
  const trackSheetClick = useCallback((sheet) => {
    posthog.capture("sheet_clicked", {
      sheet: sheet.title,
      path: sheet.path,
      color: sheet.color,
    });
  }, []);

  // Track quick reference item click
  const trackQuickRefClick = useCallback((properties) => {
    posthog.capture("quick_ref_clicked", {
      sheet: properties.sheet,
      item: properties.item,
    });
  }, []);

  // Track mobile menu interactions
  const trackMobileMenu = useCallback((action) => {
    posthog.capture("mobile_menu_action", {
      action, // "opened", "closed", "category_expanded", "item_clicked"
    });
  }, []);

  // Track navbar category dropdown
  const trackNavDropdown = useCallback((category, action) => {
    posthog.capture("nav_dropdown_action", {
      category,
      action, // "opened", "closed"
    });
  }, []);

  // Track section view/expansion (for collapsible sections)
  const trackSectionView = useCallback((properties) => {
    posthog.capture("section_viewed", {
      sheet: properties.sheet,
      section: properties.section,
    });
  }, []);

  // Track print action
  const trackPrint = useCallback((sheet) => {
    posthog.capture("print_initiated", {
      sheet,
    });
  }, []);

  // Track external link clicks (e.g., GitHub)
  const trackExternalLink = useCallback((url, context) => {
    posthog.capture("external_link_clicked", {
      url,
      context,
    });
  }, []);

  // Track search (if implemented later)
  const trackSearch = useCallback((query, results) => {
    posthog.capture("search_performed", {
      query: query?.slice(0, 50),
      results_count: results,
    });
  }, []);

  // Generic event tracking for custom events
  const trackEvent = useCallback((eventName, properties = {}) => {
    posthog.capture(eventName, properties);
  }, []);

  return {
    trackCommandCopy,
    trackCategoryFilter,
    trackSheetClick,
    trackQuickRefClick,
    trackMobileMenu,
    trackNavDropdown,
    trackSectionView,
    trackPrint,
    trackExternalLink,
    trackSearch,
    trackEvent,
  };
};

export default useAnalytics;

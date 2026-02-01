import { useCallback } from "react";
import { posthog } from "@utils/posthog";

interface CommandCopyProperties {
  sheet: string;
  section?: string;
  command?: string;
  category?: string;
}

interface SheetClickProperties {
  title: string;
  path: string;
  color: string;
}

interface QuickRefProperties {
  sheet: string;
  item: string;
}

interface SectionViewProperties {
  sheet: string;
  section: string;
}

/**
 * Custom hook for tracking analytics events
 * Provides type-safe event tracking methods for the cheat sheets app
 */
export const useAnalytics = () => {
  // Track when a command/snippet is copied
  const trackCommandCopy = useCallback((properties: CommandCopyProperties) => {
    posthog.capture("command_copied", {
      sheet: properties.sheet,
      section: properties.section,
      command: properties.command?.slice(0, 100),
      category: properties.category,
    });
  }, []);

  // Track category filter changes on Hero
  const trackCategoryFilter = useCallback((category: string) => {
    posthog.capture("category_filtered", {
      category,
    });
  }, []);

  // Track cheat sheet card click from Hero
  const trackSheetClick = useCallback((sheet: SheetClickProperties) => {
    posthog.capture("sheet_clicked", {
      sheet: sheet.title,
      path: sheet.path,
      color: sheet.color,
    });
  }, []);

  // Track quick reference item click
  const trackQuickRefClick = useCallback((properties: QuickRefProperties) => {
    posthog.capture("quick_ref_clicked", {
      sheet: properties.sheet,
      item: properties.item,
    });
  }, []);

  // Track mobile menu interactions
  const trackMobileMenu = useCallback((action: string) => {
    posthog.capture("mobile_menu_action", {
      action,
    });
  }, []);

  // Track navbar category dropdown
  const trackNavDropdown = useCallback((category: string, action: string) => {
    posthog.capture("nav_dropdown_action", {
      category,
      action,
    });
  }, []);

  // Track section view/expansion (for collapsible sections)
  const trackSectionView = useCallback((properties: SectionViewProperties) => {
    posthog.capture("section_viewed", {
      sheet: properties.sheet,
      section: properties.section,
    });
  }, []);

  // Track print action
  const trackPrint = useCallback((sheet: string) => {
    posthog.capture("print_initiated", {
      sheet,
    });
  }, []);

  // Track external link clicks (e.g., GitHub)
  const trackExternalLink = useCallback((url: string, context: string) => {
    posthog.capture("external_link_clicked", {
      url,
      context,
    });
  }, []);

  // Track search (if implemented later)
  const trackSearch = useCallback((query: string, results: number) => {
    posthog.capture("search_performed", {
      query: query?.slice(0, 50),
      results_count: results,
    });
  }, []);

  // Generic event tracking for custom events
  const trackEvent = useCallback(
    (eventName: string, properties: Record<string, unknown> = {}) => {
      posthog.capture(eventName, properties);
    },
    []
  );

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

import { useState, useCallback } from "react";
import { useAnalytics } from "./useAnalytics";

/**
 * Custom hook that combines clipboard copy with analytics tracking
 * @param {string} sheetName - Name of the cheat sheet (e.g., "git", "docker")
 * @param {string} category - Category of the sheet (e.g., "DevOps", "Databases")
 */
export const useCopyWithAnalytics = (sheetName, category = "") => {
  const [copiedCmd, setCopiedCmd] = useState(null);
  const { trackCommandCopy } = useAnalytics();

  const copyToClipboard = useCallback(
    (cmd, sectionTitle = "") => {
      navigator.clipboard.writeText(cmd);
      setCopiedCmd(cmd);
      setTimeout(() => setCopiedCmd(null), 2000);

      // Track the copy event
      trackCommandCopy({
        sheet: sheetName,
        section: sectionTitle,
        command: cmd,
        category: category,
      });
    },
    [sheetName, category, trackCommandCopy]
  );

  return { copiedCmd, copyToClipboard };
};

export default useCopyWithAnalytics;

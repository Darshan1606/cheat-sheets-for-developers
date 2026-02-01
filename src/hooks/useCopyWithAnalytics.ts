import { useState, useCallback } from "react";
import { useAnalytics } from "./useAnalytics";

/**
 * Custom hook that combines clipboard copy with analytics tracking
 * @param sheetName - Name of the cheat sheet (e.g., "git", "docker")
 * @param category - Category of the sheet (e.g., "DevOps", "Databases")
 */
export const useCopyWithAnalytics = (
  sheetName: string,
  category: string = ""
) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const { trackCommandCopy } = useAnalytics();

  const copyToClipboard = useCallback(
    (cmd: string, sectionTitle: string = "") => {
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

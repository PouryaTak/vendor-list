import { useCallback, useEffect } from "react";

/**
 * Custom React hook for implementing infinite scrolling behavior.
 * @param {Function} fn - A function to be called when the user reaches the bottom of the page.
 * @param {boolean} isLoading - A flag indicating whether additional data is currently being loaded.
 */
export default function useInfiniteScroll(fn: () => void, isLoading: boolean): void {
  /**
   * Callback function to handle the scroll event and trigger the provided function.
   * @private
   */
  const handleScroll = useCallback(() => {
    const isBottom = window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight;
    console.log(window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight);

    // Check if the user has reached the bottom of the page and data is not currently loading
    if (isBottom || isLoading) return;
    // Trigger the provided function to load more data
    fn();
  }, [fn, isLoading]);

  // Add and remove the scroll event listener on mount and unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
}

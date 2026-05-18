/**
 * Utility function to merge class names safely
 * Removes duplicates and undefined values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes
    .filter((cls): cls is string => typeof cls === 'string' && cls.length > 0)
    .join(' ');
}

export default cn;

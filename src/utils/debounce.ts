export function debounce(func: Function, wait: number) {
  let timeout: number;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
}

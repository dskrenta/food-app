export function getCurrentUTCOffset() {
  const date = new Date();
  return date.getTimezoneOffset() * 60; // return time offset in minutes
}
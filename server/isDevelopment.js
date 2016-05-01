export default function isDevelopment() {
  return typeof process.env.NODE_ENV === 'undefined' || process.env.NODE_ENV === 'development';
}

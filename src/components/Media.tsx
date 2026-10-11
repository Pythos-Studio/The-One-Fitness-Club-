import { useState } from 'react'
// Image with branded fallback when the photo is missing or fails to load.
export default function Media({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) return <div role="img" aria-label={alt} className={`ph ${className}`} />
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}

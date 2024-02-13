import { useEffect, useRef, useState } from "react"
import type { ImgHTMLAttributes } from "react"

type LazyImageProps = { src: string }

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ src: src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0i");

  useEffect(() => {
    // new observable
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      })
    });
    
    // observe node
    if (node.current) {
      observer.observe(node.current);
    }
  
    // disconnect
    return () => observer.disconnect();
  }, [src]);

  return <img
    ref={node}
    src={currentSrc}
    {...imgProps}
  />
}
import { useEffect, useRef, useState } from "react"
import type { ImgHTMLAttributes } from "react"

type LazyImageProps = { 
  src: string 
  onLazyLoad?: (img: HTMLImageElement) => void
}

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

export const LazyImage = ({ 
    src: src,
    onLazyLoad, 
    ...imgProps
  }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0i");

  useEffect(() => {
    if (isLazyLoaded) {
      return;
    }
    // new observable
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) {
          return;
        }
        
        setCurrentSrc(src);
        observer.disconnect();
        setIsLazyLoaded(true);

        if (typeof onLazyLoad === "function") {
          onLazyLoad(node.current!);
        }
      });
    });

    // observe
    if (node.current) {
      observer.observe(node.current);
    }

    // disconnect
    return () => observer.disconnect();
  }, [src, onLazyLoad, isLazyLoaded]);

  return <img
    ref={node}
    src={currentSrc}
    {...imgProps}
  />
}
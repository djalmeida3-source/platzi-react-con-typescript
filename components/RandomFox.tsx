import { useEffect, useRef, useState } from "react"

type Props = {
  image: string
}

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0i");

  useEffect(() => {
    // new observable
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      })
    });
    
    // observe node
    if (node.current) {
      observer.observe(node.current);
    }
  
    // disconnect
    return () => observer.disconnect();
  }, [image]);

  return <img
    ref={node}
    width="320"
    height="auto"
    src={src}
    className="mx-auto rounded-md bg-gray-300"
  />
}
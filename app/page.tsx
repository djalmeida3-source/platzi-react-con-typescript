'use client';
import { LazyImage } from "@/components/LazyImage";
import type { MouseEventHandler } from "react";
import { useState } from "react";

// Generate a ramdom function between 1 and 123
const getRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;
// Generate simple unique id
const generateId = (): string => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem = { id: generateId(), url: `https://randomfox.ca/images/${getRandomNumber()}.jpg`};
    setImages([...images, newImageItem]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {
        images.map(({id, url}, index) => (
          <div key={id} className="p-4">
            <LazyImage 
              src={url} 
              title={"Random Fox"}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
      ))}
    </main>
  );
}

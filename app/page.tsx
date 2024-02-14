'use client';
import { LazyImage } from "@/components/LazyImage";
import type { MouseEventHandler } from "react";
import { random } from "lodash";
import { useState } from "react";

// Generate a ramdom function between 1 and 123
const getRandom = (): number => random(1, 123);
// Generate simple unique id
const generateId = (): string => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newIFoxImageItem: IFoxImageItem = { id: generateId(), url: `https://randomfox.ca/images/${getRandom()}.jpg`};
    setImages([...images, newIFoxImageItem]);
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

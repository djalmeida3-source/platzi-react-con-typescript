'use client';
import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";

// Generate a ramdom function between 1 and 123
const getRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;
// Generate simple unique id
const generateId = (): string => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${getRandomNumber()}.jpg`},
    { id: generateId(), url: `https://randomfox.ca/images/${getRandomNumber()}.jpg`},
    { id: generateId(), url: `https://randomfox.ca/images/${getRandomNumber()}.jpg`},
    { id: generateId(), url: `https://randomfox.ca/images/${getRandomNumber()}.jpg`},
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-3xl font-bold">Hello World</h1>
      {
        images.map(({id, url}) => (
          <div key={id} className="p-4">
            <RandomFox image={url}/>
          </div>
      ))}
    </main>
  );
}

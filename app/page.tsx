'use client';
import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";

// Generate a ramdom function between 1 and 123
const getRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
    `https://randomfox.ca/images/${getRandomNumber()}.jpg`,
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-3xl font-bold">Hello World</h1>
      {
        images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox image={image}/>
          </div>
      ))}
    </main>
  );
}

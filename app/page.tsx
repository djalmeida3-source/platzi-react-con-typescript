import { RandomFox } from "@/components/RandomFox";

// Generate a ramdom function between 1 and 123
const getRandomNumber = (): number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <RandomFox image={`https://randomfox.ca/images/${getRandomNumber()}.jpg`}/>
    </main>
  );
}

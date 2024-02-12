import { RandomFox } from "@/components/RandomFox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-14">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <RandomFox/>
    </main>
  );
}

import HeroCanvas from "@/components/HeroCanvas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        ¡Bienvenido a mi Portafolio!
      </h1>
      <HeroCanvas />
    </main>
  );
}

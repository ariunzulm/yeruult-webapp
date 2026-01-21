import HeroCategory from "./components/hero/HeroCategory";
import MovieHeroSection from "./components/hero/MovieHero";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full h-screen">
      <MovieHeroSection />
      <HeroCategory />
    </div>
  );
}

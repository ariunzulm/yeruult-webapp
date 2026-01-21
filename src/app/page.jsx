import HeroCategory from "./components/movie/HeroCategory";
import MovieHeroSection from "./components/movie/MovieHero";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full h-screen">
      <MovieHeroSection />
      <HeroCategory />
    </div>
  );
}

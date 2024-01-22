import HeroSection from "./components/HeroSection";
import RecentWork from "./components/RecentWork";

export default function Home() {
  return (
    <main className="px-1">
      <HeroSection />
      <RecentWork/>
      {/* Add more sections as needed */}
    </main>
  );
}
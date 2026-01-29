import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionAbout } from "@/components/SectionAbout";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SectionAbout />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Bio from "@/components/Bio";
import Credits from "@/components/Credits";
import Gallery from "@/components/Gallery";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SectionDivider />
        <Showreel />
        <SectionDivider />
        <Bio />
        <SectionDivider />
        <Credits />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Press />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

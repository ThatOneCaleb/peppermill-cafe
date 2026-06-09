import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Menu from "@/app/components/Menu";
import Specials from "@/app/components/Specials";
import Reviews from "@/app/components/Reviews";
import Hours from "@/app/components/Hours";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Reviews />
        <Hours />
      </main>
      <Footer />
    </>
  );
}

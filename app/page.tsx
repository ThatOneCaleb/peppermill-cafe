import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import MarqueeTicker from "@/app/components/MarqueeTicker";
import About from "@/app/components/About";
import WaveDivider from "@/app/components/WaveDivider";
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

        {/* Marquee ticker between Hero and About */}
        <MarqueeTicker
          items={[
            "EGGS BENEDICT",
            "PANCAKES",
            "CORNED BEEF HASH",
            "MONTE CRISTO",
            "OMELETS",
            "FRENCH TOAST",
          ]}
          separator="*"
          bgColor="bg-buttercream"
          textColor="text-coffee"
          separatorColor="text-egg-yolk"
          speed="25s"
          borderColor="border-coffee/10"
        />

        <About />

        {/* Wave divider: buttercream to maple red */}
        <WaveDivider topColor="#FFF8E7" bottomColor="#C4601D" />

        <Menu />

        {/* Wave divider: maple red back to buttercream */}
        <WaveDivider topColor="#C4601D" bottomColor="#FFF8E7" />

        <Specials />
        <Reviews />

        {/* Marquee ticker before Hours (on coffee brown bg) */}
        <MarqueeTicker
          items={[
            "STANDALE'S FAVORITE",
            "OPEN DAILY",
            "HUGE PORTIONS",
            "FRIENDLY STAFF",
            "COME HUNGRY",
            "LEAVE HAPPY",
          ]}
          separator="*"
          bgColor="bg-coffee"
          textColor="text-cream"
          separatorColor="text-egg-yolk"
          speed="30s"
        />

        <Hours />
      </main>
      <Footer />
    </>
  );
}

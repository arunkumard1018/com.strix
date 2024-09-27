import { SecondaryHeroSection } from "@/components/custom/elements";
import { Features } from "@/components/home-page/Features";
import FooterComponent from "@/components/home-page/FooterComponent";
import { HeroImage, HeroText } from "@/components/home-page/Hero";
import NavBar from "@/components/home-page/NavBar";
import { ReviewsMarquee } from "@/components/home-page/Reviews";


function Page() {
  return (
    <div className="px-4 md:px-36 bg-muted/10">
      <NavBar/>
      <main className="space-y-10">
        <HeroText/>
        <HeroImage/>
        <Features/>
        <ReviewsMarquee/>
        <SecondaryHeroSection />
      </main>
      <FooterComponent />
    </div>
  );
}



export default Page;
import { CustomBentoGrid } from "@/components/home-page/CustomBentoGrid";
import { DashboardFeatures, DashboardImage, Features } from "@/components/home-page/DashboardFeatures";
import FooterComponent from "@/components/home-page/FooterComponent";
import { HeroText, SecondaryHeroSection } from "@/components/home-page/Hero";
import NavBar from "@/components/home-page/NavBar";
import { ReviewsMarquee } from "@/components/home-page/Reviews";


function Page() {
  return (
    <div className="bg-muted/10 ">
      <NavBar/>
      <main className="space-y-9 -z-50 md:px-36">
        <HeroText className=""/>
        <SecondaryHeroSection/>
        <CustomBentoGrid className="px-2"/>
        <ReviewsMarquee/>
        <DashboardFeatures />
        <DashboardImage className="" />
        <Features className="px-2"/>
      </main>
      <FooterComponent className="px-4 md:px-40 mt-10" />
    </div>
  );
}

export default Page;

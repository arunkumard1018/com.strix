import { CustomBentoGrid } from "@/components/home-page/CustomBentoGrid";
import { DashboardFeatures, Features, FeaturesImage } from "@/components/home-page/features";;
import FooterComponent from "@/components/home-page/FooterComponent";
import { DashboardImage, HeroText } from "@/components/home-page/Hero";
import NavBar from "@/components/home-page/NavBar";
import { ReviewsMarquee } from "@/components/home-page/Reviews";


function Page() {
  return (
    <div className="bg-muted/10 ">
      <NavBar/>
      <main className="space-y-9 -z-50 md:px-36">
        <HeroText className=""/>
        <FeaturesImage/>
        <CustomBentoGrid className="px-2"/>
        <ReviewsMarquee/>
        <DashboardFeatures />
        <DashboardImage className="" />
        <Features className="px-2"/>
      </main>
      <FooterComponent className="px-2 md:px-40 mt-10" />
    </div>
  );
}

export default Page;

// px-4 
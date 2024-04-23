import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return(
          
          <main>
            <HeroSection/>
            <FeaturedCourses/>
            <WhyChooseUs />
            <MusicSchoolTestimonials/>
            <UpcomingWebinars/>
            <Instructors/>
            <Footer/>
            
          </main>
  );
}

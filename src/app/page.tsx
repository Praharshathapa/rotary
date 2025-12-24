// Home.tsx
import Carousel from "./_components/Carousel";
import AboutSection from "./_components/AboutSection";
import GalleryPhotos from "./_components/GalleryPhotos";
import LeadershipMessages from "./_components/LeadershipMessages";
import UpcomingEvents from "./_components/UpcomingEvents";
import CallToAction from "./_components/CallToAction";

const carouselItems = [
  {
    image: "sliders/first meeting .jpg",
    title: "Welcome to Rotary Club of Kathmandu North",
    description: "Serving our community since 1995",
  },
  {
    image: "sliders/welcome rotary.jpg",
    title: "First Meeting of the Year",
    description: "First meeting of the year with our new president",
  },
  {
    image: "sliders/join our project.jpg",
    title: "Join Our Next Project",
    description: "Make a difference in your community",
  },
  {
    image: "sliders/welcome.png",
    title: "Meet Our President",
    description: "Learn about our leadership and vision",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Carousel items={carouselItems} />
      <AboutSection />
      <GalleryPhotos />
      <LeadershipMessages />
      <UpcomingEvents />
      <CallToAction />
    </div>
  );
}

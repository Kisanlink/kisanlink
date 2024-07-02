import Image from "next/image";

import Carousel from "./components/home/carousel";
import "../styles/global.css";
import Empower from "./components/home/empower";
import StatsCarousel from "./components/home/stats";
import Screenshot from "./components/home/screenshot";

import FourCards from "./components/home/fourcards";
import Collaborators from "./components/home/collaborators";
import VideoContainer from "./components/home/videocontainer";

import FarmMechanizationSection from "./components/home/farmmechanization";
const slides = [
  "https://www.kisanlink.in/wp-content/uploads/0707-new-web-banner.jpg",
  "https://www.kisanlink.in/wp-content/uploads/FPObanner.jpg",
  "https://www.kisanlink.in/wp-content/uploads/AMRTI-NEW-web-banner-1520px550px.png",
];

export default function Home() {
  return (
    <div>
      <Carousel autoSlide={true}>
        {[...slides.map((s) => <img className="w-1080" src={s} key={s} />)]}
      </Carousel>

      <Empower></Empower>
      {/* <FarmMechanization /> */}
      <FarmMechanizationSection />
      <StatsCarousel></StatsCarousel>
      <Screenshot></Screenshot>

      <FourCards />
      <Collaborators />
      <VideoContainer />
    </div>
  );
}

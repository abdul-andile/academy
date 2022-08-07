import "../layout/_grid.scss";
import "../base/_utilities.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../layout/Footer";
import VideosList from "../components/VideosList/VideosList";
const TVCourseSection = (props) => {
  return (
    <div>
      <HeroSection
        pageNo="1"
        mainHeader="Academics Tutorials"
        subHeader="Watch out our available video tutorials provided for you"
      />
      <VideosList course={props.course} />
      <Footer />
    </div>
  );
};
export default TVCourseSection;

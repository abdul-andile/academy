import classes from "./_heroSection.module.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import "../../base/_typography.scss";
const HeroSection = (props) => {
  return (
    <section className={classes.section__about}>
      <div
        className={
          "u-center-text u-margin-buttom-big " +
          classes.header +
          " " +
          classes.header__1
        }
      >
        <h2 className="heading-primary--main">{props.mainHeader}</h2>
        <h4 className="heading-primary--sub">{props.subHeader}</h4>
      </div>
    </section>
  );
};
export default HeroSection;

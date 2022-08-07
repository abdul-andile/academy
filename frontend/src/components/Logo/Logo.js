import classes from "./_logo.module.scss";
import LogoImg from "../../img/youtube.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className={classes.logo__box}>
      <img src={LogoImg} alt="logo" className={classes.logo} />
    </Link>
  );
};
export default Logo;

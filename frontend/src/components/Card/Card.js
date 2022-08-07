import classes from "./_card.module.scss";
import btnClasses from "../Button/_button.module.scss";
import "../../base/_typography.scss";
import { Link } from "react-router-dom";
const Card = (props) => {
  // cardNumber
  // headingText
  // subHeadingText
  // descriptionTitle
  // description
  // btnText
  return (
    <div className={classes.card}>
      <div className={classes.card__side + " " + classes.card__side__front}>
        <div
          className={
            classes.card__picture +
            " " +
            (props.cardNumber === "1"
              ? classes.card__picture__1
              : props.cardNumber === "2"
              ? classes.card__picture__2
              : props.cardNumber === "3"
              ? classes.card__picture__3
              : props.cardNumber === "4"
              ? classes.card__picture__4
              : props.cardNumber === "5"
              ? classes.card__picture__5
              : props.cardNumber === "6"
              ? classes.card__picture__6
              : props.cardNumber === "7"
              ? classes.card__picture__7
              : props.cardNumber === "8"
              ? classes.card__picture__8
              : props.cardNumber === "9"
              ? classes.card__picture__9
              : props.cardNumber === "10"
              ? classes.card__picture__10
              : classes.card__picture__11)
          }
        >
          &nbsp;
        </div>
        <h4 className={classes.card__heading}>
          <span
            className={
              classes.card__heading_span +
              " " +
              (props.cardNumber === "1"
                ? classes.card__heading_span__1
                : props.cardNumber === "2"
                ? classes.card__heading_span__2
                : props.cardNumber === "3"
                ? classes.card__heading_span__3
                : props.cardNumber === "4"
                ? classes.card__heading_span__4
                : props.cardNumber === "5"
                ? classes.card__heading_span__5
                : props.cardNumber === "6"
                ? classes.card__heading_span__6
                : props.cardNumber === "7"
                ? classes.card__heading_span__7
                : classes.card__heading_span__8)
            }
          >
            {props.headingText}
          </span>
        </h4>
        <div className={classes.card__details}>
          <p className="paragraph">{props.subHeadingText}</p>
        </div>
      </div>
      <div
        className={
          classes.card__side +
          " " +
          classes.card__side__back +
          " " +
          (props.cardNumber === "1"
            ? classes.card__side__back_1
            : props.cardNumber === "2"
            ? classes.card__side__back_2
            : props.cardNumber === "3"
            ? classes.card__side__back_3
            : props.cardNumber === "4"
            ? classes.card__side__back_4
            : props.cardNumber === "5"
            ? classes.card__side__back_5
            : props.cardNumber === "6"
            ? classes.card__side__back_6
            : props.cardNumber === "7"
            ? classes.card__side__back_7
            : classes.card__side__back_8)
        }
      >
        <div className={classes.card__cta}>
          <div className={classes.card__price_box}>
            <p className={classes.card__price_only}>{props.descriptionTitle}</p>
            <p className={classes.card__price_value}>{props.description}</p>
          </div>
          <Link
            to={
              props.cardNumber === "1"
                ? "/northino-tv"
                : props.cardNumber === "2"
                ? "/northino-store"
                : props.cardNumber === "3"
                ? "/northino-services"
                : props.cardNumber === "4"
                ? "/northino-tv/interviews"
                : props.cardNumber === "5"
                ? "/northino-tv/learn-with-almuhandis"
                : props.cardNumber === "6"
                ? "/northino-tv/do-it-yourself"
                : props.cardNumber === "7"
                ? "/northino-tv/business-management-training"
                : props.cardNumber === "8"
                ? "/northino-tv/motivational-videos"
                : props.cardNumber === "9"
                ? "/northino-services/custom-software-development"
                : props.cardNumber === "10"
                ? "/northino-services/business-brandig-and-promotion"
                : props.cardNumber === "11"
                ? "/northino-services/get-mentor"
                : "/"
            }
            className={
              btnClasses.btn +
              " " +
              btnClasses.btn__white +
              " " +
              btnClasses.btn__animated +
              " " +
              classes.card__btn
            }
          >
            {props.btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;

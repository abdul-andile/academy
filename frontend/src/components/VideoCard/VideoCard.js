import classes from "./_videoCard.module.scss";
import "../../base/_typography.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
const VideoCard = (props) => {
  return (
    <div className={classes.video__card}>
      <iframe
        className={classes.video__card_iframe}
        src={props.url}
        title={props.title}
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className={classes.video__card__body}>
        <h3
          className={
            "heading-tertiary u-margin-bottom-small u-center-text  " +
            classes.video__card__body_title
          }
        >
          {props.title}
        </h3>
        <p
          className={
            "paragraph u-center-text " + classes.video__card__body_description
          }
        >
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default VideoCard;

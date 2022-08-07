import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import classes from "./_card2.module.scss";
import { Link } from "react-router-dom";
export default function Card2(props) {
  const imgUrl = "../../../img/";
  return (
    <Card className={classes.card} sx={{ maxWidth: 345 }}>
      <img src={imgUrl + props.cardImage} alt="nhfd" height="140" />
      {/* <CardMedia
        className={classes.card__header}
        component="img"
        alt={props.imgAlt}
        height="140"
        image={cardImg}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.cardDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          className={classes.card__link}
          to={
            props.cardName === "built-for-clients" &&
            props.btnText === "Request"
              ? "/northino-services/custom-software-development/request-service-form"
              : props.cardName === "promotion-and-branding" &&
                props.btnText === "Request"
              ? "/northino-services/business-brandig-and-promotion/request-service-form"
              : props.cardName === "mentors" && props.btnText === "Request"
              ? "/northino-services/get-mentor/request-service-form"
              : props.cardName === "built-for-clients" && props.cardNo === "1"
              ? "/northino-services/custom-software-development/previous-clients-projects"
              : props.cardName === "built-for-clients" && props.cardNo === "2"
              ? "/northino-services/custom-software-development/our-builtIn-projects"
              : props.cardName === "promotion-and-branding" &&
                props.cardNo === "1"
              ? "/northino-services/business-brandig-and-promotion/businesses-promoted"
              : props.cardName === "mentors" && props.cardNo === "1"
              ? "/northino-services/get-mentor/mentors-list"
              : "/"
          }
        >
          {props.btnText}
        </Link>
        <Link className={classes.card__link} to="/northino-services">
          Back
        </Link>
      </CardActions>
    </Card>
  );
}

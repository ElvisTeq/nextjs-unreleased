import { Fragment } from "react";
import classes from "./BodyTitle.module.css";

const Title = () => {
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.img}>
          <h1 className={classes.title}>Browse Upcoming Games</h1>
        </div>
      </div>
    </Fragment>
  );
};
export default Title;

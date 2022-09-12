import { Fragment } from "react";
import classes from "./Title.module.css";

const Title = () => {
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.img}>
          <h1 className={classes.title}>Browse Upcoming Games</h1>
          <h2 className={classes.sectitle}>
            PC, Nintendo, Playstation and Xbox
          </h2>
        </div>
      </div>
    </Fragment>
  );
};
export default Title;

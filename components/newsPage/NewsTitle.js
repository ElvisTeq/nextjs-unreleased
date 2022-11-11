import { Fragment } from "react";
import classes from "./NewsTitle.module.css";

const NewsTitle = () => {
  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.img}>
          <h1 className={classes.title}>Today's News in Gaming</h1>
        </div>
      </div>
    </Fragment>
  );
};
export default NewsTitle;

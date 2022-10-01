import classes from "./NewsGrid.module.css";

const NewsGrid = (props) => {
  const data = props.data;

  return (
    <div className={classes.main}>
      <a href={data.link} className={classes.link1}>
        <p className={classes.p}>Browse Free-to-play Games</p>
      </a>
      <div className={classes.grid}>
        <a href={data.link} className={classes.link2}>
          <p className={classes.p}>Twitch Games Popularity</p>
        </a>
        <a href={data.link} className={classes.link3}>
          <p className={classes.p}>Nintendo News</p>
        </a>
      </div>
    </div>
  );
};

export default NewsGrid;

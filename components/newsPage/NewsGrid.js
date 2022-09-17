import classes from "./NewsGrid.module.css";

const NewsGrid = (props) => {
  const data = props.data;

  return (
    <div className={classes.main}>
      <a href={data.link} className={classes.link1}></a>
      <div className={classes.grid}>
        <a href={data.link} className={classes.link2}></a>
        <a href={data.link} className={classes.link3}></a>
      </div>
    </div>
  );
};

export default NewsGrid;

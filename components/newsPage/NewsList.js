import { Fragment } from "react";
import classes from "./NewsList.module.css";

const NewsList = (props) => {
  const data = props.data;
  console.log(data);

  // const date = data.date;
  // const year = new Date(date).getFullYear();
  // const month = new Date(date).getMonth();
  // const day = new Date(date).getDate();
  // const fullDate = [month, day, year].join("-");

  return (
    <Fragment>
      {data.map((news) => (
        <div key={news.id} className={classes.main}>
          <div className={classes.grid}>
            <img src={news.image} className={classes.image}></img>
            <h2 className={classes.title}>{news.title}</h2>
            <p className={classes.date}>{news.date}</p>
            <p className={classes.description}>{news.description}</p>
            <a href={news.link}></a>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default NewsList;

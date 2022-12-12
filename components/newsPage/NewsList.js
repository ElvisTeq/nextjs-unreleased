import classes from "./NewsList.module.css";

const NewsList = (props) => {
  const data = props.data;

  const date = data.date;
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();
  const fullDate = [month, day, year].join("-");

  return (
    <div className={classes.main}>
      <div className={classes.grid}>
        <img src={data.image} className={classes.image}></img>
        <h2 className={classes.title}>{data.title}</h2>
        <p className={classes.date}>{fullDate}</p>
        <p className={classes.description}>{data.description}</p>
        <a href={data.link}></a>
      </div>
    </div>
  );
};

export default NewsList;

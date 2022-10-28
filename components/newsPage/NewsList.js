import classes from "./NewsList.module.css";

const NewsList = (props) => {
  const data = props.data;

  return (
    <div className={classes.main}>
      <img src={data.image} className={classes.image}></img>
      <h2 className={classes.title}>{data.title}</h2>
      <p className={classes.date}>{data.date}</p>
      <p className={classes.description}>{data.description}</p>
      <a href={data.link}></a>
    </div>
  );
};

export default NewsList;

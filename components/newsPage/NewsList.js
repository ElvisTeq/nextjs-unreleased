import classes from "./NewsList.module.css";

const NewsList = (props) => {
  const data = props.data;

  return (
    <div className={classes.main}>
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p>{data.description}</p>
      <p>{data.image}</p>
      <p>{data.link}</p>
    </div>
  );
};

export default NewsList;

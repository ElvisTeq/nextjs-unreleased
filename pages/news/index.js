import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import classes from "./news.module.css";
import NewsTitle from "../../components/newsPage/NewsTitle";
import NewsGrid from "../../components/newsPage/NewsGrid";

const DUMMY_NEWS = {
  title:
    "Here is another look at God of War Ragnarök, as accompanying controller revealed",
  date: "Tue, 13 Sep 2022 22:48:32 +0000",
  description:
    "With God of War's highly anticipated sequel inching ever closer, Sony Santa Monica has given us another look at Ragnarök.",
  image:
    "https://assets.reedpopcdn.com/Rag-gow-Loki.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/Rag-gow-Loki.jpg",
  link: "https://www.eurogamer.net/here-is-another-look-at-god-of-war-ragnarok-as-accompanying-controller-revealed",
};

/* {
    title: "God Of War Ragnarok DualSense Revealed",
    date: "Tue, 13 Sep 2022 22:44:05 GMT",
    description: "Get ready for Ragnarok with this special edition DualSense.",
    image:
      "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/09/GodOfWarRagnarokDualSense.jpg",
    link: "https://www.thegamer.com/god-of-war-ragnarok-dualsense-revealed/",
  }, */

const data = DUMMY_NEWS;

const News = () => {
  return (
    <Fragment>
      <NewsTitle />
      <NewsGrid data={data} />
    </Fragment>
  );
};

export default News;

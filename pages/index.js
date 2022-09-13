import Head from "next/head";
import { Fragment } from "react";
import FeaturedDisplay from "../components/HomeBody/FeaturedDisplay";
import GameCards from "../components/HomeBody/GameCards";
import Title from "../components/HomeBody/Title";
import classes from "../styles/Home.module.css";

const DUMMY_DATA = [
  {
    id: "g1",
    name: "pokemon violet",
    releaseDate: "november 18, 2022",
    price: 59.99,
    platform: "nintendo",
    url: "https://www.nintendo.com/store/products/pokemon-violet-switch/",
    urlMore: "https://scarletviolet.pokemon.com/",
    img: "PKM.jpg",
  },
  {
    id: "g2",
    name: "Pokemon Scarlet",
    releaseDate: "November 18, 2022",
    price: 59.99,
    platform: "nintendo",
    url: "https://www.nintendo.com/store/products/pokemon-scarlet-switch/",
    urlMore: "https://scarletviolet.pokemon.com/",
    img: "Scarlet.jpg",
  },
];

export default function Home() {
  return (
    <Fragment>
      <div className={classes.main}>
        <Head>
          <title>Unreleased</title>
          <meta name="description" content="Browse Upcoming Games" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Title />
        <FeaturedDisplay />
        <GameCards games={DUMMY_DATA} />
      </div>
    </Fragment>
  );
}

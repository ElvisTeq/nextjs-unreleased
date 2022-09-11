import Head from "next/head";
import { Fragment } from "react";
import FeaturedDisplay from "../components/Layout/Body/FeaturedDisplay";
import GameCards from "../components/Layout/Body/GameCards";
import styles from "../styles/Home.module.css";

const DUMMY_DATA = [
  {
    id: "g1",
    name: "Pokemon Violet",
    releaseDate: "November 18, 2022",
    price: 59.99,
    platform: "nintendo",
    url: "https://www.nintendo.com/store/products/pokemon-violet-switch/",
    img: "PKM.jpg",
  },
  {
    id: "g2",
    name: "Pokemon Scarlet",
    releaseDate: "November 18, 2022",
    price: 59.99,
    platform: "nintendo",
    url: "https://www.nintendo.com/store/products/pokemon-scarlet-switch/",
    img: "Scarlet.jpg",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Unreleased</title>
        <meta name="description" content="Browse Upcoming Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedDisplay />
      <GameCards games={DUMMY_DATA} />
    </Fragment>
  );
}

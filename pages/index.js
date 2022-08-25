import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedDisplay from "../components/Layout/Body/FeaturedDisplay";
import GameCards from "../components/Layout/Body/GameCards";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Unreleased</title>
        <meta name="description" content="Browse Upcoming Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedDisplay />
      <GameCards />
    </Fragment>
  );
}

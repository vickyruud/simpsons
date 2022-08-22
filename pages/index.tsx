import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import QuoteQuestion from "../components/QuoteQuestion";
import { Quote } from "../types";
import bannerImage from "../public/banner.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simpsons - Quotes Game</title>
        <meta name="Simpsons Game" content="Who said it?" />
        <link rel="icon" href="/donut.jpeg" />
      </Head>

      <div>
        <Image src={bannerImage} alt="banner-image" />
        <h1>Welcome to Springfield</h1>
      </div>
    </div>
  );
};

export default Home;

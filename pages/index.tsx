import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";

const Home: NextPage = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = () =>
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then((res) => setQuotes(res.data))
      .catch((e) => console.log(e.message));

  useEffect(() => {
    fetchQuotes();
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Simpsons - Quotes Game</title>
        <meta name="Simpsons Game" content="Who said it?" />
        <link rel="icon" href="/donut.jpeg" />
      </Head>

      <div>
        <h1>Welcome to Springfield</h1>
      </div>
    </div>
  );
};

export default Home;

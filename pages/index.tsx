import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import QuoteQuestion from "../components/QuoteQuestion";
import { Quote } from "../types";
import bannerImage from "../public/banner.jpg";
import styled from "styled-components";
import Link from "next/link";
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
        <h2>Think you know Simpsons?</h2>
        <h2>Try and ace this quiz!</h2>
        <Link href="/game">
          <StyledButton>Play Now!!</StyledButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;

const StyledButton = styled.button`
  background: #156450;
  color: white;
  border-radius: 3px;
  border: 2px solid blue;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

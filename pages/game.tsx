import { useState, useEffect } from "react";
import axios from "axios";
import QuoteQuestion from "../components/QuoteQuestion";
import styled from "styled-components";

const Game = () => {
  const [quotes, setQuotes] = useState([]);
  const [count, setCount] = useState(0);

  const fetchQuotes = () => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then((res) => setQuotes(res.data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Container>
      {quotes.length > 1 ? <QuoteQuestion quoteObject={quotes[count]} /> : null}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  padding: 10px;
  
`;

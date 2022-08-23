import { useState, useEffect } from "react";
import axios from "axios";
import QuoteQuestion from "../components/QuoteQuestion";
import styled from "styled-components";

const Game = () => {
  const [quotes, setQuotes] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [result, setResult] = useState([]);

  const [wrong, setWrong] = useState(false);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchQuotes = () => {
    axios
      .get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10`)
      .then((res) => setQuotes(res.data))
      .catch((e) => console.log(e.message));
  };

  const handleNext = () => {
    if (count < 9) {
      setCount((prevCount) => prevCount + 1);
      setAnswered(false);
      setWrong(false);
      setErrorMessage("");
      console.log(result);
    } else {
      setCount(10);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Container>
      {quotes.length > 1 ? (
        <QuoteQuestion
          quoteObject={quotes[count]}
          fetchQuotes={fetchQuotes}
          answered={answered}
          setAnswered={setAnswered}
          wrong={wrong}
          setWrong={setWrong}
          handleNext={handleNext}
          setCount={setCount}
          count={count}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          result={result}
          setResult={setResult}
        />
      ) : null}
    </Container>
  );
};

export default Game;

const Container = styled.div`
  padding: 10px;
`;

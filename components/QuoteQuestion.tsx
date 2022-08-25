import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import { charactersList } from "../data/characters";

const QuoteQuestion = ({
  quoteObject,
  fetchQuotes,
  setAnswered,
  setWrong,
  setCount,
  handleNext,
  answered,
  wrong,
  count,
  errorMessage,
  setErrorMessage,
  result,
  setResult,
  setNumberCorrect,
  numberCorrect,
}: {
  quoteObject: any;
  fetchQuotes: any;
  setAnswered: any;
  setWrong: any;
  setCount: any;
  handleNext: any;
  answered: boolean;
  wrong: boolean;
  count: number;
  errorMessage: string;
  setErrorMessage: any;
  result: any;
  setResult: any;
  setNumberCorrect: any;
  numberCorrect: any;
}) => {
  const [userResponse, setUserResponse] = useState("");

  const onSubmit = (event: any) => {
    event.preventDefault();
    setAnswered(false);
    const correct = quoteObject.character;
    const lowerCase = correct.toLowerCase();
    if (userResponse.trim()) {
      if (lowerCase.includes(userResponse.toLowerCase())) {
        setAnswered(true);
        setResult((prevResult: any) => [...prevResult, correct]);
        setWrong(false);
        setErrorMessage("");
        setUserResponse("");
        setNumberCorrect((prevNumber: number) => prevNumber + 1);
        console.log(numberCorrect);
      } else {
        setAnswered(false);
        setWrong(true);
        setErrorMessage("");
      }
    } else {
      setErrorMessage("Answer Should not be blank");
    }
  };

  const handleNextClick = (event: any) => {
    event.preventDefault();
    setUserResponse("");
    handleNext();
  };

  //resets the game
  const handleResetClick = (event: any) => {
    event.preventDefault();
    fetchQuotes();
    setCount(0);
    setResult([]);
    setNumberCorrect(0);
  };

  return (
    <Container>
      <h1>Who said this?</h1>
      <h2>{count <= 9 ? quoteObject.quote : null} </h2>
      {answered ? <p>You are Correct!!</p> : null}
      {answered ? (
        <Image src={quoteObject.image} width="250" height="250" />
      ) : null}
      {wrong ? <p>You are Wrong!</p> : null}
      {errorMessage ? <p>{errorMessage}</p> : null}
      <AnswerForm onSubmit={onSubmit}>
        <input
          onChange={(e) => setUserResponse(e.target.value)}
          value={userResponse}
        ></input>
        <StyledButton type="submit">Guess!</StyledButton>
        {count <= 9 ? (
          <StyledButton onClick={handleNextClick}>Next</StyledButton>
        ) : (
          <StyledButton onClick={handleResetClick}>Reset</StyledButton>
        )}
      </AnswerForm>
      {count > 9 ? <p>Your Score is {numberCorrect} / 10</p> : null}
    </Container>
  );
};

export default QuoteQuestion;

const StyledButton = styled.button`
  background: #156450;
  color: white;
  border-radius: 3px;
  border: 2px solid blue;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const AnswerForm = styled.form`
  display: flex;
  margin-top: 50px;
`;

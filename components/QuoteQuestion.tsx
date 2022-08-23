import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

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
        setWrong(false);
        setErrorMessage("");
      } else {
        setAnswered(false);
        setWrong(true);
        setErrorMessage("");
      }
    } else {
      setErrorMessage("Answer Should not be blank");
    }
  };

  return (
    <div>
      <h1>Who said this?</h1>
      <h2>{count <= 9 ? quoteObject.quote : null} </h2>
      {answered ? <p>You are Correct!!</p> : null}
      {answered ? (
        <Image src={quoteObject.image} width="400" height="400" />
      ) : null}
      {wrong ? <p>You are Wrong!</p> : null}
      {errorMessage ? <p>{errorMessage}</p> : null}
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setUserResponse(e.target.value)}></input>
        <StyledButton type="submit">Submit</StyledButton>
        <StyledButton onClick={handleNext}>Next</StyledButton>
      </form>
    </div>
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

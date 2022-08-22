import Image from "next/image";
import React, { useState } from "react";

const QuoteQuestion = ({ quoteObject }: { quoteObject: any }) => {
  const [answered, setAnswered] = useState(false);
  const [userResponse, setUserResponse] = useState("");
  const [wrong, setWrong] = useState(false);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setAnswered(false);

    const correct = quoteObject.character;
    const lowerCase = correct.toLowerCase();
    if (lowerCase.includes(userResponse)) {
      setAnswered(true);
      setWrong(false);
    } else {
      setAnswered(false);
      setWrong(true);
    }
  };

  return (
    <div>
      <h1>Who said this?</h1>
      <h2>{quoteObject.quote}</h2>
      {answered ? <p>You are Correct!!</p> : null}
      {answered ? (
        <Image src={quoteObject.image} width="400" height="400" />
      ) : null}
      {wrong ? <p>You are Wrong!</p> : null}
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setUserResponse(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuoteQuestion;

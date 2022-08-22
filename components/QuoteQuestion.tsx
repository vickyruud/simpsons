import Image from "next/image";
import React from "react";

const QuoteQuestion = ({ quoteObject }: { quoteObject: any }) => {
  return (
    <div>
      <h2>{quoteObject.quote}</h2>
      <Image src={quoteObject.image} width="400" height="400" />
    </div>
  );
};

export default QuoteQuestion;

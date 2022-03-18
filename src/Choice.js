import React from "react";
import { ChoiceContainer } from "./GameElements";

const Choice = ({ variant }) => {
  return (
    <ChoiceContainer>
      <div className="img">
        <img src={variant} alt="" />
      </div>
      <p>Ваш выбор</p>
    </ChoiceContainer>
  );
};

export default Choice;

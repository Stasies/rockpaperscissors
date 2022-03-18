import React from "react";
import { ChoiceContainer } from "./GameElements";

const Opponent = ({ opChoice }) => {
  return (
    <ChoiceContainer>
      <div className="img">
        <img src={opChoice} alt="" />
      </div>
      <p>Выбор противника</p>
    </ChoiceContainer>
  );
};

export default Opponent;

import React, { useEffect, useRef, useState } from "react";
import Choice from "./Choice";
import { HomeContainer, HomeWrapper, HomeForm } from "./HomeElements";
import Opponent from "./Opponent";
import Scissors from "./img/scissors.png";
import Rock from "./img/rock.png";
import Paper from "./img/paper.png";

const Home = () => {
  const [text, setText] = useState(false);
  const [chosen, setChosen] = useState(false);
  const [choice, setChoice] = useState("");
  const [opChoice, setOpChoice] = useState("");
  const pickOption = (variant) => {
    setChoice(variant);
    setChosen(!chosen);
    let array = [Rock, Paper, Scissors];
    let opponent = array[Math.floor(Math.random() * array.length)];
    setOpChoice(opponent);
    // console.log(opponent);
    // console.log(array.indexOf(choice));
    // console.log(array.indexOf(opChoice));
    // console.log(choice);
    // if (array.indexOf(choice) > array.indexOf(opponent)) {
    //   setText("you win");
    // }
  };
  return (
    <HomeContainer>
      <h1>Камень, ножницы, бумага</h1>

      {chosen ? (
        <>
          <HomeWrapper>
            <Opponent opChoice={opChoice} />
            <Choice variant={choice} />
          </HomeWrapper>
          <button onClick={() => setChosen(false)}>Eще раз</button>
        </>
      ) : (
        <HomeWrapper>
          <div className="RPS">
            <img
              className="images"
              src={Rock}
              alt=""
              onClick={() => pickOption(`${Rock}`)}
            />
            <img
              className="images"
              src={Scissors}
              alt=""
              onClick={() => pickOption(`${Scissors}`)}
            />
            <img
              className="images"
              src={Paper}
              alt=""
              onClick={() => pickOption(`${Paper}`)}
            />
          </div>
        </HomeWrapper>
      )}
    </HomeContainer>
  );
};

export default Home;

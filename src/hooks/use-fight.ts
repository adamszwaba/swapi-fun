import React from "react";
import { Comparable } from "../features/game/resource";
import { PersonOrStarship, setWinner, tie } from "../features/game/slice";
import { useAppSelector, useAppDispatch } from "./redux";

const useFight = (): { fighting: boolean; doFight: () => void } => {
  const [fighting, setIsFighting] = React.useState(false);
  const {
    chosenPieces: { user: usersPiece, oponent: oponentsPiece },
  } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const decideWinner = () => {
    const outcome = usersPiece?.compare(
      oponentsPiece as Comparable<PersonOrStarship>
    );
    switch (outcome) {
      case 1:
        dispatch(setWinner("user"));
        break;
      case -1:
        dispatch(setWinner("oponent"));
        break;
      default:
        dispatch(tie());
    }
  };

  const doFight = () => {
    setIsFighting(true);
  };

  React.useEffect(() => {
    if (fighting) {
      decideWinner();
      setTimeout(() => {
        setIsFighting(false);
      }, 1500);
    }
  }, [fighting]);

  return { fighting, doFight };
};

export default useFight;

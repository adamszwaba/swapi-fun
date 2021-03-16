import { Box } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../hooks/redux";
import Item from "../item/item";
import { PersonOrStarship } from "./slice";

const WinnerBox: React.FC = () => {
  const winner = useAppSelector((state) => state.game.winner);
  const playerpiece = useAppSelector((state) => state.game.chosenPieces.user);
  const oponentpiece = useAppSelector(
    (state) => state.game.chosenPieces.oponent
  );
  if (winner === "tie") {
    return (
      <Box>
        <Item item={playerpiece?.get() as PersonOrStarship} />
        <Item item={oponentpiece?.get() as PersonOrStarship} />
      </Box>
    );
  }
  if (winner === "user" || winner === "oponent") {
    return (
      <Item
        item={
          winner === "user"
            ? (playerpiece?.get() as PersonOrStarship)
            : (oponentpiece?.get() as PersonOrStarship)
        }
      />
    );
  }
  return null;
};

export default WinnerBox;

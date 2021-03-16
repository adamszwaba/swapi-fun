import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { PersonOrStarship } from "../game/slice";
import { Person } from "../people/people";
import PersonBox from "../people/person";
import StarshipBox from "../starships/starship";
import { Starship } from "../starships/starships";

export type IItemCardProps = { item: PersonOrStarship };

const ItemCard: React.FC<IItemCardProps> = ({ item }) => {
  const itemType = useAppSelector((state) => state.game.pieces);
  if (itemType === "starships")
    return <StarshipBox starship={item as Starship} />;
  return <PersonBox person={item as Person} />;
};

export default ItemCard;

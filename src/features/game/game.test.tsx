import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Game from "./game";

let mockIsLoggedIn = false;
jest.mock("../hooks/use-auth", () => {
  return jest.fn(() => {
    isLoggedIn: mockIsLoggedIn;
  });
});

describe("game", () => {
  render(<Game />);
  test("you can change the type of entities that fight", () => {
    const typeSelect = screen.getByRole("button", {
      name: "toggle piece type",
    });
    const fightHeadline = screen.getByRole("heading", {
      name: "chosen piece type",
    });
    fireEvent.change(typeSelect, { target: { value: "people" } });
    expect(fightHeadline).toHaveTextContent("People fighting");
    fireEvent.change(typeSelect, { target: { value: "starships" } });
    expect(fightHeadline).toHaveTextContent("Starships fighting");
  });
  test("has a scoreboard", () => {
    screen.getByRole("region", { name: "Scoreboard" });
  });

  const fightButton = screen.getByRole("button", { name: "fight" });
  const winner = screen.getByRole("region", {
    name: "winner",
    hidden: true,
  });
  test("when play button is clicked, a winner is chosen", () => {
    fireEvent.click(fightButton);
    expect(winner).toBeVisible();
    expect(fightButton.textContent).toEqual("Play again?");
  });
  test("allows to restart", () => {
    fireEvent.click(fightButton);
    expect(fightButton.textContent).toEqual("Fight");
    expect(winner).not.toBeVisible();
  });
});

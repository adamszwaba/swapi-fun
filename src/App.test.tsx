import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App displays key areas", () => {
  render(<App />);
  it("displays user and oponent area", () => {
    screen.getByRole("complementary", {
      name: "user area",
    });
    screen.getByRole("complementary", {
      name: "oponent area",
    });
    screen.getByRole("article", { name: "game board" });
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerArea from "./player-area";

describe("User area", () => {
  render(<PlayerArea player="user" />);
  test("displays user's resource", () => {
    const resourceBox = screen.getByRole("region", { name: "Your piece" });
    const resourceName = screen.getByRole("heading");
    expect(resourceBox.textContent).not.toBeFalsy();
  });
});

describe("oponent area", () => {
  render(<PlayerArea player="oponent" />);
  test("displays oponents resource", () => {
    const resourceBox = screen.getByRole("region", {
      name: "Oponent's piece",
    });
  });
});

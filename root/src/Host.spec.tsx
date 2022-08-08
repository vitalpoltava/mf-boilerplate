import React from "react";
import { render, screen } from "@testing-library/react";
import Host from "./Host";

test("Host component to be rendered", () => {
  render(<Host />)
  expect(screen.getByText(/host/i)).toBeInTheDocument()
})

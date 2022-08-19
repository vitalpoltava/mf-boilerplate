import React from "react";
import { render, screen } from "@testing-library/react";
import Root from "@/Root";
const token$ = (function* () {
  yield Promise.resolve({authToken: "123"})
})()

test("Root component to be rendered", () => {
    render(<Root token$={token$} Events={{}} />)
    expect(screen.getByText(/remote/i)).toBeInTheDocument()
})

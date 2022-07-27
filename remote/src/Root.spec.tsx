import React from "react";
import { render, screen } from "@testing-library/react";
import Root from "./Root";

test("Root component to be rendered", () => {
    render(<Root />)
    expect(screen.getByText(/remote/i)).toBeInTheDocument()
})

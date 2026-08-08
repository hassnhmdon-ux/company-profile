import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Iraqi market homepage", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /your gateway to the iraqi food market/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore our brands/i })).toHaveAttribute(
    "href",
    "#brands"
  );
});

import { fireEvent, render, screen } from "@testing-library/react";
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

  expect(screen.getAllByAltText(/^Mutlu product \d+$/i)).toHaveLength(9);

  fireEvent.click(screen.getByRole("button", { name: /Nuh'un Ankara logo/i }));
  expect(screen.getAllByAltText(/^Nuh'un Ankara product \d+$/i)).toHaveLength(22);

  fireEvent.click(screen.getByRole("button", { name: /Vitamin Enriched/i }));
  expect(screen.getAllByAltText(/^Vitamin Enriched product \d+$/i)).toHaveLength(10);

  fireEvent.click(screen.getByRole("button", { name: /Regal logo/i }));
  expect(screen.getAllByAltText(/^Regal product \d+$/i)).toHaveLength(14);
});

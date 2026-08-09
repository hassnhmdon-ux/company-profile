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
  expect(screen.getByRole("link", { name: /start a conversation/i })).toHaveAttribute(
    "href",
    "#contact"
  );

  expect(screen.getByAltText("Mutlu logo")).toHaveClass("scale-100");
  expect(screen.getByAltText("Nuh'un Ankara logo")).toHaveClass("scale-100");
  expect(screen.getByAltText("Regal logo")).toHaveClass("scale-[1.65]");
  expect(screen.getByAltText("LOLO Rice logo")).toHaveClass("scale-[2]");
  expect(screen.getByAltText("MIGITA logo")).toHaveClass("scale-[1.12]");
  expect(screen.getByAltText("Mutlu logo")).toHaveAttribute("loading", "lazy");
  expect(screen.getByRole("button", { name: /Mutlu logo/i })).toHaveClass(
    "focus-visible:ring-2"
  );

  expect(screen.getAllByAltText(/^Mutlu product \d+$/i)).toHaveLength(9);
  expect(screen.getByAltText("Mutlu product 1")).toHaveAttribute("loading", "lazy");
  expect(screen.getByAltText("Iraq distribution network map")).toHaveAttribute(
    "loading",
    "lazy"
  );

  fireEvent.click(screen.getByRole("button", { name: /Nuh'un Ankara logo/i }));
  expect(screen.getAllByAltText(/^Nuh'un Ankara product \d+$/i)).toHaveLength(22);
  expect(screen.getByAltText("Nuh'un Ankara product 1")).toHaveClass("scale-[1.65]");

  fireEvent.click(screen.getByRole("button", { name: /Vitamin Enriched/i }));
  expect(screen.getAllByAltText(/^Vitamin Enriched product \d+$/i)).toHaveLength(10);

  fireEvent.click(screen.getByRole("button", { name: /LOLO Rice logo/i }));
  expect(screen.getByAltText("LOLO Rice product 1")).toHaveClass("scale-100");
  expect(screen.getByAltText("LOLO Rice product 2")).toHaveClass("scale-[0.84]");

  fireEvent.click(screen.getByRole("button", { name: /Regal logo/i }));
  expect(screen.getAllByAltText(/^Regal product \d+$/i)).toHaveLength(14);

  fireEvent.click(screen.getByRole("button", { name: /MIGITA logo/i }));
  expect(screen.getByText("New agency")).toBeInTheDocument();
  expect(screen.getByAltText("Migita Ginger Hard Candy")).toBeInTheDocument();
  expect(screen.getByAltText("Migita Mint Hard Candy")).toBeInTheDocument();
  expect(screen.getByAltText("Migita Cinnamon Hard Candy")).toBeInTheDocument();
  expect(
    screen.getByAltText("Migita Ginger Hard Candy with Honey Filling")
  ).toBeInTheDocument();
  expect(
    screen.getByAltText("Migita Pink Lemon Hard Candy with Honey Filling")
  ).toBeInTheDocument();
  expect(screen.getAllByText("Plastic bag / 70g")).toHaveLength(3);
  expect(screen.getAllByText("Plastic bag / 140g")).toHaveLength(2);
});

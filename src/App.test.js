import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders label mortgageamount", () => {
  render(<App />);
  const label = screen.getByTestId("mortgageamount-label");
  expect(label).toBeInTheDocument();
});

test("renders input interestrate", () => {
  render(<App />);
  const input = screen.getByTestId("interestrate-input");
  expect(input).toBeInTheDocument();
});

test("renders dropdown paymentfrequency", () => {
  render(<App />);
  const dropdown = screen.getByTestId("paymentfrequency-dropdown");
  expect(dropdown).toBeInTheDocument();
});

test("renders button calculate", () => {
  render(<App />);
  const button = screen.getByTestId("calculate-button");
  expect(button).toBeInTheDocument();
});

test("clicking on info image of label 1 should load info text 1", () => {
  render(<App />);
  const infoimage = screen.getByTestId("mortgageamount-label");
  const infoContainer = screen.getByTestId("mortgageamount-info-container");
  fireEvent.click(infoimage, { image: "0" });
  expect(infoContainer).toBeInTheDocument();
  expect(infoContainer.className).toEqual("show-info");
});

test("clicking on close button of info 1 should hide info text", () => {
  render(<App />);
  const infoimage = screen.getByTestId("mortgageamount-label");
  fireEvent.click(infoimage, { image: "0" });
  const closebutton = screen.getByTestId("mortgageamount-close-button");
  const infoContainer = screen.getByTestId("mortgageamount-info-container");
  fireEvent.click(closebutton, { button: "0" });
  expect(infoContainer.className).toEqual("hide-info");
});

import { render, screen } from "@testing-library/react";

import App from "./App";

jest.mock("./components/footer/Footer", () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

jest.mock("./components/navbar/NavBar", () => ({
  NavBar: () => <div data-testid="navbar">NavBar</div>,
}));

jest.mock("./pages/RacesPage", () => ({
  RacesPage: () => <div data-testid="races-page">RacesPage</div>,
}));

describe("Render App Component", () => {
  test("renders NavBar, RacesPage, and Footer", () => {
    render(<App />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("races-page")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});

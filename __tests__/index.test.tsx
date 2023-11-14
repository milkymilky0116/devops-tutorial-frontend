/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("render a home", () => {
    const { container } = render(<Home />);

    const home = screen.getByText("Test");

    expect(home).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../../src/app/page";


describe("Contador", () => {
  it("inicia en 0", () => {
    render(<Home />);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("Valor: 0");
  });

  it("incrementa en 1 al hacer clic en +", async () => {
    render(<Home />);
    await userEvent.click(screen.getByTestId("increment"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("Valor: 1");
  });

  it("decrementa en 1 al hacer clic en -", async () => {
    render(<Home />);
    await userEvent.click(screen.getByTestId("decrement"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("Valor: -1");
  });
});

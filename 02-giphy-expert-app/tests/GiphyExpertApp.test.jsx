import { render, screen, fireEvent } from "@testing-library/react";
import { GiphyExpertApp } from "../src/GiphyExpertApp";
 
describe("Tests in GiphyExpertApp", () => {
 
  test("Debe contener el titulo GiphyExpertApp en el <h1>", () => {
    render(<GiphyExpertApp />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "GiphyExpertApp"
    );
  });
 
  test("Debe añadir una categoria si no esta repetida", () => {
    render(<GiphyExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form", { name: "form" });
    fireEvent.change(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);
 
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });
 
  test("NO debe añadir una categoria si esta repetida", () => {
    render(<GiphyExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form", { name: "form" });
    fireEvent.change(input, { target: { value: "Pokemon" } });
    fireEvent.submit(form);
 
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });
});
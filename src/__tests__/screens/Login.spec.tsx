import {
  screen,
  render,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react-native";
import Login from "../../screens/Login/Login";
import "@testing-library/jest-native/dist/extend-expect";
import React from "react";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Login Screen", () => {
  const navigationMock = {
    navigate: jest.fn(),
  } as any;

  it("it rendering inputs", async () => {
    render(<Login navigation={navigationMock} />);

    await act(() => {
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(screen.getByText("digite algum email")).toBeTruthy;
      expect(screen.getByText("senha é obrigatório")).toBeTruthy;
    });
  });

  it("it rendering error messages when submit wrong form", async () => {
    render(<Login navigation={navigationMock} />);

    await act(() => {
      fireEvent.changeText(
        screen.getByTestId("emailInput"),
        "user@exemplo.com.br"
      );
      fireEvent.changeText(screen.getByTestId("passwordInput"), "1234566");
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(screen.getByText("Email ou senha incorreta")).toBeTruthy;
    });

    await act(() => {
      fireEvent.changeText(screen.getByTestId("emailInput"), "user@exemplo.");
      fireEvent.changeText(screen.getByTestId("passwordInput"), "12345");
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(screen.getByText("senha deve conter 6 caracteres")).toBeTruthy();

      expect(screen.getByText("verique seu email")).toBeTruthy();
    });
  });

  it("it testing correct credencial", async () => {
    render(<Login navigation={navigationMock} />);
    await act(() => {
      fireEvent.changeText(
        screen.getByTestId("emailInput"),
        "user@exemplo.com.br"
      );
      fireEvent.changeText(screen.getByTestId("passwordInput"), "123456");
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(navigationMock.navigate).toHaveBeenCalledWith("Home");
    });
  });
});

import {
  screen,
  render,
  fireEvent,
  within,
  waitFor,
  act,
} from "@testing-library/react-native";
import Login from "../../screens/Login/Login";
import "@testing-library/jest-native/dist/extend-expect";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Test Login", () => {
  const navigationMock = {
    navigate: jest.fn(),
  } as any;
  it("labelsEmpyt", () => {
    render(<Login navigation={navigationMock} />);

    expect(screen.getAllByPlaceholderText("Digite seu email").length).toBe(1);
    expect(screen.getAllByPlaceholderText("Digite sua senha").length).toBe(1);
  });

  it("Test of Empty credencial", async () => {
    render(<Login navigation={navigationMock} />);

    await act(() => {
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(screen.queryAllByText("digite algum email").length).toBe(1);
      expect(screen.queryAllByText("senha é obrigatório").length).toBe(1);
    });
  });

  it("Test of Wrong credencial", async () => {
    render(<Login navigation={navigationMock} />);

    await act(() => {
      fireEvent.changeText(
        screen.getByTestId("emailInput"),
        "user@exemple.com.br"
      );
      fireEvent.changeText(screen.getByTestId("passwordInput"), "123456");
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(screen.queryAllByText("Email ou senha incorreta").length).toBe(1);
    });

    await act(() => {
      fireEvent.changeText(
        screen.getByTestId("emailInput"),
        "user@exemplo.com.br"
      );
      fireEvent.changeText(screen.getByTestId("passwordInput"), "1234566");
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(screen.queryAllByText("Email ou senha incorreta").length).toBe(1);
    });

    await act(() => {
      fireEvent.changeText(screen.getByTestId("emailInput"), "user@exemplo.");
      fireEvent.changeText(screen.getByTestId("passwordInput"), "12345");
      fireEvent.press(screen.getByTestId("ButtonSubmit"));
    });

    await waitFor(() => {
      expect(
        screen.queryAllByText("senha deve conter 6 caracteres").length
      ).toBe(1);
      expect(screen.queryAllByText("verique seu email").length).toBe(1);
    });
  });
  it("Test of correct credencial", async () => {
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

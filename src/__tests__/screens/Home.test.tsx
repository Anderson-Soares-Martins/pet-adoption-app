import { screen, render } from "@testing-library/react-native";
import Home from "../../screens/Home/Home";
import "@testing-library/jest-native/dist/extend-expect";
import React from "react";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Home Screen", () => {
  const navigationMock = {
    navigate: jest.fn(),
  } as any;

  it("it rendering picker", async () => {
    render(<Home navigation={navigationMock} />);
    expect(screen.getByTestId("ModalActivity").props).toMatchObject({
      visible: true,
    });
  });
});

import {
  screen,
  render,
  waitFor,
  act,
  fireEvent,
  cleanup,
} from "@testing-library/react-native";
import "@testing-library/jest-native/dist/extend-expect";
import React from "react";
import Picker from "../../screens/Home/Picker";
import db from "../../services/jsonServer/db.json";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing data render in picker component", () => {
  const axios = {
    get: jest.fn().mockResolvedValue({ data: { results: [...db.categories] } }),
  };

  const useState = {
    setSelectedCategory: jest.fn(),
  };

  const eventData = {
    nativeEvent: {
      contentOffset: {
        y: 500,
      },
      contentSize: {
        // Dimensions of the scrollable content
        height: 500,
        width: 100,
      },
      layoutMeasurement: {
        // Dimensions of the device
        height: 100,
        width: 100,
      },
    },
  };

  afterEach(cleanup);

  render(
    <Picker
      currentCategory={0}
      setSelectedCategory={useState.setSelectedCategory}
    />
  );

  it("it rendering picker", async () => {
    expect(screen.getByText("Todos")).toBeTruthy();

    await act(() => {
      fireEvent.press(screen.getByTestId("Picker-test"));
    });
    await waitFor(() => {
      expect(screen.getByTestId("Flatlist-test")).toBeTruthy();
    });
  });
});

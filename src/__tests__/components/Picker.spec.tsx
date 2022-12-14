import {
  screen,
  render,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react-native";
import "@testing-library/jest-native/dist/extend-expect";
import React from "react";
import Picker from "../../screens/Home/Picker";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("../../services/api", () => {
  return {
    api: {
      get: (url: string) => {
        if (url === "/categories") {
          return Promise.resolve({
            data: [
              {
                id: 0,
                name: "Test 1",
                img: "",
              },
              {
                id: 1,
                name: "Test 2",
                img: "",
              },
              {
                id: 2,
                name: "Test 3",
                img: "",
              },
            ],
          });
        }
      },
    },
  };
});

const setSelectedCategory = jest.fn();

describe("Testing data render in picker component", () => {
  it("it rendering picker", async () => {
    await waitFor(() => {
      render(
        <Picker currentCategory={0} setSelectedCategory={setSelectedCategory} />
      );
    });

    await act(() => {
      fireEvent.press(screen.getByTestId("Picker-test"));
    });

    await waitFor(() => {
      expect(screen.getAllByText("Todos").length).toBe(2);
      expect(screen.getByText("Test 1")).toBeTruthy();
    });
  });
});

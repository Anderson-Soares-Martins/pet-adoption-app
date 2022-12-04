import {
  screen,
  render,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react-native";
import "@testing-library/jest-native/dist/extend-expect";
import React from "react";
import ListAnimal from "../../screens/Home/ListAnimal";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("../../services/api", () => {
  return {
    api: {
      get: (url: string) => {
        if (url === "/animal") {
          return Promise.resolve({
            data: [
              {
                id: 1,
                name: "Test 1",
                categoryId: 1,
                age: 3,
                img: "",
              },
              {
                id: 1,
                name: "Test 2",
                categoryId: 2,
                age: 3,
                img: "",
              },
              {
                id: 1,
                name: "Test 3",
                categoryId: 3,
                age: 3,
                img: "",
              },
            ],
          });
        }
      },
    },
  };
});
const onSelect = jest.fn();
const selectedCategory = 0;
const setIsLoading = jest.fn();

describe("Testing data render in ListAnimal component", () => {
  it("it rendering listanimal", async () => {
    await waitFor(() => {
      render(
        <ListAnimal
          onSelect={onSelect}
          currentCategory={selectedCategory}
          setIsLoading={setIsLoading}
        />
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Test 1")).toBeTruthy();
    });

    await act(() => {
      fireEvent.press(screen.getAllByTestId("Select-animal")[0]);
    });

    await waitFor(() => {
      expect(onSelect).toBeCalled();
    });
  });
});

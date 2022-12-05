import { screen, render, waitFor } from "@testing-library/react-native";
import Description from "../../screens/Description/Description";
import "@testing-library/jest-native/dist/extend-expect";
import React from "react";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("../../services/api", () => {
  return {
    api: {
      get: (url: string) => {
        if (url === "/animal/1") {
          return Promise.resolve({
            data: {
              id: 1,
              name: "Test 1",
              categoryId: 1,
              age: 2,
              img: "",
              description: "test description",
              phone: 489999999,
              email: "user@exemplo.com.br",
            },
          });
        }
      },
    },
  };
});

const navigationMock = {
  navigate: jest.fn(),
  getState: () => {
    return {
      routes: [
        {
          name: "Description",
          params: {
            id: 1,
          },
        },
      ],
    };
  },
} as any;

describe("Description", () => {
  it("it should render the component", async () => {
    render(<Description navigation={navigationMock} />);
    await waitFor(() => {
      expect(screen.getByText("Nome")).toBeTruthy();
      expect(screen.getByText("Idade")).toBeTruthy();
      expect(screen.getByText("Descrição")).toBeTruthy();
      expect(screen.getByText("Contato")).toBeTruthy();
    });
  });
  it("it should render the component with data", async () => {
    render(<Description navigation={navigationMock} />);
    await waitFor(() => {
      expect(screen.getByText("Test 1")).toBeTruthy();
      expect(screen.getByText("2 anos")).toBeTruthy();
      expect(screen.getByText("test description")).toBeTruthy();
    });
  });
});

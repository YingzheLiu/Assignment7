import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import App from "./App";
// import { MemoryRouter, Route } from "react-router-dom";
import { createServer } from "miragejs";

let server;

beforeEach(() => {
  server = createServer({
    routes() {
      this.logging = false;
      this.host = "";
      this.get("https://www.reddit.com/r/cats.json", () => {
        console.log("called");
        return {
          data: {
            children: [
              {
                data: {
                  id: 1,
                  title: "test 1",
                  score: 100,
                },
              },
              {
                data: {
                  id: 2,
                  title: "test 2",
                  score: 200,
                },
              },
            ],
          },
        };
      });
    },
  });
});

afterEach(() => {
  server.shutdown();
});

test("rendering Reddit posts", async () => {
  // Mock out the API using Mirage.js
  // Write assertions to verify the following:
  // 1. The number of table body rows match the number of posts returned from the API
  // 2. The table body cells contain the correct data

  const { container, queryByText, getByTestId } = render(<App />);
  const loading = getByTestId("loading");
  expect(container).toContainElement(loading);

  await waitForElementToBeRemoved(() => {
    return loading;
  });
});

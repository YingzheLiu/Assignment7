import { createServer } from "miragejs";
import fetchPostsForSubreddit from "./reddit-api";

let server;

beforeEach(() => {
  server = createServer({
    routes() {
      this.logging = false;
      this.get("https://www.reddit.com/r/cats.json", () => {
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

test("fetchPostsForSubreddit()", () => {
  // Verify that this function returns a promise that resolves with an array of
  // post objects where each post object contains an id, title, and score.
  // Mock out the API using Mirage.js.
  return fetchPostsForSubreddit("cats").then((posts) => {
    expect(posts).toEqual([
      {
        id: 1,
        title: "test 1",
        score: 100,
      },
      {
        id: 2,
        title: "test 2",
        score: 200,
      },
    ]);
  });
});

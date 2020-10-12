import React from "react";
import { render } from "@testing-library/react";
import SortableTable from "./SortableTable";

const columns = [
  {
    field: "title",
    header: "Title",
  },
  {
    field: "score",
    header: "Score",
  },
];

const rows = [
  { id: 0, score: 10, title: "Post 0" },
  { id: 1, score: 15, title: "Post 1" },
  { id: 2, score: 13, title: "Post 2" },
  { id: 3, score: 25, title: "Post 3" },
];

// Use the data above for the following tests

test("rendering the table headers", () => {
  // Verify that the table headers contain the value in the header property in the columns array
});

test("rendering rows with a numeric default sort in ascending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Verify that the correct table header has the correct sort direction
});

test("rendering rows with a numeric default sort in descending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Verify that the correct table header has the correct sort direction
});

test("rendering rows with a string default sort in ascending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Verify that the correct table header has the correct sort direction
});

test("rendering rows with a string default sort in descending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Verify that the correct table header has the correct sort direction
});

test("clicking on the table header with the sort reverses the sort", () => {});

test("clicking on a table header without the sort applies the sort to that column", () => {});

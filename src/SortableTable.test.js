import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SortableTable from "./SortableTable";

// Arrange
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

  // Act
  const { getAllByTestId } = render(
    <SortableTable rows={rows} columns={columns} defaultSort="score:desc" />
  );

  // Assert
  const headers = getAllByTestId("th");
  headers.forEach((header, index) => {
    expect(header).toHaveTextContent(columns[index].header);
  });
});

test("rendering rows with a numeric default sort in ascending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Act
  const { getAllByTestId } = render(
    <SortableTable rows={rows} columns={columns} defaultSort="score:asc" />
  );
  const trs = getAllByTestId("tr");
  const scores = trs.map((tr) => {
    return tr.children[1].textContent; //[TODO]: ask children
  });
  const sortedScoresAsc = scores.map((score) => {
    return score;
  });
  sortedScoresAsc.sort();
  // Assert
  expect(scores).toEqual(sortedScoresAsc);

  // Verify that the correct table header has the correct sort direction
  // Act
  const sortDirection = getAllByTestId("sortDirection");
  // Assert
  expect(sortDirection[1]).toHaveTextContent("asc");
});

test("rendering rows with a numeric default sort in descending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Act
  const { getAllByTestId } = render(
    <SortableTable rows={rows} columns={columns} defaultSort="score:desc" />
  );
  const trs = getAllByTestId("tr");
  const scores = trs.map((tr) => {
    return tr.children[1].textContent; //[TODO]: ask children
  });
  const sortedScoresaDesc = scores.map((score) => {
    return score;
  });
  sortedScoresaDesc.sort();
  sortedScoresaDesc.reverse();
  // Assert
  expect(scores).toEqual(sortedScoresaDesc);

  // Verify that the correct table header has the correct sort direction
  // Act
  const sortDirection = getAllByTestId("sortDirection");
  // Assert
  expect(sortDirection[1]).toHaveTextContent("desc");
});

test("rendering rows with a string default sort in ascending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Act
  const { getAllByTestId } = render(
    <SortableTable rows={rows} columns={columns} defaultSort="title:asc" />
  );
  const trs = getAllByTestId("tr");
  const titles = trs.map((tr) => {
    return tr.children[0].textContent; //[TODO]: ask children
  });
  const sortedTitlesAsc = titles.map((title) => {
    return title;
  });
  sortedTitlesAsc.sort();
  // Assert
  expect(titles).toEqual(sortedTitlesAsc);

  // Verify that the correct table header has the correct sort direction
  // Act
  const sortDirection = getAllByTestId("sortDirection");
  // Assert
  expect(sortDirection[0]).toHaveTextContent("asc");
});

test("rendering rows with a string default sort in descending order", () => {
  // Verify that the table rows are rendered in the correct order
  // Act
  const { getAllByTestId } = render(
    <SortableTable rows={rows} columns={columns} defaultSort="title:desc" />
  );
  const trs = getAllByTestId("tr");
  const titles = trs.map((tr) => {
    return tr.children[0].textContent; //[TODO]: ask children
  });
  const sortedTitlesDesc = titles.map((title) => {
    return title;
  });
  sortedTitlesDesc.sort();
  sortedTitlesDesc.reverse();
  // Assert
  expect(titles).toEqual(sortedTitlesDesc);

  // Verify that the correct table header has the correct sort direction
  // Act
  const sortDirection = getAllByTestId("sortDirection");
  // Assert
  expect(sortDirection[0]).toHaveTextContent("desc");
});

test("clicking on the table header with the sort reverses the sort", () => {
  // // Act
  // columns.forEach((column, index) => {
  //   console.log(column.field);
  //   const { getAllByTestId } = render(
  //     <SortableTable
  //       rows={rows}
  //       columns={columns}
  //       defaultSort="{column.field}+:desc"
  //     />
  //   );
  //   const trs = getAllByTestId("tr");
  //   const titles = trs.map((tr) => {
  //     return tr.children[index].textContent; //[TODO]: ask children
  //   });
  // const sortedTitlesAsc = titles.map((title) => {
  //   return title;
  // });
  // sortedTitlesAsc.sort();
  // sortedTitlesAsc.reverse();
  // const sortDirection = getAllByTestId("sortDirection");
  // console.log(sortDirection[index].textContent);
  // fireEvent.click(getAllByTestId("th")[index]);
  // // Assert
  // console.log(index);
  // titles.forEach((title, index) => {
  //   console.log(title);
  //   // expect(title).toMatch(sortedTitlesAsc[index]);
  // });
  // // Assert
  // expect(sortDirection[0]).toHaveTextContent("desc");
  // });
});

test("clicking on a table header without the sort applies the sort to that column", () => {});

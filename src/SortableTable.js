import React, { useState, useEffect } from "react";
import sortBy from "lodash.sortby";

export default function SortableTable({ columns, rows, defaultSort }) {
  const [sortedRows, setSortedRows] = useState([]);
  const [defaultSortedField, defaultSortDirection] = defaultSort.split(":");
  const [currentSortedField, setCurrentSortedField] = useState(
    defaultSortedField
  );
  const [currentSortDirection, setCurrentSortDirection] = useState(
    defaultSortDirection
  );

  useEffect(() => {
    let initialSortedRows = sortBy(rows, [currentSortedField]);

    if (currentSortDirection === "desc") {
      initialSortedRows = initialSortedRows.reverse();
    }

    setSortedRows(initialSortedRows);
  }, [rows, currentSortedField, currentSortDirection]);

  function sortRows(field) {
    if (field === currentSortedField) {
      if (currentSortDirection === "asc") {
        setCurrentSortDirection("desc");
      } else {
        setCurrentSortDirection("asc");
      }
    } else {
      setCurrentSortedField(field);
      setCurrentSortDirection("asc");
    }
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columns.map(({ field, header }) => {
            return (
              <th key={field} onClick={() => sortRows(field)}>
                {header}&nbsp;
                <small>
                  {currentSortedField === field && `(${currentSortDirection})`}
                </small>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row) => {
          return (
            <tr key={row.id}>
              {columns.map(({ field }) => {
                return <td key={field}>{row[field]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

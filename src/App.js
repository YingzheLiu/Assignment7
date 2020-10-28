import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Loading";
import fetchPostsForSubreddit from "./reddit-api";
import SortableTable from "./SortableTable";

export default function App() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPostsForSubreddit("cats").then((posts) => {
      console.log("fetchPosts");
      setRows(posts);
      setIsLoading(false);
    });
  }, []);

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mt-3">
      <SortableTable rows={rows} columns={columns} defaultSort="score:desc" />
      {/* <SortableTable rows={rows} columns={columns} defaultSort="score:asc" /> */}
      {/* <SortableTable rows={rows} columns={columns} defaultSort="title:asc" /> */}
    </div>
  );
}

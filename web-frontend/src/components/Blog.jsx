import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchTextFile } from "../apis/github";
import Markdown from "react-markdown";

export default function Blog() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const title = location.pathname.split("/")[2];

  const [content, setContent] = useState(false);

  useEffect(() => {
    const fetchAndSetContent = async () => {
      const res = await fetchTextFile(path, title);
      setContent(res);
    };

    fetchAndSetContent();
  }, []);

  return (
    <div className="prose">
      <h1>{decodeURIComponent(title).split(".").slice(0, -1)}</h1>
      <div>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

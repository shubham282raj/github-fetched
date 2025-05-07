import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getBlogHeaders } from "../apis/github";
import Blog from "./Blog";

export default function AutomatedBlog() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const title = location.pathname.split("/")[2];

  if (title) {
    return <Blog />;
  }

  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchAndSetBlogs = async () => {
      const content = await getBlogHeaders(path);
      setblogs(content.data);
    };
    fetchAndSetBlogs();
  }, []);

  return (
    <div>
      <h1>{path}</h1>
      <div>
        {blogs.map((blogMeta) => (
          <>
            <Link to={blogMeta.name}>
              {blogMeta.name.split(".").slice(0, -1)}
            </Link>
            <br></br>
          </>
        ))}
      </div>
    </div>
  );
}

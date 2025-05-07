import React, { useEffect, useState } from "react";
import { getBlogHeaders } from "../apis/github";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [blogRoutes, setBlogRoutes] = useState([]);

  useEffect(() => {
    const fetchAndSetBlogRoutes = async () => {
      const res = await getBlogHeaders("");
      const routes = res.data.filter((item) => item.type === "dir");
      setBlogRoutes(routes);
    };
    fetchAndSetBlogRoutes();
  }, []);

  return (
    <div>
      <span>Navbar</span>
      {blogRoutes.map((route) => (
        <Link to={`/${route.name}`}>{route.name}</Link>
      ))}
    </div>
  );
}

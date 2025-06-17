import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "Welcome to About Page!" }];
}

type Tag = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export default function About() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const res = await fetch(`${import.meta.env.VITE_API}/tags`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const tags = await res.json();
      setTags(tags);
    }

    fetchTags();
  }, []);
  return (
    <main className="p-3">
      <NavLink
        className="group flex items-center gap-3 self-stretch leading-normal text-blue-700 hover:underline dark:text-white"
        to={"/"}>
        Home
      </NavLink>
      <h1>About Page</h1>
      <ul className="mt-5 table border-spacing-2">
        <h2 className="text-2xl">Tags:</h2>
        {tags.map(({ id, name, created_at }: Tag) => (
          <li key={id} className="table-row ml-4">
            <b className="table-cell">{name}</b> <span className="table-cell">{created_at}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

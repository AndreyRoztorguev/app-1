import { NavLink } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "Welcome to About Page!" }];
}

export default function About() {
  return (
    <main className="p-3">
      <NavLink
        className="group flex items-center gap-3 self-stretch leading-normal text-blue-700 hover:underline dark:text-white"
        to={"/"}>
        Home
      </NavLink>
      <h1>About Page</h1>
    </main>
  );
}

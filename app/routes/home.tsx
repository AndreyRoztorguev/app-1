import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "App-1" }, { name: "description", content: "Welcome to App-1!" }];
}

export default function Home() {
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getGreeting() {
      const res = await fetch(import.meta.env.VITE_API, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.text();
      setValue(data);
    }

    getGreeting();
  }, []);
  return <Welcome greeting={value} />;
}

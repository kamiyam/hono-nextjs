import type { apiRouter } from "@/server/routers/api";
import { hc } from "hono/client";
import { useEffect, useState } from "react";

const apiClient = hc<typeof apiRouter>("/");

export default function Home() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // /api/hello/:id
      const helloRes = await apiClient.api.hello[":id"].$get({
        param: { id: "hono" },
      });
      if (helloRes.ok) {
        const helloJson = await helloRes.json();
        console.info(helloJson);
      }
      // /api/user
      const userRes = await apiClient.api.user.$post({
        json: {
          name: "John",
          age: 30,
        },
      });
      if (userRes.ok) {
        const userJson = await userRes.json();
        console.info(userJson);
      }
      const res = await fetch("/api/sample");
      if (res.ok) {
        const { message } = await res.json();
        setMessage(message);
      }
    };

    fetchData();
  }, []);

  if (!message) return <p>Loading...</p>;

  return <p>{message}</p>;
}

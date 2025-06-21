// src/page.js
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/snippets");
}

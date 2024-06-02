import Image from "next/image";
import styles from "./page.module.css";
import SPA from "./components/SPA";
import InputModal from "./components/InputModal/InputModal";
import { getAllTodos } from "@/api";

export default async function Home() {
  const todos = await getAllTodos();
  console.log(todos);
  return (
    <main>
      <SPA todos={todos} />
      <InputModal />
    </main>
  );
}

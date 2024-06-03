import Image from "next/image";
import styles from "./page.module.css";
import InputModal from "./components/InputModal/InputModal";
import { getAllTodos } from "@/api";
import MainPage from "./components/MainPage";

export default async function Home() {
  const todos = await getAllTodos();
  console.log(todos);
  return (
    <main>
      <MainPage todos={todos} />
    </main>
  );
}

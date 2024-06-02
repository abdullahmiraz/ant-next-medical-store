import Image from "next/image";
import styles from "./page.module.css";
import SPA from "./components/SPA";
import InputModal from "./components/InputModal/InputModal";

export default function Home() {
  return (
    <>
      <SPA />
      <InputModal />
    </>
  );
}

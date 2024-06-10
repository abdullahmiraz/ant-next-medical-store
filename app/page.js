 import HomePage from "../components/HomePage/HomePage";
import Navbar from "../components/Navbar/Navbar";
import FooterComp from "../components/FooterComp/FooterComp";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <FooterComp />
    </main>
  );
}

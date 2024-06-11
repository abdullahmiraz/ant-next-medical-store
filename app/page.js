"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return <main>HomePage</main>;
}

// import HomePage from "../components/HomePage/HomePage";
// import Navbar from "../components/Navbar/Navbar.tsx";
// import FooterComp from "../components/FooterComp/FooterComp";

// export default async function Home() {
//   return (
//     <main>
//       <Navbar />
//       <HomePage />
//       <FooterComp />
//     </main>
//   );
// }

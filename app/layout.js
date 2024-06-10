import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar.tsx";
import FooterComp from "../components/FooterComp/FooterComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Nextjs CRUD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" theme="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

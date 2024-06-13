import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD APP",
  description: "Nextjs CRUD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" theme="">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

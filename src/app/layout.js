import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "public/assets/css/bootstrap.min.css";
import "public/assets/css/themify-icons.css";
import "public/assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spa - Latest",
  description: "Modern salon app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

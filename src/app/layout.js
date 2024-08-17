import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arjit Jain Portfolio App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-[100vh] bg-gradient-to-b from-blue-50 to-red-100">
          <div className="h-24">
            <Navbar/>
          </div>
          <div className="h-[cal(100vh-6rem)] bg-slate-400">
           {children}
          </div>
        </div>
      </body>
    </html>
  );
}
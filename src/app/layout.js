import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arjit Jain Portfolio AppLication",
  description: "My portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

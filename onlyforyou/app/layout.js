import Link from "next/link";
import { ThemeProvider } from "./component/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Valenthuy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#FF5D80] overflow-hidden`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

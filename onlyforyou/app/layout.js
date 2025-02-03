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
        className={`bg-[#ea50fb] overflow-hidden w-screen h-screen flex justify-center items-center`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <div className="text-[16px] font-Line absolute bottom-3  hover:text-[#ffff] duration-300 ease-linear">
          Created by{" "}
          <Link
            href={"https://github.com/pisitponjanton"}
            className="hover:text-[#d45151]"
            target="_bank"
          >
            {"Lone's"}
          </Link>{" "}
          IT KMITL
        </div>
      </body>
    </html>
  );
}

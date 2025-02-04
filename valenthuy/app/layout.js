import { ThemeProvider } from "./component/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Valenthuy - เขียนข้อความของขวัญสุดประทับใจ",
  description: "สร้างข้อความของขวัญโรแมนติกเพื่อแสดงความรักให้คนพิเศษของคุณ ด้วย Valenthuy.",
  keywords: "วาเลนไทน์, ข้อความรัก, ข้อความของขวัญ, ความรัก, Valentine, love messages",
  authors: [{ name: "Pisitpon Jantop", url: "https://valentine-s-five.vercel.app" }],
  openGraph: {
    title: "Valenthuy - ข้อความของขวัญจากใจ",
    description: "เขียนข้อความสุดพิเศษสำหรับของขวัญวาเลนไทน์ของคุณ",
    url: "https://valentine-s-five.vercel.app",
    siteName: "Valenthuy",
    images: [
      {
        url: "https://valentine-s-five.vercel.app/image/hearts.png",
        width: 1200,
        height: 630,
        alt: "Valenthuy - Gift Message for Your Loved One",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valenthuy - เขียนข้อความสุดโรแมนติก",
    description: "แสดงความรักผ่านข้อความวาเลนไทน์ที่แสนอบอุ่น",
    images: ["https://valentine-s-five.vercel.app/image/hearts.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#FF5D80]`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

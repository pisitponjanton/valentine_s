import { ThemeProvider } from "./component/ThemeContext";
import "./globals.css";

export const metadata = {
  title:
    "Valenthuy - เขียนข้อความของขวัญสุดประทับใจให้คนที่คุณรัก | Write Heartfelt Gift Messages",
  description:
    "สร้างข้อความของขวัญสุดโรแมนติก เพื่อแสดงความรักในทุกโอกาสพิเศษ เติมเต็มความอบอุ่นด้วยคำพูดที่มาจากใจ ผ่าน Valenthuy. | Create personalized and romantic gift messages to express your love. Make every word count with Valenthuy.",
  keywords:
    "วาเลนไทน์, ข้อความรัก, ข้อความของขวัญ, ของขวัญสุดพิเศษ, เขียนข้อความ, ความรัก, Valentine, love messages, gift notes, romantic words, heartfelt messages",
  authors: [
    {
      name: "Pisitpon Jantop",
      url: "https://valentine-s-five.vercel.app",
    },
  ],
  openGraph: {
    title:
      "Valenthuy - เขียนข้อความโรแมนติกสำหรับของขวัญของคุณ | Write Romantic Gift Messages",
    description:
      "เขียนข้อความที่เต็มไปด้วยความหมายสำหรับของขวัญวาเลนไทน์ของคุณ เพื่อแสดงความรักอย่างอบอุ่นและน่าประทับใจ | Craft meaningful, heartfelt messages for your Valentine’s gifts.",
    url: "https://valentine-s-five.vercel.app",
    siteName: "Valenthuy",
    images: [
      {
        url: "https://valentine-s-five.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valenthuy - เขียนข้อความของขวัญสุดประทับใจ | Write Gift Messages",
      },
    ],
    locale: "th_TH", // สำหรับภาษาไทย
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Valenthuy - เขียนข้อความของขวัญจากใจ | Craft the Perfect Gift Message",
    description:
      "แสดงความรักด้วยข้อความวาเลนไทน์สุดซึ้ง ที่จะทำให้คนพิเศษของคุณประทับใจไม่รู้ลืม | Express your love with heartfelt Valentine’s messages.",
    images: [
      "https://valentine-s-five.vercel.app/twitter-image.jpg",
    ],
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

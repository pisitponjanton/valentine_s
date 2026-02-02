import "./globals.css";

export const metadata = {
  title: "Valentine Letter 💌 | Create & Share a Love Message",
  description:
    "Create a beautiful Valentine letter with photos and a heartfelt message. Generate a shareable link and send it to someone special. Made with love by BuildifyX.",

  keywords: [
    "Valentine",
    "Valentine letter",
    "love letter",
    "Valentine website",
    "send love message",
    "Valentine link",
    "romantic message",
    "BuildifyX",
  ],

  authors: [{ name: "BuildifyX" }],
  creator: "BuildifyX",

  openGraph: {
    title: "Valentine Letter 💖",
    description:
      "A sweet Valentine letter with photos and a personal message. Create your own and share it with someone special 💌",
    url: "https://valentine.buildifyx.com",
    siteName: "Valentine Letter by BuildifyX",
    images: [
      {
        url: "img/icon.png",
        width: 512,
        height: 512,
        alt: "Valentine Letter",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Valentine Letter 💌",
    description:
      "Create a Valentine letter with photos and a personal message. Share it with someone you love 💖",
    images: ["img/icon.png"],
    creator: "@buildifyx",
  },

  icons: {
    icon: "img/icon.png",
    apple: "img/icon.png",
  },

  metadataBase: new URL("https://valentine.buildifyx.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen min-h-screen flex flex-col items-center justify-between">
        <main className="w-full flex justify-center">{children}</main>
      </body>
    </html>
  );
}

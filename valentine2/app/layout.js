import "./globals.css";

export const metadata = {
  title: "Letter | Create & Share a Personal Message",
  description:
    "Create a simple letter with photos and a personal message. Generate a shareable link and send it to someone important. Built by BuildifyX.",

  keywords: [
    "letter",
    "personal letter",
    "photo letter",
    "share message",
    "message link",
    "digital letter",
    "BuildifyX",
  ],

  authors: [{ name: "BuildifyX" }],
  creator: "BuildifyX",

  openGraph: {
    title: "Letter",
    description:
      "A personal letter with photos and a message. Create your own and share it through a simple link.",
    url: "https://valentine.buildifyx.com",
    siteName: "Letter by BuildifyX",
    images: [
      {
        url: "img/icon.png",
        width: 512,
        height: 512,
        alt: "Letter",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Letter",
    description:
      "Create a personal letter with photos and a message, then share it with a link.",
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

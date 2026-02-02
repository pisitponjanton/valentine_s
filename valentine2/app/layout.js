import "./globals.css";

export const metadata = {
  title: "BuildifyX – Modern Web Development & UI Solutions",
  description:
    "Built by BuildifyX. We create modern, fast, and scalable web applications using Next.js, React, and cutting-edge technologies. Follow us on TikTok @buildifyx.",
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

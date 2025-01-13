import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cloned App",
  description: "Made by Huzaifa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

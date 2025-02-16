import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MyProvider from "./_RTX/provider/MyProvider";

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "this ecommerce products from aliExpress and other companies,Search about what you want with much categories and chose what you are looking for",
  keywords: ["e-commerce", "fashion", "aliexpress", "products"],
  authors: {
    name:"abdo yasser arfat"
  }

};
const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} overflow-x-hidden min-h-screen w-screen  antialiased`}
      >
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}

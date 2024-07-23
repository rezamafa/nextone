import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "nextapp/components/navbar";
import Providers from "./hooks/providers";
import { getSession } from "nextapp/utils/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next One",
  description: "Next One Webapp",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <header>
            <Navbar />
          </header>
          <main className="w-full h-full flex flex-col items-center justify-center ">{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}

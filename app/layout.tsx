import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./_trpc/provider";
import Heaader from "./_components/Heaader";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tasksRPC",
  description: "Created by lilKriT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Heaader />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

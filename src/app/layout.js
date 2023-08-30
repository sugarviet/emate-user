import Navbar from "@/components/public/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/public/Footer";

import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Emate",
  description: "Find your mate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo.png" />
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#27272a",
            },
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </ConfigProvider>
      </body>
    </html>
  );
}

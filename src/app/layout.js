import dynamic from 'next/dynamic'

import Navbar from "@/components/public/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
// import Footer from "@/components/public/Footer";


import { ConfigProvider } from "antd";

// const inter = Inter({ subsets: ["latin"] });
const Footer = dynamic(() => import("@/components/public/Footer"));


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo.png" />
      <body>
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


import dynamic from "next/dynamic";

import Navbar from "@/components/public/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import { ConfigProvider } from "antd";
import Providers from "@/utils/Providers";

// const inter = Inter({ subsets: ["latin"] });
const Footer = dynamic(() => import("@/components/public/Footer"));

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo.png" />
      <body>
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorPrimary: "#27272a",
                algorithm: true,
              },
              Button: {
                algorithm: true,
                borderRadius: "12px",
              },
              Modal: {
                algorithm: true,
                colorBgContainer: "red",
              },
            },
          }}
        >
          
            <Providers >
              <Navbar />
              {children}
              <Footer />
            </Providers>
         
        </ConfigProvider>
      </body>
    </html>
  );
}


import dynamic from "next/dynamic";

import Navbar from "@/components/public/Navbar";
import "./globals.css";
import DepositModal from "@/components/DepositModal";

import { ConfigProvider } from "antd";
import Providers from "@/utils/Providers";

const Footer = dynamic(() => import("@/components/public/Footer"));

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <link rel="icon" href="/emate.svg" />
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
              {true && <DepositModal/>}
              <Footer />
            </Providers>
         
        </ConfigProvider>
      </body>
    </html>
  );
}

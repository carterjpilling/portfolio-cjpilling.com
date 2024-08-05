import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/header";
import { Providers } from "@/lib/providers";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

const title = "CJ Pilling | Full Stack Developer From Provo, UT.";
const description =
  "A full stack developer who specializes in front-end development from Provo, UT.";
const url = "https://cjpilling.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
  creator: "CJ Pilling",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/CJWebsiteLogo.png",
    shortcut: "/CJWebsiteLogo.png",
    apple: "/CJWebsiteLogo.png",
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter?.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

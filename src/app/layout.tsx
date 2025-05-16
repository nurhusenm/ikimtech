// app/layout.jsx
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import HydrationLoader from "@/components/HydrationLoader";

export const metadata = {
  title: "IKEM TECH Co – Creative Digital Services",
  description:
    "IKEM TECH Co delivers cutting‑edge web, mobile, 3D design & video production services to bring your ideas to life.",
  openGraph: {
    title: "IKEM TECH Co",
    description: "Creative digital services in branding, web & video.",
    url: "https://yourdomain.com",
    siteName: "IKEM TECH Co",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IKEM TECH Co Branding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IKEM TECH Co",
    description: "Bringing your concepts to life with creative digital services.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <body>
        <HydrationLoader>
          <Navbar />
          {children}
        </HydrationLoader>
      </body>
        
      
    </html>
  );
}

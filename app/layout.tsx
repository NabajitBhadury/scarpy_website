import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Scri - Turn any website into a personal AI agent. Instantly.",
  description: "Crawl docs, wikis, and articles, then chat with them directly in your browser or IDE. 100% local, 100% private. Transform your workflow with Scri Chrome extension.",
  keywords: ["Chrome extension", "AI agent", "website crawler", "documentation", "IDE integration", "MCP", "local AI", "private AI"],
  authors: [{ name: "Scri Team" }],
  openGraph: {
    title: "Scri - Turn any website into a personal AI agent",
    description: "Crawl docs, wikis, and articles, then chat with them directly in your browser or IDE. 100% local, 100% private.",
    type: "website",
    url: "https://scri.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scri - Turn any website into a personal AI agent",
    description: "Crawl docs, wikis, and articles, then chat with them directly in your browser or IDE. 100% local, 100% private.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

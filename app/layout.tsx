import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReadabilityCheck — WCAG Compliance for Content Teams",
  description: "Scan blog posts, product descriptions, and marketing copy for WCAG readability compliance and get actionable improvement suggestions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0e0b3b15-6df3-4d03-b9fd-60ed31894a71"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";
import ThemeProvider from "@/components/ThemeProvider";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adithyavmohan.dev"),
  title: `${profile.name} — ${profile.title}`,
  description:
    "Adithya V Mohan — Full Stack Developer specializing in React.js, Next.js, Node.js, PostgreSQL and TypeScript. Based in Sharjah, UAE.",
  keywords: [
    "Adithya V Mohan",
    "Full Stack Developer",
    "React Developer UAE",
    "Next.js Developer",
    "Node.js Developer",
    "PostgreSQL",
    "TypeScript Developer Dubai",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description:
      "Full Stack Developer building end-to-end web applications with React.js, Next.js, Node.js and PostgreSQL.",
    url: "https://adithyavmohan.dev",
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description:
      "Full Stack Developer building end-to-end web applications with React.js, Next.js, Node.js and PostgreSQL.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-void text-ink font-body antialiased selection:bg-cyan/30 selection:text-white">
        {/* Runs before hydration so the correct theme applies with no flash of the wrong one. */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var stored = localStorage.getItem('theme');
              var theme = stored === 'light' || stored === 'dark'
                ? stored
                : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {}
          `}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

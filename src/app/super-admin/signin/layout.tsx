import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Đăng nhập Super Admin",
  description: "Trang đăng nhập dành cho Super Admin",
};

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background min-h-screen flex items-center justify-center`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="w-full max-w-md p-6 mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toogle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TicketFast - Đặt vé sự kiện dễ dàng",
  description: "Nền tảng đặt vé sự kiện trực tuyến nhanh chóng và tiện lợi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="border-b sticky top-0 z-50 bg-background">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="TicketFast Logo"
                  width={40}
                  height={40}
                />
                <Link href="/" className="text-xl font-bold">
                  TicketFast
                </Link>
              </div>
              
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="hover:text-primary transition-colors">
                  Trang chủ
                </Link>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Sự kiện
                </Link>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </nav>
              
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <div className="flex items-center gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/signin">Đăng nhập</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signin">Đăng ký</Link>
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer className="bg-muted py-6 mt-10">
            <div className="container mx-auto px-4 text-center">
              <p>© 2024 TicketFast. Tất cả các quyền được bảo lưu.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

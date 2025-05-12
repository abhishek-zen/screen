
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import AuthButton from "@/components/header-auth";

export const metadata: Metadata = {
  title: "Core Platform – Analytics, Compliance & Monitoring",
  description: "Unified platform for compliance, audit, and analytics workflows. Navigate seamlessly between main features.",
  openGraph: {
    title: "Core Platform – Analytics, Compliance & Monitoring",
    description: "Unified platform for compliance, audit, and analytics workflows. Navigate seamlessly between main features.",
    images: [
      {
        url: "https://images.pexels.com/photos/5668866/pexels-photo-5668866.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 800,
        alt: "Analytics and Compliance Dashboard"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-tr from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
        <header className="w-full px-4 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-extrabold tracking-tight text-lg md:text-2xl text-primary hover:text-accent transition-colors">
              CorePlatform
            </Link>
            <nav className="hidden md:flex gap-4 text-sm font-medium">
              <Link href="/analytics" className="hover:text-secondary transition-colors">Analytics</Link>
              <Link href="/compliance" className="hover:text-secondary transition-colors">Compliance</Link>
              <Link href="/instruments" className="hover:text-secondary transition-colors">Instruments</Link>
              <Link href="/protected" className="hover:text-secondary transition-colors">Protected</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <AuthButton />
          </div>
        </header>
        {/* Mobile nav */}
        <nav className="md:hidden flex px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 gap-4 text-sm font-medium">
          <Link href="/analytics" className="hover:text-secondary transition-colors">Analytics</Link>
          <Link href="/compliance" className="hover:text-secondary transition-colors">Compliance</Link>
          <Link href="/instruments" className="hover:text-secondary transition-colors">Instruments</Link>
        </nav>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

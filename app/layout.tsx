import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "টাউনশিপ অনলাইন সেবা - সাতক্ষীরা জেলার সকল সেবা এখন অনলাইনে",
  description:
    "সাতক্ষীরা জেলার সকল প্রয়োজনীয় সেবা এখন আপনার হাতের মুঠোয়। ইউনিয়ন পরিষদ সেবা, ডাক্তার, হাসপাতাল, অ্যাম্বুলেন্স, ফায়ার সার্ভিস, শিক্ষা প্রতিষ্ঠান, ইলেক্ট্রিশিয়ান, পুলিশ স্টেশন, সাংবাদিক, আইনজীবী, উদ্যোক্তা সেবা এখন অনলাইনে।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Nunito } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header/Header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Formik Practice",
  description: "For Practicing Formik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-neutral-200 `}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

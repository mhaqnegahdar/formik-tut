import "./globals.css";
import { Nunito } from "next/font/google";

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
      <body className={nunito.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

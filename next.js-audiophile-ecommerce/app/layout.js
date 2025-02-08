import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Manrope = localFont({
  src: "../fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});

export const metadata = {
  title: "Frontend Mentor | Audiophile e-commerce website",
  description: "Non et ut commodo elit aliqua magna ea id cillum id aliquip exercitation. Ullamco tempor magna occaecat aliqua incididunt ullamco qui veniam Lorem excepteur reprehenderit Lorem.",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${Manrope.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

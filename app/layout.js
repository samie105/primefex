import Navbar from "@/components/Navbar";
import "./globals.css";
import "./styles.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import { FormDataProvider } from "@/contexts/data";

const poppins = Poppins({ subsets: ["devanagari"], weight: "300" });

export const metadata = {
  title: "Primefexloans | Your Instant Loan Service",
  description: "Your to go for all loan application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FormDataProvider>
          <Navbar />
          {children}
          <Footer />
        </FormDataProvider>
      </body>
    </html>
  );
}

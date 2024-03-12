import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BootstrapClient from "@/lib/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Employee Profile",
  description: "Asif Inc employee information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}

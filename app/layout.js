import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className="bg-slate-900">
          {children}
      </body>
    </html>
  );
}

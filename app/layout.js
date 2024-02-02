import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Vikram Mahto",
  description: "I build websites with a focus on responsive design and accessibility. I'm a Frontend Developer, Web & Graphics Designer, and open-source contributor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  );
}

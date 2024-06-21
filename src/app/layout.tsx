import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WorkoutsContextProvider } from '../context/WorkoutContext';
import { AuthContextProvider } from "../context/AuthContext";
import Navbar from "@/components/Navbar/index";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workout Buddy",
  description: "MERN App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description ? metadata.description : ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <WorkoutsContextProvider>
            <Navbar />
            { children }
          </WorkoutsContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}

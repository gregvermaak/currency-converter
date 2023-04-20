import "./globals.css";
import localFont from "next/font/local";

const gintronic = localFont({
  src: [
    {
      path: "./fonts/Gintronic-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gintronic-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Gintronic-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gintronic-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gintronic",
});

export const metadata = {
  title: "Currency Converter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gintronic.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}

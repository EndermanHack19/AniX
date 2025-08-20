import "./globals.css";
import { App } from "./App";
import { ThemeModeScript } from "flowbite-react";
import { PublicEnvScript } from 'next-runtime-env';

export const metadata = {
  metadataBase: new URL("https://ani-x-kappa.vercel.app"),
  keywords: ["anix", "anixart", "anime", "аниксарт", "аниме"],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: {
    template: "AniL | %s",
    default: "AniL | Домашняя",
  },
  description: "Неофициальное приложение для anixart.tv",

  openGraph: {
    images: [
      {
        url: "/opengraph.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PublicEnvScript />
        <ThemeModeScript />
      </head>
      <App>{children}</App>
    </html>
  );
}

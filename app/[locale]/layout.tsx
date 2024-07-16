import { PropsWithChildren } from "react";
import { getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import { NextIntlProvider } from "./providers/server";
import { ThemeProvider } from "./providers/client";
import { locales, Locale } from "@/i18n/dictionaries";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type RootLayoutProps = PropsWithChildren & {
  params: { locale: Locale };
};

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    /**
     * TODO: Warning: Extra attributes from the server: class,style
     * https://github.com/vercel/next.js/discussions/22388#discussioncomment-8271118
     */
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/icons/favicon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlProvider>{children}</NextIntlProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

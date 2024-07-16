import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/dictionaries";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
});

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next|images).*)",
    // Optional: only run on root (/) URL
    "/",
    "/(en|ru)/:path*",
  ],
};

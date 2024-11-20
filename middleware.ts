import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fi"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(fi|en)/:path*"],
};
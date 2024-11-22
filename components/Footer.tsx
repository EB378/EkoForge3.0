"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black text-white w-screen py-10">
      <div className="w-full px-6 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center md:text-left">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href={`/${locale}/`}>
              <img
                src="/CopyForge-3-removebg-preview.png"
                alt="Logo"
                className="h-10 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm text-gray-400">
              {t("aboutText")}
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 text-white">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Instagram">
              Facebook
              </a>
              <a href="#" aria-label="Twitter">
              Facebook
              </a>
              <a href="#" aria-label="LinkedIn">
              Facebook
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold">{t("solutions")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline">{t("marketing")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("analytics")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("automation")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("commerce")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("insights")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{t("support")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline">{t("submitTicket")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("documentation")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("guides")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{t("company")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline">{t("about")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("blog")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("jobs")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("press")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">{t("legal")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:underline">{t("terms")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("privacy")}</a>
              </li>
              <li>
                <a href="#" className="hover:underline">{t("license")}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} EkoForge Oy. {t("rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

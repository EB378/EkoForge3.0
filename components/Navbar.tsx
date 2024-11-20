"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };
  return (
    <div>
      <Link href={`/${locale}/`}>
        <Image
          src="/CopyForge-3-removebg-preview.png"
          width={172}
          height={35}
          alt="Results-Driven Business Solutions And Digital Marketing"
        />
      </Link>
      <div>
        <div>
          <Link href={`/${locale}/#clients`}>{t("nav1")}</Link>
          <Link href={`/${locale}/#testimonials`}>{t("nav2")}</Link>
          <Link href={`/${locale}/#contactsec`}>{t("nav3")}</Link>
        </div>
      </div>
      <div>
        <Link href={`https://calendly.com/ekoforge`}>{t("nav4")}</Link>
        <select
          value={locale}
          onChange={handleLanguageChange}
          className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        >
          <option value="en">EN</option>
          <option value="fi">FI</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;

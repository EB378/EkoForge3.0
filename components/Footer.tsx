"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Footer = ({ locale }: { locale: string }) => {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const router = useRouter();

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
      <p>
        EkoForge Oy <br/>
        {t("phone")}: <a href="tel:+358442413840">+358 44 2413 840</a><br/>
        {t("email")}: <a href="mailto:ekoforge@gmail.com">ekoforge@gmail.com</a><br/>
      </p>
      <h1>{t("rights")}</h1>
    </div>
  );
};

export default Footer;

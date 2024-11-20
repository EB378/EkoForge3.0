"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from 'next/image'
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Contact = ({ locale }: { locale: string }) => {
  const t = useTranslations("Contact");
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div id="contactsec">
      <div>
        <div>
            <h1>{t("title")}</h1>
            <form name="contact">
              <input type="text" name="name" placeholder={t("name")} required/>

              <input type="email" name="email" placeholder={t("emailentry")} required/>

              <input type="phone" name="phone" placeholder={t("phoneentry")}  required/>

              <input type="text" name="company" placeholder={t("company")} />

              <input type="textbox" name="reason" placeholder={t("reason")} required/>

              <input type="textbox" name="source" placeholder={t("source")} />

              <input type="textbox" name="website" placeholder={t("website")} />

              <input type="textbox" name="budget" placeholder={t("budget")} />


              <br/>
              <button type="submit"><h1>{t("send")} </h1></button>
            </form>

        </div>
        <div>  
          <div>
          <h3>{t("q1")}
            <br/>{t("q2")}</h3>
            </div>
          <div>
            <h2>{t("contact information")}</h2>
            <p>
              EkoForge Oy <br/>
              {t("phone")}: <a href="tel:+358442413840">+358 44 2413 840</a><br/>
              {t("email")}: <a href="mailto:ekoforge@gmail.com">ekoforge@gmail.com</a><br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

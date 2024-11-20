import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/Contact";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages: any = await getMessages({ locale });
  const title = messages.NavbarLinks.homeTitle;

  return {
    title,
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex w-full items-center justify-center">
      <div>
      <main>
        <div>

{/* Hook! */}
          <h1>  
            {t("More Growth More Sales")}<br/> 
            {t("More Turnover Guaranteed")}
          </h1>
          
{/* CTA */}
          <div>
            <Link href="https://calendly.com/ekoforge">
              <button>
                
               {t("CTA")}
              </button>
            </Link>
            <Link href="#contactsec">
              <button>
              {t("contact")}
              </button>
            </Link>
          </div>
          <p><br/>{t("nextlevel")}</p>



          
{/* tension/agitation/problem */}

          <div>

            <h3>{t("agitate1")}</h3>

            <h2>{t("agitate2")}</h2>

            <h3>{t("agitate3")}</h3>
            
            {/* Inline, Small Business stuggles with marketing*/}
            <div>


              {/* Point 1 */}
              <div>
                <div>
                  <h3>{t("agitatepoint1")}</h3><br/>
                  <p> {t("agitatepoint11")}<br/><br/><br/>{t("agitatepoint12")}</p>
                </div>
              </div>


              {/* Point 2 */}
              <div>
                <div>
                  <h3>{t("agitatepoint2")}</h3><br/>
                  <p>{t("agitatepoint21")}<br/> <br/>{t("agitatepoint22")}</p>
                </div>
              </div>


              {/* Point 3 */}
              <div>
                <div>
                  <h3>{t("agitatepoint3")}</h3><br/>
                  <p> {t("agitatepoint31")}<br/><br/>{t("agitatepoint32")}</p>
                </div>
              </div>
            </div>
          </div>

          <hr id="clients"/>

{/* CTA, How to solve the problem*/}
          <div>

          <h3>{t("CTA1")} </h3>

            <h2>{t("CTA2")}</h2>

            <h3>{t("CTA3")}</h3>
            
            {/* CTA Button*/}
            <div>
              <Link href="https://calendly.com/ekoforge">
                <button>
                  
                  {t("CTA4")}
                </button>
              </Link>
              <Link href="#contactsec">
                <button>
                {t("contact")}
                </button>
              </Link>
            </div>
            <p>{t("CTA4")}</p>
          </div>


{/* Testimonials */}
          <div id="testimonials">


            <div>
              <Image
                src="/ekotestimoonial1.png"
                width={150}
                height={150}
                alt="Testimonial Client Logo Blured"
              />


              <h2>{t("testimonials1")}<br/>
              <br/>
              — Kimmo,  2024
              </h2>


            </div>
          </div>


{/* Not convinced? What Sets Us Apart? */}
          <div>

            <h2>{t("distinction1")}</h2>

            <h1>{t("distinction2")}</h1>
            
            {/* Inline, Small Business stuggles with marketing*/}
            <div>


              {/* Point 1 */}
              <div>
                <div>
                  <h3>{t("distinctionpoint1")}</h3>
                  <p> {t("distinctionpoint11")} <br/><br/>{t("distinctionpoint12")}</p>
                </div>
              </div>


              {/* Point 2 */}
              <div>
                <div>
                  <h3>{t("distinctionpoint2")}</h3>
                  <p>{t("distinctionpoint21")}<br/><br/>{t("distinctionpoint22")}</p>
                </div>
              </div>


              {/* Point 3 */}
              <div>
                <div>
                  <h3>{t("distinctionpoint3")}</h3>
                  <p>{t("distinctionpoint31")} <br/><br/> {t("distinctionpoint32")}</p>
                </div>
              </div>


            </div>
          </div>

{/* Contact */}
          <Contact locale={""}/>

        </div>
      </main>
    </div>
    </div>
  );
}

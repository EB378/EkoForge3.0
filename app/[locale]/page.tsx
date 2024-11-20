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
            More Growth. More Sales.<br/> 
            More Turnover. Guaranteed.
          </h1>
          
{/* CTA */}
          <div>
            <Link href="https://calendly.com/ekoforge">
              <button>
                
               Let's Make It Happen
              </button>
            </Link>
            <Link href="#contactsec">
              <button>
                Contact Us
              </button>
            </Link>
          </div>
          <p><br/>DO WHAT YOU DO BEST, WE'LL GUIDE YOU TO THE NEXT LEVEL</p>



          
{/* tension/agitation/problem */}

          <div>

            <h3>A Businesses In 2024</h3>

            <h2>Needs Marketing and Digitization</h2>

            <h3>So How Do You Get That?</h3>
            
            {/* Inline, Small Business stuggles with marketing*/}
            <div>


              {/* Point 1 */}
              <div>
                <div>
                  <h3>Do Everthing Yourself?</h3><br/>
                  <p> If you have little to do, it's not a problem.<br/><br/><br/>However, if you're busy... this is not feasible.</p>
                </div>
              </div>


              {/* Point 2 */}
              <div>
                <div>
                  <h3>Hire Staff?</h3><br/>
                  <p>Hiring a good team is <b>difficult</b>,<br/> and training them is expensive.<br/> <br/> It's not worth it and it takes too much time.</p>
                </div>
              </div>


              {/* Point 3 */}
              <div>
                <div>
                  <h3>Hire an Agency?</h3><br/>
                  <p>Your business gets shoved into a generic template, missing out on the tailored strategies needed to skyrocket your success. <br/><br/>Not worth it.</p>
                </div>
              </div>


            </div>
          </div>

          <hr id="clients"/>

{/* CTA, How to solve the problem*/}
          <div>

          <h3>Your Business Is Statistically Destined To Fall Apart.</h3>

            <h2>Your Competitors Are Winning!</h2>

            <h3>The Time To Take Action Has Come!</h3>
            
            {/* CTA Button*/}
            <div>
              <Link href="https://calendly.com/ekoforge">
                <button>
                  
                  Let's Get My Business On Track
                </button>
              </Link>
              <Link href="#contactsec">
                <button>
                  Contact Us
                </button>
              </Link>
            </div>
            <p>This You Will Not Regret.</p>
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


              <h2>The impact on our branding and visual image has been very positive. I would highly recommend these services for any company or NGO that wants to have reliable, fast paced and good quality visual updates for their social media and/or advertisement.<br/>
              <br/>
              — Kimmo,  2024
              </h2>


            </div>
          </div>


{/* Not convinced? What Sets Us Apart? */}
          <div>

            <h2>Still Not Sure? Still Have Questions?</h2>

            <h1>"What Sets Us Apart From The Rest?"</h1>
            
            {/* Inline, Small Business stuggles with marketing*/}
            <div>


              {/* Point 1 */}
              <div>
                <div>
                  <h3>GUARANTEE</h3>
                  <p> We only win if you win. <br/><br/>You won't carry a risk, we'll share it.</p>
                </div>
              </div>


              {/* Point 2 */}
              <div>
                <div>
                  <h3>RESULT</h3>
                  <p>Our first priority is to get you results.<br/><br/>Less talk, more walk.</p>
                </div>
              </div>


              {/* Point 3 */}
              <div>
                <div>
                  <h3>OUTLIER</h3>
                  <p>We don't just follow the crowd. <br/><br/> We customise and set new standards.</p>
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

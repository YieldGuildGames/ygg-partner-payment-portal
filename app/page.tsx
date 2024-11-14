import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { PayEmbed } from "thirdweb/react";
import { client } from "../config/Thirdweb/client";
import { GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO } from "@/utils/constants/paymentInfo.constants";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Welcome to the&nbsp;</span>
        <span className={title({ color: "violet" })}>Partner&nbsp;</span>
        <br />
        <span className={title()}>Payment Portal</span>
        {/* <div className={subtitle({ class: "mt-4" })}>
        </div> */}
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "sm",
            variant: "shadow",
          })}
          href={siteConfig.links.partnerDashboard}
        >
          Back to Partner Dashboard
        </Link>
      </div>

      <PayEmbed
        client={client}
        payOptions={{
          mode: "direct_payment",
          paymentInfo: GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO.paymentInfo,
          metadata: GUILD_ADVANCEMENT_PROGRAM_PAYMENT_INFO.metadata,
        }}
        connectOptions={{
          connectModal: {
            size: "wide",
          },
        }}
      />
    </section>
  );
}

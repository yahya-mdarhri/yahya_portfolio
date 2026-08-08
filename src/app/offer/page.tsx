import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `What I Offer — ${profile.name}`,
  description: "Six ways Yahya Mdarhri can help — from PMP-certified project delivery to production machine learning.",
};

export default function OfferPage() {
  return (
    <>
      <section className="pt-16 pb-8 sm:pt-24">
        <div className="section-container">
          <SectionHeading
            eyebrow="What I offer"
            title="Six ways I can help."
            description="Each card is an outcome I've delivered before — pick the one you need, or combine a few into an end-to-end engagement."
          />
        </div>
      </section>
      <section className="pb-20 sm:pb-28">
        <div className="section-container">
          <Services />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectAscent from "@/components/ProjectAscent";
import LatestNews from "@/components/LatestNews";
import UpcomingEvents from "@/components/UpcomingEvents";
import BecomeMember from "@/components/BecomeMember";
import CoachingOfficiating from "@/components/CoachingOfficiating";
import Disciplines from "@/components/Disciplines";
import FeaturedAthletes from "@/components/FeaturedAthletes";
import InOurNetwork from "@/components/InOurNetwork";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Separator from "@/components/Separator";
import LoadingAnimation from "@/components/LoadingAnimation";
import ScrollAnimation from "@/components/ScrollAnimation";
import { usePageLoading } from "@/hooks/usePageLoading";

export default function Home() {
  const isLoading = usePageLoading();

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col gap-80">
        <Hero />

        <ScrollAnimation direction="up" delay={0.1}>
          <ProjectAscent />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <LatestNews />
        </ScrollAnimation>

        <Separator />

        <ScrollAnimation direction="up" delay={0.1}>
          <UpcomingEvents />
        </ScrollAnimation>

        <Separator />

        <ScrollAnimation direction="up" delay={0.2}>
          <BecomeMember />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <CoachingOfficiating />
        </ScrollAnimation>

        <Separator />

        <ScrollAnimation direction="up" delay={0.1}>
          <Disciplines />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <FeaturedAthletes />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3}>
          <InOurNetwork />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.1}>
          <SubscribeNewsletter />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.2}>
          <Partners />
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.1}>
          <Footer />
        </ScrollAnimation>
      </div>
    </div>
  );
}

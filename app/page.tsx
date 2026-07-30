import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { Preview } from "@/components/Preview";
import { SignupForm } from "@/components/SignupForm";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <Preview />
        <HowItWorks />
        <Benefits />
        <SignupForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

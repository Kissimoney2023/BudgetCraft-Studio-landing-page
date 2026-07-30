import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-prose px-6 py-12"
    >
      <h2
        id="faq-heading"
        className="font-display text-2xl text-foreground sm:text-3xl"
      >
        {faq.heading}
      </h2>
      <Accordion type="single" collapsible className="mt-4">
        {faq.items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { CONTENT } from "./strings";

export function AccordionTechlogies() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {CONTENT.map((data) => (
        <div key={data.id}>
          <AccordionItem value={data.id + ""}>
            <AccordionTrigger>{data.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex space-x-5 w-full items-center justify-start">
                <Image
                  src={data.url}
                  alt={data.url}
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <p>{data.content}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}

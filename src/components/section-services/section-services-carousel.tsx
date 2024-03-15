"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES_INFO } from "./strings";
import Image from "next/image";
import { SectionServicesCard } from "./section-services-card";

export function SectionServicesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {SERVICES_INFO.map((item) => (
          <CarouselItem
            key={item.id}
            className="flex items-center justify-center"
          >
            <SectionServicesCard key={item.id} serviceInfo={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-6 bg-purple-500" />
      <CarouselNext className="mr-6 bg-purple-500" />
    </Carousel>
  );
}

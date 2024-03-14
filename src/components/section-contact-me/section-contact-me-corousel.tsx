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
import { CONTENT_INFO } from "./strings";
import Image from "next/image";

export function SectionContactMeCarousel() {
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
        {/* Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        )) */}
        {CONTENT_INFO.map((item) => (
          <CarouselItem key={item.id}>
            <div className="flex m-2 space-x-3 p-2 border rounded-md items-center justify-center">
              <Image
                loading="lazy"
                src={item.image}
                width={30}
                height={30}
                alt={item.image}
              />
              <div>
                <h3>{item.title}</h3>
                <p className="text-xs">{item.content}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-3 bg-purple-500" />
      <CarouselNext className="mr-3 bg-purple-500" />
    </Carousel>
  );
}

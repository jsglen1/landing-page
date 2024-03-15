import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type CardProps = React.ComponentProps<typeof Card>;

interface ServiceInfo {
  id: number;
  title: string;
  content: string;
  image: string;
}

export function SectionServicesCard({
  className,
  serviceInfo,
  ...props
}: CardProps & { serviceInfo: ServiceInfo }) {
  const { title, content, image } = serviceInfo;

  return (
    <Card
      className={cn("w-[300px] xl:w-1/5 h-[450px] overflow-hidden", className)}
      {...props}
    >
      <CardHeader>
        <Image
          loading="lazy"
          className="w-full h-52 p-5"
          src={image}
          alt={image}
          width={50}
          height={50}
        />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-center gap-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardContent>
      {/* 
      <CardFooter className="flex items-center justify-center">
        <Button className="w-1/2">
          <CheckIcon className="mr-2 h-4 w-4" /> Leer mas...
        </Button>
      </CardFooter>
      */}
    </Card>
  );
}
